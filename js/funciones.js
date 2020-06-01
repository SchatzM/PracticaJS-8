/**
 * Práctica 11
 * Rick and Morty
 * Brian Passos
 */

'use strict';

const	URL = { // Objeto con las diferentes partes de la URL de la API
			API: 'https://rickandmortyapi.com/api/',
			Personaje: 'character/',
			Ubicación: 'location/',
			Episodio: 'episode/'
		},
		procesarDatosPersonaje = (datos) => { // Función que procesará la información obtenida de la llamada a la API
			const nombrePersonaje = datos.name, // Obtenemos y almacenamos el nombre del personaje de los datos
				especiePersonaje = datos.species, // Lo mismo con la especie
				origenPersonaje = datos.origin, // Objeto origin
				elementoPárrafo = document.createElement('p'), // Creamos un elemento párrafo que contendrá el texto con los datos del personaje
				textoPárrafo = document.createTextNode(`Hola mi nombre es ${nombrePersonaje}, mi especie es ${especiePersonaje}, soy originario de ${origenPersonaje.name}`); // Creamos un nodo de texto con los datos del personaje los cuales irán en el elemento párrafo antes creado

			elementoPárrafo.appendChild(textoPárrafo); // Ponemos el texto dentro del párrafo
			document.body.querySelector('section').appendChild(elementoPárrafo); // Movemos el párrafo y su texto al elemento section dentro de body
		};

function infoPersonaje (ID) { // Función que dependiendo de la ID dada, o 1 en su defecto, hará la llamada a la API para obtener los datos relacionados
	const	idPersonaje = Number(ID) || 1, // ID a buscar con la API
			urlLlamada = `${URL.API}${URL.Personaje}${idPersonaje}`, // URL de la API junto a ID a la que llamaremos para obtener datos de personajes
			opcionesLlamada = { crossDomain: true /** Evitamos problemas de seguridad al hacer llamadas a una API dentro de un dominio diferente al nuestro */ }; // Opciones para el método de jQuery que hará la llamada asíncrona a la API

	return $.get(urlLlamada, opcionesLlamada, procesarDatosPersonaje); // Método de jQuery que hará la llamada asíncrona a la API y pasará los datos obtenidos a la función 'procesarDatosPersonaje'
};

function obtenerPersonaje () { // Función que pedirá al usuario que introduzca una ID de personaje a buscar con la API
	const idPersonajeABuscar = String (prompt('Introduce la ID del personaje a buscar:')).trim (); // Hacemos la petición y eliminamos espacios innecesarios de la respuesta

	switch (idPersonajeABuscar) { // Procesamos los datos proporcionados por el usuario
		case '': // Si no hay datos válidos
			confirm ('Por favor introduce la ID del personaje a buscar. (un número)') ? obtenerPersonaje () : alert ('Cancelado.'); // Advertimos al usuario de datos no válidos y reintentamos o si el usuario cancela, terminamos con una alerta
			break;
		default: // Si no hay problema con los datos, continuamos
			infoPersonaje (idPersonajeABuscar); // Pasamos los datos proporcionados por el usuario a la función que los procesará
	};
};

obtenerPersonaje (); // Pedimos al usuario una ID de personaje a buscar
