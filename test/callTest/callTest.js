const init = () => {
    let weather = "https://ws1.smn.gob.ar/v1/forecast/location/4852"; //conseguir los datos del tiempo de san miguel
    let alerts = "https://ws.smn.gob.ar/alerts/type/AL" //alertas
	let token =
		"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3ZWIiLCJzY29wZXMiOiJST0xFX1VTRVJfRk9SRUNBU1QsUk9MRV9VU0VSX0dFT1JFRixST0xFX1VTRVJfSElTVE9SWSxST0xFX1VTRVJfSU1BR0VTLFJPTEVfVVNFUl9NQVAsUk9MRV9VU0VSX1NUQVRJU1RJQ1MsUk9MRV9VU0VSX1dBUk5JTkcsUk9MRV9VU0VSX1dFQVRIRVIiLCJpYXQiOjE1OTA2MDQ4OTIsImV4cCI6MTU5MDY5MTI5Mn0.UpgCiiD3XqgotNcG3IElqGfOkza8xQO7HsAm19j28FE";
	var weatherHeader = {
		headers: {
			Accept: "application/json",
			Authorization: "JWT " + token,
		},
	};
	fetch(weather, weatherHeader)
	// fetch(alerts)
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
