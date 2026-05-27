const carrieras = {
  sis: {
    nombre: "Ingeniería de Sistemas",
    categoria: "Ingeniería",
    duracion: "5 años",
    costo: "$90.000.000 COP aprox.",
    ocupabilidad: "95%",
    salario: "$4.500.000 COP/mes",
    descripcion: "Formación en desarrollo de software, bases de datos y sistemas computacionales.",
    habilidades: ["Programación", "Análisis", "Resolución de problemas"]
  },
  med: {
    nombre: "Medicina",
    categoria: "Salud",
    duracion: "6 años",
    costo: "$180.000.000 COP aprox.",
    ocupabilidad: "98%",
    salario: "$6.500.000 COP/mes",
    descripcion: "Formación completa en ciencias de la salud y atención médica.",
    habilidades: ["Empatía", "Precisión", "Comunicación"]
  },
  eco: {
    nombre: "Economía",
    categoria: "Economía y Negocios",
    duracion: "4 años",
    costo: "$60.000.000 COP aprox.",
    ocupabilidad: "88%",
    salario: "$3.800.000 COP/mes",
    descripcion: "Análisis de sistemas económicos, finanzas y políticas comerciales.",
    habilidades: ["Análisis", "Estadística", "Pensamiento crítico"]
  },
  psic: {
    nombre: "Psicología",
    categoria: "Ciencias Sociales",
    duracion: "5 años",
    costo: "$55.000.000 COP aprox.",
    ocupabilidad: "85%",
    salario: "$3.000.000 COP/mes",
    descripcion: "Estudio del comportamiento humano y procesos mentales.",
    habilidades: ["Empatía", "Escucha activa", "Análisis"]
  },
  dis: {
    nombre: "Diseño Gráfico",
    categoria: "Arte y Diseño",
    duracion: "4 años",
    costo: "$45.000.000 COP aprox.",
    ocupabilidad: "82%",
    salario: "$2.500.000 COP/mes",
    descripcion: "Creación visual, comunicación gráfica y diseño digital.",
    habilidades: ["Creatividad", "Software de diseño", "Comunicación visual"]
  },
  civ: {
    nombre: "Ingeniería Civil",
    categoria: "Ingeniería",
    duracion: "5.5 años",
    costo: "$80.000.000 COP aprox.",
    ocupabilidad: "92%",
    salario: "$4.200.000 COP/mes",
    descripcion: "Diseño, construcción y mantenimiento de infraestructuras.",
    habilidades: ["Matemáticas", "CAD", "Liderazgo"]
  },
  edu: {
    nombre: "Licenciatura en Educación",
    categoria: "Educación",
    duracion: "4 años",
    costo: "$40.000.000 COP aprox.",
    ocupabilidad: "90%",
    salario: "$2.800.000 COP/mes",
    descripcion: "Formación docente y pedagogía educativa.",
    habilidades: ["Paciencia", "Comunicación", "Creatividad"]
  }
};

function obtenerSelecciones() {
  const carreraA = document.getElementById('selectA').value;
  const carreraB = document.getElementById('selectB').value;
  const carreraC = document.getElementById('selectC').value;
  
  return [carreraA, carreraB, carreraC].filter(carrera => carrera !== '');
}

function validarSelecciones(selecciones) {
  if (selecciones.length < 2) {
    mostrarAdvertencia('Por favor selecciona al menos 2 carreras para comparar.');
    return false;
  }
  
  if (new Set(selecciones).size !== selecciones.length) {
    mostrarAdvertencia('No puedes seleccionar la misma carrera más de una vez.');
    return false;
  }
  
  return true;
}

function mostrarAdvertencia(mensaje) {
  const advertenciaAnterior = document.querySelector('.advertencia-comparador');
  if (advertenciaAnterior) {
    advertenciaAnterior.remove();
  }
  
  const div = document.createElement('div');
  div.className = 'advertencia-comparador';
  div.textContent = mensaje;
  div.setAttribute('role', 'alert');
  
  const section = document.querySelector('.comparador-controls');
  section.insertBefore(div, section.firstChild);
  
  setTimeout(() => div.remove(), 5000);
}

function crearTarjetaCarrera(codigoCarrera) {
  const carrera = carrieras[codigoCarrera];
  
  const tarjeta = document.createElement('div');
  tarjeta.className = 'tarjeta-carrera';
  
  tarjeta.innerHTML = `
    <h3>${carrera.nombre}</h3>
    <span class="categoria-badge">${carrera.categoria}</span>
    
    <div class="carrera-detalle">
      <p><strong>Descripción:</strong></p>
      <p>${carrera.descripcion}</p>
    </div>
    
    <div class="carrera-info">
      <div class="info-item">
        <span class="label">Duración:</span>
        <span class="valor">${carrera.duracion}</span>
      </div>
      <div class="info-item">
        <span class="label">Costo:</span>
        <span class="valor">${carrera.costo}</span>
      </div>
      <div class="info-item">
        <span class="label">Ocupabilidad:</span>
        <span class="valor">${carrera.ocupabilidad}</span>
      </div>
      <div class="info-item">
        <span class="label">Salario promedio:</span>
        <span class="valor">${carrera.salario}</span>
      </div>
    </div>
    
    <div class="habilidades-seccion">
      <p><strong>Habilidades clave:</strong></p>
      <div class="habilidades-list">
        ${carrera.habilidades.map(h => `<span class="habilidad-tag">${h}</span>`).join('')}
      </div>
    </div>
  `;
  
  return tarjeta;
}

function generarComparacion(selecciones) {
  const seccionComparacion = document.createElement('section');
  seccionComparacion.className = 'comparador-resultado';
  seccionComparacion.id = 'resultado-comparacion';
  
  const titulo = document.createElement('h2');
  titulo.textContent = `Comparación: ${selecciones.map(s => carrieras[s].nombre).join(' vs ')}`;
  seccionComparacion.appendChild(titulo);
  
  const contenedor = document.createElement('div');
  contenedor.className = 'tarjetas-contenedor';
  
  selecciones.forEach(codigo => {
    contenedor.appendChild(crearTarjetaCarrera(codigo));
  });
  
  seccionComparacion.appendChild(contenedor);
  
  return seccionComparacion;
}

function limpiarComparacionAnterior() {
  const resultadoAnterior = document.getElementById('resultado-comparacion');
  if (resultadoAnterior) {
    resultadoAnterior.remove();
  }
}

function realizarComparacion(evento) {
  evento.preventDefault();
  
  const selecciones = obtenerSelecciones();
  
  if (!validarSelecciones(selecciones)) {
    return;
  }
  
  limpiarComparacionAnterior();
  
  const comparacion = generarComparacion(selecciones);
  const main = document.querySelector('.comparador-main');
  main.appendChild(comparacion);
  
  comparacion.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function reiniciar(evento) {
  evento.preventDefault();
  limpiarComparacionAnterior();
  document.querySelector('.comparador-form').reset();
}

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.querySelector('.comparador-form');
  const botonComparar = document.querySelector('.comparar-button');
  const botonReset = document.querySelector('.reset-button');
  
  botonComparar.addEventListener('click', realizarComparacion);
  botonReset.addEventListener('click', reiniciar);
});
