

const init = () => {
    let adviceList = getAdvices();
    let cardsContainerKey = ".list"; // TODO: cambiar y que busque por id

    let adviceFilterList = getAdvicesFilters();
    let filterContaierKey = ".filters";// TODO: cambiar y que busque por id

    graficAdviceCards(cardsContainerKey, adviceList);
    graficAdviceFilters(filterContaierKey, adviceFilterList)
}

$(document).ready(init);

function getAdvices(){ // Get mock data
    return _adviceList;
}

function getAdvicesFilters(){ // Get mock data
    return _adviceFilters;
}

function graficAdviceFilters (key, adviceFilterList){
    let filterList = [];
    for(filter of adviceFilterList){
        filterList.push(constructAdviceFilter(filter, "sarasa"));
    }

    $(key).append(filterList);
}

function graficAdviceCards(key, adviceList){// TODO: hacer validaciones
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
function sarasa(component) { // TODO: renombrar, hacer que se pueda filtrar muchos al mismo tiempo
    let filterField = component.dataset.varkey;
    let filterValue = component.value;
    let adviceList = getAdvices();
    
    let filteredAdviceList = adviceList.filter( advice => advice[filterField] === filterValue)
    emptyElementChildOf(".list");
    graficAdviceCards(".list", filteredAdviceList);
}

function constructAdviceFilter(filter, onchangeMethodName) { // ver si hacer aun mas generico

    let filterOptions = "<option value='Todo'>Todo</option>";
    for(filterOption of filter.options){
        filterOptions += `<option value='${filterOption}' >${filterOption}</option>`;
    }
    let filterText = `
        <div>
            <span class="filter-label">${filter.label}</span>
            <select onchange="${onchangeMethodName}(this)" data-varkey="${filter.varKey}">${filterOptions}</select>
        </div>
    `;
    
    return filterText;
}