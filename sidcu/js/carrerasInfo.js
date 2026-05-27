const carreras = {

    sis: {
        nombre: "Ingeniería de Sistemas",
        categoria: "Ingeniería",
        duracion: "5 años",
        costo: "$90.000.000 COP aprox.",
        salario: "$4.500.000 COP/mes",
        ocupabilidad: "95%",
        descripcion: "Formación en programación, software y tecnología.",
        imagen: "./img/ingsis.jpg",
        habilidades: ["Programación", "Lógica", "Resolución de problemas"],
        campo: "Desarrollo web, ciberseguridad, inteligencia artificial y bases de datos.",
        universidades: [
            "Universidad Nacional",
            "EAFIT",
            "Universidad de Antioquia"
        ]
    },

    med: {
        nombre: "Medicina",
        categoria: "Salud",
        duracion: "6 años",
        costo: "$180.000.000 COP aprox.",
        salario: "$6.500.000 COP/mes",
        ocupabilidad: "98%",
        descripcion: "Formación en ciencias de la salud y atención médica.",
        imagen: "./img/sañud.jpg",
        habilidades: ["Empatía", "Responsabilidad", "Comunicación"],
        campo: "Hospitales, clínicas y centros médicos.",
        universidades: [
            "Universidad de Antioquia",
            "CES",
            "Pontificia Universidad Javeriana"
        ]
    },

    eco: {
        nombre: "Economía",
        categoria: "Economía y Negocios",
        duracion: "5 años",
        costo: "$60.000.000 COP aprox.",
        salario: "$3.800.000 COP/mes",
        ocupabilidad: "88%",
        descripcion: "Análisis financiero y económico.",
        imagen: "./img/economia.jpg",
        habilidades: ["Estadística", "Análisis", "Pensamiento crítico"],
        campo: "Bancos, empresas, mercados financieros y consultorías.",
        universidades: [
            "Universidad Nacional",
            "EAFIT",
            "Universidad de los Andes"
        ]
    },

        psic: {
            nombre: "Psicología",
            categoria: "Ciencias Sociales",
            duracion: "5 años",
            costo: "$55.000.000 COP aprox.",
            salario: "$3.000.000 COP/mes",
            ocupabilidad: "85%",
            descripcion: "Estudio del comportamiento humano y procesos mentales.",
            imagen: "./img/psicologia.jpg",
            habilidades: ["Empatía", "Escucha activa", "Análisis"],
            campo: "Clínicas, colegios, empresas y consultorios psicológicos.",
            universidades: [
                "Universidad de Antioquia",
                "Universidad Nacional",
                "Pontificia Universidad Javeriana",
                "Universidad CES"
            ]
        },

    dis: {
        nombre: "Diseño Gráfico",
        categoria: "Arte y Diseño",
        duracion: "4 años",
        costo: "$45.000.000 COP aprox.",
        salario: "$2.500.000 COP/mes",
        ocupabilidad: "82%",
        descripcion: "Creación visual, comunicación gráfica y diseño digital.",
        imagen: "./img/arte.jpg",
        habilidades: ["Creatividad", "Diseño digital", "Comunicación visual"],
        campo: "Publicidad, marketing, branding, ilustración y diseño web.",
        universidades: [
            "Universidad Pontificia Bolivariana",
            "Colegiatura Colombiana",
            "Universidad Nacional",
            "Universidad de Medellín"
        ]
    },

    civ: {
        nombre: "Ingeniería Civil",
        categoria: "Ingeniería",
        duracion: "5 años",
        costo: "$80.000.000 COP aprox.",
        salario: "$4.200.000 COP/mes",
        ocupabilidad: "92%",
        descripcion: "Diseño, construcción y gestión de infraestructuras.",
        imagen: "./img/civil.jpg",
        habilidades: ["Matemáticas", "Liderazgo", "Diseño estructural"],
        campo: "Construcción, obras públicas, interventoría y urbanismo.",
        universidades: [
            "Universidad Nacional",
            "EIA",
            "Universidad de Antioquia",
            "Escuela Colombiana de Ingeniería"
        ]
    },

    edu: {
        nombre: "Licenciatura en Educación",
        categoria: "Educación",
        duracion: "5 años",
        costo: "$40.000.000 COP aprox.",
        salario: "$2.800.000 COP/mes",
        ocupabilidad: "90%",
        descripcion: "Formación pedagógica para enseñar en diferentes niveles educativos.",
        imagen: "./img/educacion.jpg",
        habilidades: ["Paciencia", "Comunicación", "Creatividad"],
        campo: "Colegios, universidades, instituciones educativas y proyectos pedagógicos.",
        universidades: [
            "Universidad de Antioquia",
            "Universidad Pedagógica Nacional",
            "Universidad del Valle",
            "Universidad Pontificia Bolivariana"
        ]
    }

};

const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("carrera");

const carrera = carreras[codigo];

document.getElementById("nombreCarrera").textContent = carrera.nombre;
document.getElementById("categoriaCarrera").textContent = carrera.categoria;
document.getElementById("descripcionCarrera").textContent = carrera.descripcion;
document.getElementById("duracionCarrera").textContent = carrera.duracion;
document.getElementById("costoCarrera").textContent = carrera.costo;
document.getElementById("salarioCarrera").textContent = carrera.salario;
document.getElementById("ocupabilidadCarrera").textContent = carrera.ocupabilidad;
document.getElementById("campoLaboral").textContent = carrera.campo;

document.getElementById("imagenCarrera").src = carrera.imagen;

const habilidades = document.getElementById("habilidadesLista");

carrera.habilidades.forEach(habilidad => {

    const span = document.createElement("span");

    span.className = "habilidad";

    span.textContent = habilidad;

    habilidades.appendChild(span);

});

const universidades = document.getElementById("universidadesLista");

carrera.universidades.forEach(universidad => {

    const li = document.createElement("li");

    li.textContent = universidad;

    universidades.appendChild(li);

});