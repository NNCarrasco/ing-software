import constructEmptyMessage from '../component/emptyMessage.js';
import constructAdviceCard from '../component/adviceCard.js';
import constructFilter from '../component/filter.js';
import constructBussinesCard from '../component/businessCard.js';
import constructAlertCard from '../component/alertCard.js';

function construct (type, jQueryKey, elements, event = undefined){
    let constructedList = [];
    for(let element of elements){
        constructedList.push(constructBy(type, element, event));
    }
    if (constructedList.length > 0) {
		$(jQueryKey).append(constructedList);
	} else {
		constructEmptyMessage(jQueryKey);
	}
}

function constructBy (type, element, event) {
    let constructedElement;
    switch (type) {
        case "advice-card":
            constructedElement = constructAdviceCard(element);
            break;
        case "filter":
            constructedElement = constructFilter(element, event.onchange);
            break;
        case "business-card":
            constructedElement = constructBussinesCard(element);
            break;
        case "alert":
            constructedElement = constructAlertCard(element);
            break;
    }
    return constructedElement;
}

function emptyElementChildOf(key) {
    $(key).empty();
}

export {construct, emptyElementChildOf};