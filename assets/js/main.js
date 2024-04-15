let botonElem = document.getElementById('button-change-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].cita}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}
cambiarCita()

botonElem.addEventListener('click', cambiarCita);