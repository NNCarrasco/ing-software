import {construct, emptyElementChildOf} from '../../js/modules/draw/draw.js';
import {_adviceList, _adviceFilters} from '../../js/mock/data.js';
import {initFilter, selectFilter} from '../../js/modules/filter/filter.js';

const cardsContainerKey = "#card-list";
const filterContaierKey = "#filter-list";

const adviceList = getAdvices();
const filterList = getAdvicesFilters();

const init = () => {
    initFilter(filterList);

    construct('advice-card', cardsContainerKey, adviceList)
    construct('filter', filterContaierKey, filterList, {onchange: "onFilter"})
}

const onFilter = (elm) => {
    let filterId = elm.dataset.id;
    let filterValue = elm.value;

    let filteredList = selectFilter(filterId, filterValue, adviceList );
    
    emptyElementChildOf(cardsContainerKey)
    construct('advice-card', cardsContainerKey, filteredList)
}

// backend/api gets FIXME: currently is calling mock data
function getAdvices(){ 
    return _adviceList;
}

function getAdvicesFilters(){ 
    return _adviceFilters;
}

//
window.onFilter = onFilter;
$(document).ready(init);