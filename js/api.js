import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        spinner(); // Muestra un spiner de carga
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if (resultado.lyrics) {

                    const { lyrics } = resultado;

                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = 'La canción no existe, intenta con otra búsqueda';

                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            })
    }
}

function spinner() {

    limpiarHTML();

    const divSpiner = document.createElement('DIV');
    divSpiner.classList.add('sk-fading-circle');

    divSpiner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    UI.headingResultado.appendChild(divSpiner);

    setTimeout(() => {
        UI.headingResultado.remove();
    }, 2500);
}

function limpiarHTML() {
    while (UI.headingResultado.firstChild) {
        UI.headingResultado.removeChild(UI.headingResultado.firstChild);
    }
}

export default API;