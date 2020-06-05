import {construct, emptyElementChildOf} from '../../js/modules/draw/draw.js';
import {_businessList, _businessFilters} from '../../js/mock/data.js';
import {initFilter, selectFilter} from '../../js/modules/filter/filter.js';
import {initMap, constructClusterMap, clearMap, openPopUpById, assignIcon} from '../../js/modules/map/map.js';

const filterContaierKey = "#filter-list";
const cardsContainerKey = "#business-list";
const businessDetailContainerKey = "#business-detail";

const initialBusinessList = getBusiness();
const filterList = getBusinessFilters();

var lastSelected;

const init = () => {
    initFilter(filterList);

    let ungsLocation = [-34.5221554, -58.7000067];
    initMap(ungsLocation, 16);
    assignIcon('../../../assets/markerIcons/marker-star.png', "isPartner", "Si")
    assignIcon('../../../assets/markerIcons/marker.png', "isPartner", "No")
    constructClusterMap(createListForClusterMap(initialBusinessList), onMarkerClick);

    construct('business-card', cardsContainerKey, initialBusinessList, {onclick: "businessCardClick"});
    construct('filter', filterContaierKey, filterList, {onchange: "onFilter"});
}

const onFilter = (elm) => {
    let filterId = elm.dataset.id;
    let filterValue = elm.value;

    let filteredList = selectFilter(filterId, filterValue, initialBusinessList);
    
    emptyElementChildOf(cardsContainerKey)
    construct('business-card', cardsContainerKey, filteredList, {onclick: "businessCardClick"})
    closeDetail();

    clearMap();
    constructClusterMap(createListForClusterMap(filteredList), onMarkerClick);
}
const onMarkerClick = (elm) => { // TODO: ver como hacer generico con el de abajo
    if(lastSelected){
        lastSelected.classList.toggle("select")
    }
    lastSelected = $("#" + elm.target.options.id)[0];
    lastSelected.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
    lastSelected.classList.toggle("select");
    selectCard(elm.target.options.id);
}
const businessCardClick = (elm) => {
    if(lastSelected){
        lastSelected.classList.toggle("select")
    }
    lastSelected = elm
    openPopUpById(elm.id)
    lastSelected.classList.toggle("select")
    selectCard(elm.id);
}

const closeDetail = () => {
    emptyElementChildOf(businessDetailContainerKey);
    if(lastSelected){
        lastSelected.classList.toggle("select")
        lastSelected = undefined;
    }
}

function selectCard(id) {
    let selected = initialBusinessList.filter(i => i.id === id);
    emptyElementChildOf(businessDetailContainerKey);
    construct("business-detail", businessDetailContainerKey, selected, {onclick: "closeDetail"});
}

function createListForClusterMap(businessList){
    let listForClusterMap;

    listForClusterMap = businessList.map(b => {
        let message = `<p>${b.nombre}<br>${b.rubro}</p>`
        return {
            id:b.id, 
            clusterId: b.rubro, 
            lat:b.posicion.lat, 
            lon:b.posicion.lon, 
            popUpMessage:message,
            isPartner:b.isPartner,
        };
    })
    
    return listForClusterMap;
}
// backend/api gets FIXME: currently is calling mock data
function getBusiness() {
	return _businessList;
}

function getBusinessFilters() {
	return _businessFilters;
}
//
window.onFilter = onFilter;
window.businessCardClick = businessCardClick;
window.closeDetail = closeDetail;
$(document).ready(init);