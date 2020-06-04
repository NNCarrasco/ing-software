let clusterMap;
let markerList = [];
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

function constructClusterMap(itemsList, eventFunction = undefined) {
	//TODO: agregar tema de color de marker | intentar colorear los cluster por color
	clusterMap = new Map();
	let localMarkerList = [];
	for (let item of itemsList) {
		let marker = L.marker([item.lat, item.lon], {id:item.id});
		if(eventFunction) {
			marker.on('click', eventFunction);
		}
		if(item.popUpMessage){
			marker.bindPopup(item.popUpMessage);
		}
		let idCluster = clusterMap.get(item.clusterId);
		if (idCluster) {
			idCluster.addLayer(marker);
			clusterMap.set(item.clusterId, idCluster);
		} else {
			let cluster = L.markerClusterGroup();
			cluster.addLayer(marker);
			clusterMap.set(item.clusterId, cluster);
		}
		localMarkerList.push(marker)
    }
    for (let cluster of clusterMap.values()) {
		cluster.addTo(map);
	}
	markerList = localMarkerList;
}

function clearMap() {
    for(let cluster of clusterMap.values()){
        cluster.clearLayers();
    }
}

function openPopUpById (id) {
	for(let marker of markerList){
		if(marker.options.id === id){
			marker.openPopup()
			map.setView(marker._latlng, 16)
		}
    }
}

export {initMap, constructClusterMap, clearMap, openPopUpById};