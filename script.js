let planetas = [
	"Mercurio",
	"Venus",
	"Tierra",
	"Marte",
	"Júpiter",
	"Saturno",
	"Urano",
	"Neptuno",
];

let signosZodiaco = [
	"Aries",
	"Tauro",
	"Géminis",
	"Cáncer",
	"Leo",
	"Virgo",
	"Libra",
	"Escorpio",
	"Sagitario",
	"Capricornio",
	"Acuario",
	"Piscis",
];

let suerte = [
	"amor",
	"trabajo",
	"relaciones",
	"dinero",
	"objetivos",
	"aventura",
	"familia",
];

// Función que devuelve una de las palabras de forma aleatoria
function palabraAleatoria(array) {
	let numeroAleatorio = Math.floor(Math.random() * array.length);
	return array[numeroAleatorio];
}

console.log(
	`El signo de ${palabraAleatoria(
		signosZodiaco
	)} se encuentra alineado con el planeta ${palabraAleatoria(
		planetas
	)}, lo que significa que tu suerte afectará a tu ${palabraAleatoria(suerte)}.`
);
