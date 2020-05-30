const init = () => {
    let alerts = "https://ws.smn.gob.ar/alerts/type/AL" //alertas
	
	fetch(alerts)
		.then( response => response.json() )
		.then( response => {
            console.log(response);
        })
        .catch((error) => {
            alert('Hubo un problema | Fetch:' + error.message);
        });
};

// TODO: usar heroku para el tiempo | alertas con la de ssn y si falla o esta vacio ir a heroku
$(document).ready(init);
