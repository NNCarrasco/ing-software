var initialBusinessList;
var clusterMap = new Map();
var appliedFiltersMap = new Map();
var mapLeaflet;
const filterContaierKey = "#filter-list";
const listContaierKey = "#business-list";

const init = () => {
	initialBusinessList = getBusiness();
	let businessFilterList = getBusinessFilters();
	//Leaflet constuction
	initMap();
	constructClusterMap(initialBusinessList);
	
	//filters constuction
	for (filter of businessFilterList) {
		appliedFiltersMap.set(filter.id, {
			//TODO: cambiar las variables filterVarKey y filterValue por uno que no diga filter proq ue si no que filter.filtervalue
			isFilterign: false,
			filterVarKey: filter.varKey,
			filterValue: "",
		});
	}
	graficFilters(filterContaierKey, businessFilterList);
	//business card construction
	graficBusinessCard(listContaierKey, initialBusinessList);
};

$(document).ready(init);

function constructClusterMap(businessList) {
	//TODO: agregar tema de color de marker | intentar colorear los cluster por color
	clusterMap = new Map();
	for (b of businessList) {
		let marker = L.marker([b.posicion.lat, b.posicion.lon]);
		let rubroCluster = clusterMap.get(b.rubro);
		if (rubroCluster) {
			rubroCluster.addLayer(marker);
			clusterMap.set(b.rubro, rubroCluster);
		} else {
			let cluster = L.markerClusterGroup();
			cluster.addLayer(marker);
			clusterMap.set(b.rubro, cluster);
		}
    }
    for (cluster of clusterMap.values()) {
		cluster.addTo(mapLeaflet);
	}
}

function selectFilter (component) {
    let filterId = component.dataset.id;
    let filterValue = component.value;

    let filter = appliedFiltersMap.get(filterId);
    if(filterValue !== "All") {
        filter.filterValue = filterValue;
        filter.isFilterign = true;
        appliedFiltersMap.set(filterId, filter);
    } else {
        filter.filterValue = "";
        filter.isFilterign = false;
    }
    applyfilter();
}

function applyfilter() {
    let filteredList = initialBusinessList;
    let filterMap = appliedFiltersMap;

    for (var filter of filterMap.values()) {
        if (filter.isFilterign){
            filteredList = filteredList.filter(item => item[filter.filterVarKey] === filter.filterValue);
        }
    }
    clearMap(clusterMap);
    constructClusterMap(filteredList);
    emptyElementChildOf(listContaierKey);
    graficBusinessCard(listContaierKey, filteredList);
}


// leaflet map
function initMap() {
	let ungsLocation = [-34.5221554, -58.7000067];
	mapLeaflet = L.map("mapid").setView(ungsLocation, 16);
	L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(mapLeaflet);
	// TODO: BORRAR
	// mapLeaflet.on('click', function(e) {
	//     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
	// });
}

function clearMap(clusterMap) {
    for(cluster of clusterMap.values()){
        cluster.clearLayers();
    }
}

// backend/api gets FIXME: currently is calling mock data
function getBusiness() {
	return _businessList;
}

function getBusinessFilters() {
	return _businessFilters;
}

//grafics controlers
function graficBusinessCard(key, list) {
	let constructedList = [];
	for (filter of list) {
		constructedList.push(constructBussinesCard(filter)); //TODO: ver como hacer que llame al metodo
	}
	if (constructedList.length > 0) {
		$(key).append(constructedList);
	} else {
		constructEmptyMessage(key);
	}
}
function graficFilters(key, filterList) {
	//TODO: intentar unificar los grafic
	let filterConstructedList = [];
	for (filter of filterList) {
		filterConstructedList.push(
			constructAdviceFilter(filter, "selectFilter")
		); //TODO: ver como hacer que llame al metodo
	}
	$(key).append(filterConstructedList);
}
function constructAdviceFilter(filter, onchangeMethodName) {
	//TODO: hacer validaciones por cada campo
	let filterOptions = "<option value='All'>Todo</option>"; //FIXME: 'Todo' string hardcode => should be a translatable variable
	for (filterOption of filter.options) {
		filterOptions += `<option value='${filterOption}' >${filterOption}</option>`;
	}
	let filterText = `
        <div>
            <span class="filter-label">${filter.label}</span>
            <select onchange="${onchangeMethodName}(this)" data-id="${filter.id}">${filterOptions}</select>
        </div>
    `;

	return filterText;
}
function constructBussinesCard(business) {
	return `
    <div class="business-card" ${business.id? "id='" + business.id + "'" : ""} > 
        <div class="header">
            ${ business.nombre ? 
                `<div class="name">
                    ${ business.nombre }
                </div>` : ""
            }
            ${ business.rubro ? 
                `<div class="rubro">
                    ${ business.rubro }
                </div>` : ""
            }
            ${ business.telefono ? 
                `<div class="phone">
                    <i class="fas fa-phone-square phone-icon"></i>
                    ${ business.telefono }
                </div>` : ""
            }
        </div>
        <div class="description">
            ${ business.description ? 
                `<span>
                    ${ business.description }
                </span>` : ""
            }
        </div>
    </div>
    `;
}
function constructEmptyMessage(key) {
	let emptyMessage = `
        <div class="message">
            <span>No hay contenido</span>
        </div>
    `; // FIXME: 'No hay contenido' string hardcode => should be a translatable variable
	$(key).append(emptyMessage);
}
function emptyElementChildOf(key) {
    $(key).empty();
}