let clusterMap;
let markerList = [];
let map;
let iconAssignation = [];

function initMap(initLocation, initZoom) {
	map = L.map("mapid").setView(initLocation, initZoom);
	L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    
	// TODO: BORRAR
	// mapLeaflet.on('click', function(e) {
	//     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
	// });
}

function constructClusterMap(itemsList, eventFunction = undefined) {
	//TODO: agregar tema de color de marker | intentar colorear los cluster por color
	clusterMap = new Map();
	let localMarkerList = [];
	for (let item of itemsList) {
		let marker = createMarker(item, eventFunction);
		let idCluster = clusterMap.get(item.clusterId);
		if (idCluster) {
			idCluster.addLayer(marker);
			clusterMap.set(item.clusterId, idCluster);
		} else {
			let cluster = L.markerClusterGroup();
			cluster.addLayer(marker);
			clusterMap.set(item.clusterId, cluster);
		}
		localMarkerList.push(marker)
    }
    for (let cluster of clusterMap.values()) {
		cluster.addTo(map);
	}
	let group = new L.featureGroup(localMarkerList);
	map.fitBounds(group.getBounds());
	markerList = localMarkerList;
}

function createMarker (item, eventFunction){
	let markerIcon;
	let marker
	for(let iconAssig of iconAssignation){
		if(iconAssig.value === item[iconAssig.varKey] ){
			markerIcon = L.icon({
				iconUrl: iconAssig.iconPath,
				iconSize: [32, 32],
			});
		}
	}
	if (markerIcon) {
		marker = L.marker([item.lat, item.lon], {id:item.id, icon:markerIcon});
	} else {
		marker = L.marker([item.lat, item.lon], {id:item.id});
	}
	if(eventFunction) {
		marker.on('click', eventFunction);
	}
	if(item.popUpMessage){
		marker.bindPopup(item.popUpMessage);
	}
	return marker;
}

function assignIcon(iconPath, varKey, value) {
	if(iconPath && varKey && value){ 
		let assignation = {
				varKey: varKey,
				value: value,
				iconPath: iconPath,
			}
		iconAssignation.push(assignation)
	}
}
function clearMap() {
    for(let cluster of clusterMap.values()){
        cluster.clearLayers();
    }
}

function openPopUpById (id) {
	for(let marker of markerList){
		if(marker.options.id === id){
			marker.openPopup()
			map.setView(marker._latlng, 16)
		}
    }
}

export {initMap, constructClusterMap, clearMap, openPopUpById, assignIcon};