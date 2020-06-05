import constructEmptyMessage from '../component/emptyMessage.js';
import constructAdviceCard from '../component/adviceCard.js';
import constructFilter from '../component/filter.js';
import constructBussinesCard from '../component/businessCard.js';
import constructAlertCard from '../component/alertCard.js';
import constructBusinessDetail from '../component/businessDetail.js';
import constructWeatherTodayDetail from '../component/weatherTodayDetail.js';
import constructWeatherForecastCard from '../component/weatherForecastCard.js';

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
            constructedElement = constructAdviceCard(element, event.onclick);
            break;
        case "filter":
            constructedElement = constructFilter(element, event.onchange);
            break;
        case "business-card":
            constructedElement = constructBussinesCard(element, event.onclick);
            break;
        case "alert":
            constructedElement = constructAlertCard(element);
            break;
        case "business-detail":
            constructedElement = constructBusinessDetail(element, event.onclick);
            break;
        case "weather-today-detail":
            constructedElement = constructWeatherTodayDetail(element);
            break;
        case "weather-forecast":
            constructedElement = constructWeatherForecastCard(element);
            break;
    }
    return constructedElement;
}

function emptyElementChildOf(key) {
    $(key).empty();
}

export {construct, emptyElementChildOf};