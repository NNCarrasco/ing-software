import { catBlobImg, dogBlobImg, turtleBlobImg, iguanaBlobImg } from "./blob-images.js"
var _businessList = [
	{
		id: "b-1",
		name: "Juliana cuida",
		type: "Petshop",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "De 8:00 a 18:00 horas",
		address: "Avenida lores nº 43",
		email: "test@test.com",
		posicion: {
			lat: "-34.5199057935168",
			lon: "-58.70089530944825",
		},
		isPartner: "Si",
	},
	{
		id: "b-2",
		name: "Veterinaria Dr GeLP",
		type: "Veterinaria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Totam omnis rem ut id quas nulla officiis ea perferendis consequatur.<br> obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis<br> nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id<br> quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo<br> consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "24 Hs",
		address: "Avenida Lores nº 53 y Pancho Escarlata",
		posicion: {
			lat: "-34.52077208970604",
			lon: "-58.70211839675904",
		},
		isPartner: "No",
	},
	{
		id: "b-3",
		name: "Bichis Tienda de Mascotas",
		type: "Petshop",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "De 13:00 a 18:00 horas",
		address: "Pancho Escarlata nº 600",
		posicion: {
			lat: "-34.520825127955575",
			lon: "-58.705465793609626",
		},
		isPartner: "No",
	},
	{
		id: "b-4",
		name: "Canina Chaparritos",
		type: "Peluqueria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Totam omnis rem ut id quas nulla officiis ea perferendis consequatur.<br> obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis<br> nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id<br> quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo<br> consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "De 8:00 a 12:00 horas",
		address: "Rodolfo y Cabrera",
		posicion: {
			lat: "-34.5242725417377",
			lon: "-58.7060022354126",
		},
		isPartner: "Si",
	},
	{
		id: "b-5",
		name: "Polivet",
		type: "Veterinaria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "De 8:00 a 18:00 horas",
		address: "Salta y La Pampa nº22",
		posicion: {
			lat: "-34.52222178970639",
			lon: "-58.708738088607795",
		},
		isPartner: "No",
	},
	{
		id: "b-6",
		name: "Canina Chaparritos",
		type: "Hogar",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Totam omnis rem ut id quas nulla officiis ea perferendis consequatur.<br> obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis<br> nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id<br> quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo<br> consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "24 hs",
		address: "Rodolfo y Cabrera",
		posicion: { 
			lat: "-34.52390346288427",
			lon: "-58.695287522859886",
		},
		isPartner: "Si",
	},
	{
		id: "b-7",
		name: "Pequeñitos",
		type: "Petshop",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "De 8:00 a 18:00 horas",
		address: "Salta y La Pampa nº22",
		posicion: {  
			lat: "-34.52583793824539",
			lon: "-58.701255390769816",
		},
		isPartner: "No",
	},
	{
		id: "b-8",
		name: "Las Aves",
		type: "Hogar",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Totam omnis rem ut id quas nulla officiis ea perferendis consequatur.<br> obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis<br> nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id<br> quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo<br> consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "24 hs",
		address: "Pinocheo nº1",
		posicion: { 
			lat: "-34.52731321905199",
			lon: "-58.699285984039314",
		},
		isPartner: "No",
	},
	{
		id: "b-9",
		name: "Rock & Dog",
		type: "Peluqueria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "De 8:00 a 18:00 horas",
		address: "Salta y La Pampa nº22",
		posicion: {  
			lat: "-34.528974937647234",
			lon: "-58.70954275131226",
		},
		isPartner: "No",
	},
	{
		id: "b-10",
		name: "Estilo Animal",
		type: "Peluqueria",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Totam omnis rem ut id quas nulla officiis ea perferendis consequatur.<br> obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis<br> nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id<br> quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo<br> consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "24 hs",
		address: "Rodolfo y Cabrera",
		posicion: { 
			lat: "-34.52261072931635",
			lon: "-58.698041439056404",
		},
		isPartner: "Si",
	},
	{
		id: "b-11",
		name: "Gatitos",
		type: "Petshop",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum inventore laudantium ut cupiditate",
		descriptionLong:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo! <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis rem ut id quas nulla officiis ea perferendis consequatur, obcaecati voluptatibus. Distinctio illo consequatur quidem quis ad modi perferendis nemo!",
		phone: "1122334455",
		timeWork: "De 8:00 a 18:00 horas",
		address: "Salta y La Pampa nº22",
		posicion: {
			lat: "-34.51875661120081",
			lon: "-58.70808362960816",
		},
		isPartner: "No",
	},
];

var _adviceList = [
	{
		id: "a-1",
		adviceType: "Adopcion",
		animalType: "Gato",
		name: "Rufus",
		gender: "Macho",
		age: "1 año",
		description:
			"Es un gato blanco con manchas negras, es manso y bueno con los niños, esta con todas sus vacunas.",
		img: catBlobImg,
		address: "Pasco 1222",
		date: "21-1-2020",
		phoneNumber: "11-3682-4121",
		email: "elbagallo@yahoo.com.ar",
		ownerName: "Elba"
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
		address: "Santiago de Chile 1470",
		date: "12-9-2019",
		phoneNumber: "11-3584-4354",
		email: "julio.mercado@gmail.com",
		ownerName: "Julio"
	},
	{
		id: "a-3",
		adviceType: "Perdido",
		animalType: "Gato",
		name: "Pelusa",
		gender: "Hembra",
		age: "6 años",
		description: "Es negro con ojos amarillos, tiene un collar rosa.",
		img: catBlobImg,
		address: "esq San Juan nº32 y Jujuy",
		date: "2-2-2020",
		phoneNumber: "11-2338-4155",
		email: "juanpi@hotmail.com",
		ownerName: "Juan Pablo"
	},
	{
		id: "a-4",
		adviceType: "Encontrado",
		animalType: "Perro",
		name: "Firulais",
		gender: "Macho",
		age: "-",
		description: "Se encontró perro marca perro deambulando por Serrano y Pringles",
		img: dogBlobImg,
		address: "Pringles 800",
		date: "2-6-2020",
		phoneNumber: "11-3525-4412",
		email: "fermaldonado@gmail.com",
		ownerName: "Fernando"
	},
	{
		id: "a-5",
		adviceType: "Encontrado",
		animalType: "Gato",
		name: "Fichis",
		gender: "Macho",
		age: "-",
		description: "Gato siames encontrado en la calle",
		img: catBlobImg,
		address: "Juan B Justo 90 9°B",
		date: "21-5-2020",
		phoneNumber: "11-4991-8574",
		email: "casimiradecerca@gmail.com",
		ownerName: "Casimira Decerca"
	},
	{
		id: "a-6",
		adviceType: "Perdido",
		animalType: "Otros",
		name: "Flash",
		gender: "Hembra",
		age: "12",
		description: "Se escapo en un descuido, le gusta la velocidad",
		img: turtleBlobImg,
		address: "Presidente Peron 2055",
		date: "4-6-2020",
		phoneNumber: "11-3589-8759",
		email: "manuelaberta@gmail.com",
		ownerName: "Manuela"
	},
	{
		id: "a-7",
		adviceType: "Adopcion",
		animalType: "Otros",
		name: "Birra",
		gender: "Hembra",
		age: "5",
		description: "Se da en adopción por mudanza, muy tranquila y compañera",
		img: iguanaBlobImg,
		address: "Muñoz 1298",
		date: "12-4-2020",
		phoneNumber: "11-5211-1236",
		email: "joseargento@gmail.com",
		ownerName: "Jose"
	}
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
		options: ["Gato", "Perro", "Otros"],
	},
];

var _businessFilters = [
	{
		id: "bf-1",
		label: "Tipo de rubro",
		varKey: "type",
		options: ["Petshop", "Veterinaria", "Peluqueria", "Hogar"],
	},
	{
		id: "bf-2",
		label: "Es patrocinador",
		varKey: "isPartner",
		options: ["Si", "No"],
	},
];

export { _adviceFilters, _businessFilters, _adviceList, _businessList };
