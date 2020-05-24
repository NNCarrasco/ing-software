// jquery HTML key 
const cardsContainerKey = "#card-list";
const filterContaierKey = "#filter-list";

var appliedFiltersMap = new Map();
var initialAdviceList;
var filteredAdviceList;

const init = () => {
    initialAdviceList = getAdvices();

    let adviceFilterList = getAdvicesFilters();

    for(filter of adviceFilterList){
        appliedFiltersMap.set(filter.id, {//TODO: cambiar las variables filterVarKey y filterValue por uno que no diga filter proq ue si no que filter.filtervalue
            isFilterign: false,
            filterVarKey: filter.varKey,
            filterValue: "",
        });
    }

    graficAdviceCards(cardsContainerKey, initialAdviceList);
    graficAdviceFilters(filterContaierKey, adviceFilterList);
}

$(document).ready(init);

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
    let filteredList = initialAdviceList;
    let filterMap = appliedFiltersMap;

    for (var filter of filterMap.values()) {
        if (filter.isFilterign){
            filteredList = filteredList.filter(item => item[filter.filterVarKey] === filter.filterValue);
        }
    }

    emptyElementChildOf(cardsContainerKey);
    graficAdviceCards(cardsContainerKey, filteredList);
}

// backend/api gets FIXME: currently is calling mock data
function getAdvices(){ 
    return _adviceList;
}

function getAdvicesFilters(){ 
    return _adviceFilters;
}

//grafics controlers
function graficAdviceFilters (key, adviceFilterList){ //TODO: intentar unificar los grafic
    let filterList = [];
    for(filter of adviceFilterList){
        filterList.push(constructAdviceFilter(filter, "selectFilter")); //TODO: ver como hacer que llame al metodo
    }
    $(key).append(filterList);
}

function graficAdviceCards(key, adviceList){
    let cardList = [];
    for(advice of adviceList){
        cardList.push(constructAdviceCard(advice))
    }
    $(key).append(cardList);
}
function emptyElementChildOf(key) {
    $(key).empty();
}

// COMPONENTS CONSTRUCTORS

function constructAdviceCard(advice) {
    let cardText = `
        <div class="advice-card-container">
            <div class="header">
                ${ advice.adviceType ? 
                    `<div class="advice-type">
                        ${ advice.adviceType }
                    </div>` : ""
                }
                ${ advice.name ? 
                    `<div class="name">
                        ${ advice.name }
                    </div>` : ""
                }
                ${ advice.animalType ? 
                    `<div class="animal-type">
                        ${ advice.animalType }
                    </div>` : ""
                }
                ${ advice.gender ? 
                    `<div class="gender">
                        ${ advice.gender }
                    </div>` : ""
                }
            </div>
            <div class="description">
                ${ advice.description ? 
                    `<span>
                        ${ advice.description }
                    </span>` : ""
                }
            </div>
        </div>
    `;
    return cardText;
}

function constructAdviceFilter(filter, onchangeMethodName) { //TODO: hacer validaciones por cada campo
    let filterOptions = "<option value='All'>Todo</option>"; //FIXME: 'Todo' string hardcode => should be a translatable variable
    for(filterOption of filter.options){
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