

const actualizacionesData = [
  { img: "./img/biblioteca.jpg", alt: "Nueva Simulación", texto: "Agregamos nuevas simulaciones" },
  { img: "./img/pelaos.jpg",    alt: "Comparador",     texto: "Implementación de Comparador" },
  { img: "./img/ia.jpg",       alt: "IA en tests",    texto: "Implementación de IA en los tests" },
  { img: "./img/inscripcion.jpg",     alt: "Inscripción",  texto: "Inscripciones Abiertas" },
  { img: "./img/test.jpg",      alt: "Más novedades",  texto: "Lanzamos nueva sección" }

];

let currentIndex = 0; 

function renderActualizaciones(startIndex) {
  const contenedor = document.getElementById('actualizacionescontenedor');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  const total = actualizacionesData.length;
  if (total === 0) {
    contenedor.innerHTML = '<p>No hay actualizaciones.</p>';
    return;
  }


  for (let i = 0; i < 3; i++) {
    const data = actualizacionesData[(startIndex + i) % total];
    const div = document.createElement('div');
    div.className = 'actualizacion';
    div.innerHTML = `
      <img src="${data.img}" alt="${data.alt}">
      <p>${data.texto}</p>
    `;
    contenedor.appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const left = document.querySelector('.arrow-left');
  const right = document.querySelector('.arrow-right');

  if (!document.getElementById('actualizacionescontenedor')) {
    console.warn('actualizaciones-contenedor no encontrado en DOM.');
    return;
  }


  if (left) {
    left.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + actualizacionesData.length) % actualizacionesData.length;
      renderActualizaciones(currentIndex);
    });
  }

  if (right) {
    right.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % actualizacionesData.length;
      renderActualizaciones(currentIndex);
    });
  }


  renderActualizaciones(currentIndex);
});