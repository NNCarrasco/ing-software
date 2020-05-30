let clusterMap;
let map;

function initMap(initLocation, initZoom) {
	map = L.map("mapid").setView(initLocation, initZoom);
	L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    
	// TODO: BORRAR
	// mapLeaflet.on('click', function(e) {
	//     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
	// });
}

function constructClusterMap(itemsList) {
	//TODO: agregar tema de color de marker | intentar colorear los cluster por color
	clusterMap = new Map();
	for (let item of itemsList) {
		let marker = L.marker([item.lat, item.lon]);
		let idCluster = clusterMap.get(item.id);
		if (idCluster) {
			idCluster.addLayer(marker);
			clusterMap.set(item.id, idCluster);
		} else {
			let cluster = L.markerClusterGroup();
			cluster.addLayer(marker);
			clusterMap.set(item.id, cluster);
		}
    }
    for (let cluster of clusterMap.values()) {
		cluster.addTo(map);
	}
}

function clearMap() {
    for(let cluster of clusterMap.values()){
        cluster.clearLayers();
    }
}

export {initMap, constructClusterMap, clearMap};