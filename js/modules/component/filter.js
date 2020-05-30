function constructFilter(filter, onchange) { //TODO: hacer validaciones por cada campo
    let filterOptions = "<option value='All'>Todo</option>"; //FIXME: 'Todo' string hardcode => should be a translatable variable
    for(let filterOption of filter.options){
        filterOptions += `<option value='${filterOption}' >${filterOption}</option>`;
    }
    let filterText = `
        <div>
            <span class="filter-label">${filter.label}</span>
            <select onchange="${onchange}(this)" data-id="${filter.id}">${filterOptions}</select>
        </div>
    `;
    
    return filterText;
}
export default constructFilter;