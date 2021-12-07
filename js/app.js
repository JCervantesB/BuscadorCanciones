import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    // Obetener datos de lformulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        // El usuario dejo almenos un campo vacio, mostrar error
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
    }

    return;
}