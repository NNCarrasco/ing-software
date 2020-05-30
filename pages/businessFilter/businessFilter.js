import {construct, emptyElementChildOf} from '../../js/modules/draw/draw.js';
import {_businessList, _businessFilters} from '../../js/mock/data.js';
import {initFilter, selectFilter} from '../../js/modules/filter/filter.js';
import {initMap, constructClusterMap, clearMap} from '../../js/modules/map/map.js';

const filterContaierKey = "#filter-list";
const cardsContainerKey = "#business-list";

const initialBusinessList = getBusiness();
const filterList = getBusinessFilters();

const init = () => {
    initFilter(filterList);

    let ungsLocation = [-34.5221554, -58.7000067];
    initMap(ungsLocation, 16);
    constructClusterMap(createListForClusterMap(initialBusinessList));

    construct('business-card', cardsContainerKey, initialBusinessList);
    construct('filter', filterContaierKey, filterList, {onchange: "onFilter"});
}

const onFilter = (elm) => {
    let filterId = elm.dataset.id;
    let filterValue = elm.value;

    let filteredList = selectFilter(filterId, filterValue, initialBusinessList);
    
    emptyElementChildOf(cardsContainerKey)
    construct('business-card', cardsContainerKey, filteredList)

    clearMap();
    constructClusterMap(createListForClusterMap(filteredList));
}

function createListForClusterMap(businessList){
    let listForClusterMap;

    listForClusterMap = businessList.map(b => {
        return {id:b.rubro ,lat:b.posicion.lat, lon:b.posicion.lon};
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
$(document).ready(init);