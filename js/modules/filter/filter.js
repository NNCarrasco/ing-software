var appliedFiltersMap = new Map();

function initFilter(filterList) {
    for(let filter of filterList){
        appliedFiltersMap.set(filter.id, {//TODO: cambiar las variables filterVarKey y filterValue por uno que no diga filter proq ue si no que filter.filtervalue
            isFilterign: false,
            filterVarKey: filter.varKey,
            filterValue: "",
        });
    }
}

function selectFilter (id, value, list) {

    let filter = appliedFiltersMap.get(id);
    if(value !== "All") {
        filter.filterValue = value;
        filter.isFilterign = true;
        appliedFiltersMap.set(id, filter);
    } else {
        filter.filterValue = "";
        filter.isFilterign = false;
    }
    return applyfilter(list);
}

function applyfilter(list) {
    let filteredList = list;
    let filterMap = appliedFiltersMap;

    for (let filter of filterMap.values()) {
        if (filter.isFilterign){
            filteredList = filteredList.filter(item => item[filter.filterVarKey] === filter.filterValue);
        }
    }
    return filteredList;
}

export {initFilter, selectFilter}