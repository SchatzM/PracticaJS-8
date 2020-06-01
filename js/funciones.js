/**
 * Práctica 11
 * Rick and Morty
 * Brian Passos
 */

'use strict';

const	URL = {
			API: 'https://rickandmortyapi.com/api/',
			Personaje: 'character/'
		},
		procesarDatosPersonaje = (datos) => {
			const nombrePersonaje = datos.name,
				especiePersonaje = datos.species,
				origenPersonaje = datos.origin,
				elementoPárrafo = document.createElement('p'),
				textoPárrafo = document.createTextNode(`Hola mi nombre es ${nombrePersonaje}, mi especie es ${especiePersonaje}, soy originario de ${origenPersonaje.name}`);

			elementoPárrafo.appendChild(textoPárrafo);
			document.body.querySelector('section').appendChild(elementoPárrafo);
		};

function infoPersonaje (id) {
	const	idPersonaje = Number(id) || 1,
			urlLlamada = `${URL.API}${URL.Personaje}${idPersonaje}`,
			opcionesLlamada = { crossDomain: true };

	$.get(urlLlamada, opcionesLlamada, procesarDatosPersonaje);
};

function obtenerPersonaje () {
	const idPersonajeABuscar = String (prompt('Introduce la ID del personaje a buscar:'));
	switch (idPersonajeABuscar) {
		case '':
			confirm ('Por favor introduce la ID del personaje a buscar.') ? obtenerPersonaje () : alert ('Cancelado.');
			break;
		default:
			infoPersonaje (idPersonajeABuscar);
	}
};

obtenerPersonaje ();
