import { catBlobImg, dogBlobImg } from "./blob-images.js"
var _businessList = [
	{
		id: "b-1",
		nombre: "Juliana cuida",
		rubro: "Petshop",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo! \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo!",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Avenida lores nº 43",
		email: "test@test.com",
		posicion: {
			lat: "-34.5199057935168",
			lon: "-58.70089530944825",
		},
		isPartner: "Si",
	},
	{
		id: "b-2",
		nombre: "Rodri",
		rubro: "Veterinaria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Avenida lores nº 44",
		posicion: {
			lat: "-34.52077208970604",
			lon: "-58.70211839675904",
		},
		isPartner: "No",
	},
	{
		id: "b-3",
		nombre: "cuida",
		rubro: "Petshop",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Avenida lores nº 45",
		posicion: {
			lat: "-34.520825127955575",
			lon: "-58.705465793609626",
		},
		isPartner: "No",
	},
	{
		id: "b-4",
		nombre: "te corto pelo",
		rubro: "Peluqueria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Avenida lores nº 2",
		posicion: {
			lat: "-34.5242725417377",
			lon: "-58.7060022354126",
		},
		isPartner: "No",
	},
	{
		id: "b-5",
		nombre: "Juliana cuida",
		rubro: "Veterinaria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Avenida lores nº 46",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
		},
		isPartner: "No",
	},
	{
		id: "b-0",
		nombre: "Lorem ipsum dolor",
		rubro: "Lorem ipsum dolor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		telefono: "1122334455",
		horario: "De 8:00 a 18:00 horas",
		direccion: "Lorem ipsum dolor",
		posicion: {
			lat: "-34.51854445273208",
			lon: "-58.70166778564454",
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
		description:
			"Es un gato blanco con manchas negras, es manso y bueno con los niños, esta con todas sus vacunas.",
	},
	{
		id: "a-2",
		adviceType: "Adopcion",
		animalType: "Perro",
		name: "Che",
		gender: "Macho",
		age: "4 años",
		description:
			"Le gusta jugar, esta acostumbrado a salir dos veces al dia a pasear.",
		img: dogBlobImg,
	},
	{
		id: "a-3",
		adviceType: "Perdido",
		animalType: "Gato",
		name: "Pelusa",
		gender: "Hembra",
		age: "6 año",
		description: "Es negro con ojos amarillos, tiene un collar rosa.",
		img: catBlobImg,
		address: "esq San Juan nº32 y Jujuy",
		date: "2-2-2020",
		phoneNumber: "1122334455",
		email: "test@test.com",
		ownerName: "Julio",
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
		options: ["Adopcion", "Perdido", "Encontrado"],
	},
	{
		id: "af-3",
		label: "Tipo de animal",
		varKey: "animalType",
		options: ["Gato", "Perro"],
	},
];

var _businessFilters = [
	{
		id: "bf-1",
		label: "Tipo de rubro",
		varKey: "rubro",
		options: ["Petshop", "Veterinaria", "Peluqueria"],
	},
	{
		id: "bf-2",
		label: "Es patrocinador",
		varKey: "isPartner",
		options: ["Si", "No"],
	},
];

export { _adviceFilters, _businessFilters, _adviceList, _businessList };
