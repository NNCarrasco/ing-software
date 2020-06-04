import {construct, emptyElementChildOf} from '../../js/modules/draw/draw.js';
import {_adviceList, _adviceFilters} from '../../js/mock/data.js';
import {initFilter, selectFilter} from '../../js/modules/filter/filter.js';

const cardsContainerKey = "#card-list";
const filterContaierKey = "#filter-list";

const adviceList = getAdvices();
const filterList = getAdvicesFilters();

const init = () => {
    initFilter(filterList);

    construct('advice-card', cardsContainerKey, adviceList, {onclick: "cardClicked"})
    construct('filter', filterContaierKey, filterList, {onchange: "onFilter"})
}

const cardClicked = (elm) => {
    if(elm && elm.children[1] && elm.children[1].children[1]){
        elm.children[1].children[1].classList.toggle("display-none")
    }
}
const onFilter = (elm) => {
    let filterId = elm.dataset.id;
    let filterValue = elm.value;

    let filteredList = selectFilter(filterId, filterValue, adviceList );
    
    emptyElementChildOf(cardsContainerKey)
    construct('advice-card', cardsContainerKey, filteredList, {onclick: "cardClicked"})
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
window.cardClicked = cardClicked;
$(document).ready(init);