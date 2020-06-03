import {construct, emptyElementChildOf} from '../../js/modules/draw/draw.js';

var alertList;
var alertKey = "#alert-list";

const init = () => {
    let smn_alerts = "https://ws.smn.gob.ar/alerts/type/AL1" //alertas SMN

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
};

function heroku_req(){
    let heroku_alerts = "https://weatherservices.herokuapp.com/api/alerts/ByDay/0" //alertas SMN
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

function getAlert(alertList){
    let listForAlerts;
    listForAlerts = alertList.map(a => {
        return {date:a.date, hour:a.hour, status:a.status, title:a.title, description:a.description, zones:a.zones};
    });
    return listForAlerts;
}

// TODO: usar heroku para el tiempo | alertas con la de ssn y si falla o esta vacio ir a heroku
$(document).ready(init);
