import {construct, emptyElementChildOf} from '../../js/modules/draw/draw.js';

var alertList;
var alertKey = "#alert-list";
var smn_alerts = "https://ws.smn.gob.ar/alerts/type/AL" //alertas SMN
var heroku_alerts = "https://weatherservices.herokuapp.com/api/alerts/ByDay/0" //alertas SMN
var heroku_weather = "https://weatherservices.herokuapp.com/api/weather/" //alertas SMN
var weatherState;
const init = () => {
    fetch(heroku_weather)
    .then( response => response.json() )
    .then( response => {
        weather = getWeather(response);
        console.log(response);
    })
    .catch((error) => {
        console.log(error.message);
    });
};

function getWeather(weather){
    let listForpronostic;
    listForAlerts = alertList.map(a => {
        return {date:a.date, hour:a.hour, status:a.status, title:a.title, description:a.description, zones:a.zones};
    });
    return listForAlerts;
}
function heroku_req(){
    fetch(heroku_alerts)
    .then( response => response.json() )
    .then( response => {
         alertList = getAlert(response.alerts);
         construct('alert', alertKey, alertList);
    })
    .catch((error) => {
        console.log(error.message);
    });
}

function initAlerts(){
    fetch(smn_alerts)
		.then( response => response.json() )
		.then( response => {
            if (response.lenght > 0){
                alertList = getAlert(response);
                construct('alert', alertKey, alertList);
            }else{
                heroku_req();
                console.log("smn sin alertas");
            }
        })
        .catch((error) => {
            console.log(error.message);
            heroku_req();
        });
}

function getAlert(alertList){
    let listForAlerts;
    listForAlerts = alertList.map(a => {
        return {date:a.date, hour:a.hour, status:a.status, title:a.title, description:a.description, zones:a.zones};
    });
    return listForAlerts;
}

// TODO: usar heroku para el tiempo | alertas con la de ssn y si falla o esta vacio ir a heroku
$(document).ready(init);
