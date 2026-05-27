const botonLogin = document.getElementById('botonLogin');
const inputUsuarioLogin = document.getElementById('usuarioLogin');
const inputContraseñaLogin = document.getElementById('contraseñaLogin');

botonLogin.addEventListener('click', function() {
    const usuario = inputUsuarioLogin.value.trim();
    const contraseña = inputContraseñaLogin.value.trim();

    if (usuario === '' || contraseña === '') {
        alert('Por favor completa todos los campos');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (!usuarios[usuario]) {
        alert('Usuario no encontrado');
        return;
    }

    if (usuarios[usuario].contraseña !== contraseña) {
        alert('Contraseña incorrecta');
        return;
    }

    sessionStorage.setItem('usuarioActual', usuario);

    alert('¡Bienvenido ' + usuario + '!');
    
    window.location.href = 'index.html';
}); 