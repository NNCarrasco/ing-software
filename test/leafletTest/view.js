var cluster;
const comerciosList = [
  {
    id: "01",
    nombre: "Juliana cuida",
    rubro: "Petshop",
    direccion: "Avenida lores nº 43",
    posicion: {
      lon: "-34.533555",
      lat: "-58.695713",
    },
  },
  {
    id: "02",
    nombre: "Rodri",
    rubro: "Veterinaria",
    direccion: "Avenida lores nº 44",
    posicion: {
      lon: "-34.543555",
      lat: "-58.705713",
    },
  },
  {
    id: "03",
    nombre: "cuida",
    rubro: "Petshop",
    direccion: "Avenida lores nº 45",
    posicion: {
      lon: "-34.523555",
      lat: "-58.685713",
    },
  },
  {
    id: "04",
    nombre: "te corto pelo",
    rubro: "Peluqueria",
    direccion: "Avenida lores nº 2",
    posicion: {
      lon: "-34.343555",
      lat: "-58.435713",
    },
  },
  {
    id: "04",
    nombre: "Juliana cuida",
    rubro: "Veterinaria",
    direccion: "Avenida lores nº 46",
    posicion: {
      lon: "-34.433555",
      lat: "-58.595713",
    },
  },
];

function search() {
  let textSearched = document.getElementById("buscador").value;
  let selectedComercios;
  if (textSearched) {
    let sad = "dogo";
    selectedComercios = comerciosList.filter(
      (comercio) => comercio.rubro === textSearched
    );
  }
  showInMap(selectedComercios);
}

function showInMap(selectedComerciosList) {
  clearMap();
  let markerList = [];
  if (selectedComerciosList.length !== 0) {
    selectedComerciosList.forEach((comercio) => {
      markerList.push(L.marker([comercio.posicion.lon, comercio.posicion.lat]));
    });
  } else {
    comerciosList.forEach((comercio) => {
      markerList.push(L.marker([comercio.posicion.lon, comercio.posicion.lat]));
    });
  }
  this.cluster.addLayers(markerList);
}

function clearMap() {
  this.cluster.clearLayers();
}
function bootstrap() { // como inicia
  var ungsLocation = [-34.5221554, -58.7000067];
  var map = L.map("mapid").setView(ungsLocation, 15);

  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">hola</a> contributors',
  }).addTo(map);

  L.polygon([
    L.latLng(-34.515594, -58.705654),
    L.latLng(-34.523503, -58.714062),
    L.latLng(-34.519177, -58.71989),
    L.latLng(-34.511089, -58.711374),
    L.latLng(-34.514062, -58.707909),
  ]).addTo(map);

  var ungsMarker = L.marker(ungsLocation);
  ungsMarker.addTo(map);

  this.cluster = L.markerClusterGroup();
  cluster.addLayers([
    ungsMarker,
    L.marker([-34.533755, -58.692713]),
    L.marker([-34.533555, -58.695713]),
    L.marker([-34.516181, -58.716625]),
    L.marker([-35.533755, -57.692713]),
    L.marker([-35.533755, -57.692713]),
    L.marker([-35.533755, -57.692713]),
  ]);

  // var cluster2 = L.markerClusterGroup();
  // cluster2.addLayers([
  //   L.marker([-35.533755, -57.692713]),
  //   L.marker([-35.533755, -57.692713]),
  //   L.marker([-35.533755, -57.692713]),
  // ])

  cluster.addTo(map);
  // cluster2.addTo(map);
  //map.addLayer(cluster);
}
