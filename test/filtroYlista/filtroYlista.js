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
    if(adviceList.length > 0) {
        $(key).append(cardList);
    } else {
        constructEmptyMessage(key);
    }
}

function emptyElementChildOf(key) {
    $(key).empty();
}

// COMPONENTS CONSTRUCTORS

function constructEmptyMessage(key) {
    let emptyMessage = `
        <div class="message">
            <span>No hay contenido</span>
        </div>
    `// FIXME: 'No hay contenido' string hardcode => should be a translatable variable
    $(key).append(emptyMessage);
}

function constructAdviceCard(advice) {
    let animalType;
    let animalGender;
    if(advice.adviceType){
        animalType = getIcons('animal', advice.animalType);
    }
    if(advice.gender){
        animalGender = getIcons('gender', advice.gender);
    }
    let cardText = `
        <div class="advice-card-container${ advice.adviceType ? ' card-type-'+advice.adviceType : '' } ">
            <div class="header">
                ${ advice.name ? 
                    `<div class="name">
                        ${ advice.name }
                    </div>` : ""
                }
                ${ advice.adviceType ? 
                    `<div class="advice-type">
                        ${ advice.adviceType }
                    </div>` : ""
                }
                ${ animalType ? 
                    `<div class="animal-type">
                        ${ animalType }
                    </div>` : ""
                }
                ${ animalGender ? 
                    `<div class="gender ${advice.gender}">
                        ${ animalGender }
                    </div>` : ""
                }
                <div class="line"></div>
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

// utils
function getIcons(iconType, value){
    if (iconType === "animal"){
        switch (value) {
            case 'Gato':
                return '<i class="fas fa-cat"></i>';
            case 'Perro':
              return '<i class="fas fa-dog"></i>';
          }
    } else if (iconType === "gender") {
        switch (value) {
            case 'Macho':
                return '<i class="fas fa-mars"></i>';
            case 'Hembra':
              return '<i class="fas fa-venus"></i>';
          }
    }
    return '';
}