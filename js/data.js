var _businessList = [
	{
		id: "b-1",
		nombre: "Juliana cuida",
		rubro: "Petshop",
		direccion: "Avenida lores nº 43",
		posicion: {
			lon: "-34.533555",
			lat: "-58.695713",
		},
	},
	{
		id: "b-2",
		nombre: "Rodri",
		rubro: "Veterinaria",
		direccion: "Avenida lores nº 44",
		posicion: {
			lon: "-34.543555",
			lat: "-58.705713",
		},
	},
	{
		id: "b-3",
		nombre: "cuida",
		rubro: "Petshop",
		direccion: "Avenida lores nº 45",
		posicion: {
			lon: "-34.523555",
			lat: "-58.685713",
		},
	},
	{
		id: "b-4",
		nombre: "te corto pelo",
		rubro: "Peluqueria",
		direccion: "Avenida lores nº 2",
		posicion: {
			lon: "-34.343555",
			lat: "-58.435713",
		},
	},
	{
		id: "b-5",
		nombre: "Juliana cuida",
		rubro: "Veterinaria",
		direccion: "Avenida lores nº 46",
		posicion: {
			lon: "-34.433555",
			lat: "-58.595713",
		},
	},
];

var _adviceList = [
    {
        id: "a-1",
        adviceType: "Adopcion",
        animalType: "Gato",
        name: "Rufus",
        gender: "Macho",
        age: "1 años",
        description: "Es un gato blanco con manchas negras, es manso y bueno con los niños, esta con todas sus vacunas.",
    },
    {
        id: "a-2",
        adviceType: "Adopcion",
        animalType: "Perro",
        name: "Che",
        gender: "Macho",
        age: "4 años",
        description: "Le gusta jugar, esta acostumbrado a salir dos veces al dia a pasear.",
    },
    {
        id: "a-3",
        adviceType: "Perdido",
        animalType: "Gato",
        name: "Pelusa",
        gender: "Hembra",
        age: "6 año",
        description: "Es negro con ojos amarillos, tiene un collar rosa.",
    },
];

var _adviceFilters = [
    {   
        id: "af-1",
        label: "Genero",
        varKey: "gender",
        options: ["Macho", "Hembra"],
    },
    {
        id: "af-2",
        label: "Tipo de aviso",
        varKey: "adviceType",
        options: ["Adopcion", "Perdido"],
    },
    {
        id: "af-3",
        label: "Tipo de animal",
        varKey: "animalType",
        options: ["Gato", "Perro"],
    },
]