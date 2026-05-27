function inicio() {
    const usuarioActual = sessionStorage.getItem('usuarioActual');
    const tituloPrincipal = document.getElementById('tituloPrincipal');
    const botonesRegistro = document.querySelector('.registro');

    if (usuarioActual) {
        // Si hay usuario logueado, mostrar su nombre
        tituloPrincipal.textContent = "Hola " + usuarioActual + ", Encuentra la mejor opción para estudiar";
        
        // Reemplazar botones de login/registro por botón de logout
        botonesRegistro.innerHTML = '<button class="logout" id="botonLogout">Cerrar sesión</button>';
        
        // Agregar evento al botón de logout
        document.getElementById('botonLogout').addEventListener('click', function() {
            sessionStorage.removeItem('usuarioActual');
            alert('Sesión cerrada');
            window.location.href = 'index.html';
        });
    } else {
        // Si no hay usuario logueado, mostrar título original
        tituloPrincipal.textContent = "Encuentra la mejor opción para estudiar";
        
        // Agregar eventos a los botones de login y registro
        document.querySelector('.iniciarsesion').addEventListener('click', function() {
            window.location.href = 'login.html';
        });
        
        document.querySelector('.registrarse').addEventListener('click', function() {
            window.location.href = 'registro.html';
        });
    }
}

// Llamar la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicio);