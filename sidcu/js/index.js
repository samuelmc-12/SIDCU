function inicio () {
    usuarioActual = sessionStorage.getItem('usuarioActual');

    document.getElementById('tituloPrincipal')
    tituloPrincipal.textContent="Hola "+usuarioActual+" Ecuentra la mejor opción para estudiar"
}