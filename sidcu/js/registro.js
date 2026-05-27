const botonRegistro = document.getElementById('botonRegistro');
const inputUsuario = document.getElementById('usuario');
const inputContraseña = document.getElementById('contraseña');

botonRegistro.addEventListener('click', function() {
    const usuario = inputUsuario.value.trim();
    const contraseña = inputContraseña.value.trim();

    if (usuario === '' || contraseña === '') {
        alert('Por favor completa todos los campos');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[usuario]) {
        alert('Este usuario ya está registrado');
        return;
    }

    // Agregar el nuevo usuario
    usuarios[usuario] = { contraseña: contraseña };
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    console.log('Usuario registrado:', usuario);

    sessionStorage.setItem('usuarioActual', usuario);

    alert('¡Usuario registrado exitosamente!');
    
    window.location.href = 'index.html';
});