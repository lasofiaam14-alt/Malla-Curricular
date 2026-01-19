// Definición de datos de la carrera
const curriculumData = [
    // Semestre 1
    { id: "fund-admin", name: "Fundamentos de Administración", semester: 1, reqs: [] },
    { id: "econ-sust", name: "Economía, Sustentabilidad y Emprendimiento", semester: 1, reqs: [] },
    { id: "intro-datos", name: "Introducción al Análisis de Datos", semester: 1, reqs: [] },
    { id: "intro-mate", name: "Introducción a la Matemática", semester: 1, reqs: [] },
    { id: "contabilidad", name: "Contabilidad", semester: 1, reqs: [] },
    { id: "taller-comunic", name: "Taller de Competencias Comunicativas", semester: 1, reqs: [] },
    { id: "taller-aprendiz", name: "Taller de Competencias para el Aprendizaje", semester: 1, reqs: [] },

    // Semestre 2
    { id: "admin-estrat", name: "Administración Estratégica", semester: 2, reqs: ["fund-admin"] },
    { id: "matematica", name: "Matemática", semester: 2, reqs: ["intro-mate"] },
    { id: "fund-micro", name: "Fundamentos de Microeconomía", semester: 2, reqs: [] },
    { id: "contab-finan", name: "Contabilidad Financiera", semester: 2, reqs: ["contabilidad"] },
    { id: "cultura-val", name: "Cultura y Valores", semester: 2, reqs: [] },
    { id: "taller-dp1", name: "Taller de Desarrollo Personal I", semester: 2, reqs: [] },

    // Semestre 3
    { id: "estrat-comp", name: "Estrategia Competitiva (A+S)", semester: 3, reqs: ["admin-estrat"] },
    { id: "fund-market", name: "Fundamentos de Marketing", semester: 3, reqs: ["admin-estrat"] },
    { id: "calculo-1", name: "Cálculo I", semester: 3, reqs: ["matematica"] },
    { id: "fund-macro", name: "Fundamentos de Macroeconomía", semester: 3, reqs: [] },
    { id: "ingles-b1", name: "Inglés Básico I", semester: 3, reqs: [] },
    { id: "persona-sentido", name: "Persona y Sentido", semester: 3, reqs: ["cultura-val"] },
    { id: "taller-dp2", name: "Taller de Desarrollo Personal II", semester: 3, reqs: ["taller-dp1"] },

    // Semestre 4
    { id: "derecho-com", name: "Derecho Comercial y Laboral", semester: 4, reqs: [] },
    { id: "innov-modelos", name: "Innovación en Modelos de Negocio", semester: 4, reqs: ["econ-sust"] },
    { id: "estadistica-1", name: "Estadística I", semester: 4, reqs: ["matematica"] },
    { id: "microeconomia", name: "Microeconomía", semester: 4, reqs: ["calculo-1", "fund-micro"] },
    { id: "costos-toma", name: "Costos para la Toma de Decisiones", semester: 4, reqs: ["contab-finan"] },
    { id: "ingles-b2", name: "Inglés Básico II", semester: 4, reqs: ["ingles-b1"] },

    // Semestre 5
    { id: "gestion-pers", name: "Gestión de Personas", semester: 5, reqs: ["derecho-com", "admin-estrat"] },
    { id: "gestion-innov", name: "Gestión de la Innovación", semester: 5, reqs: ["innov-modelos"] },
    { id: "metodos-cuant", name: "Métodos Cuantitativos para la Gestión", semester: 5, reqs: ["calculo-1"] },
    { id: "macroeconomia", name: "Macroeconomía", semester: 5, reqs: ["fund-macro"] },
    { id: "admin-finan", name: "Administración Financiera (A+S)", semester: 5, reqs: ["costos-toma"] },
    { id: "ingles-i1", name: "Inglés Intermedio I", semester: 5, reqs: ["ingles-b2"] },

    // Semestre 6
    { id: "comp-org", name: "Comportamiento y Desarrollo Organizacional", semester: 6, reqs: ["gestion-pers"] },
    { id: "invest-mercado", name: "Investigación de Mercado (A+S)", semester: 6, reqs: ["fund-market", "estadistica-1"] },
    { id: "metodos-avanz", name: "Métodos Avanzados en Estadística", semester: 6, reqs: ["metodos-cuant", "estadistica-1"] },
    { id: "comercio-int", name: "Comercio Internacional", semester: 6, reqs: ["macroeconomia"] },
    { id: "mercado-cap", name: "Mercado de Capitales", semester: 6, reqs: ["estadistica-1"] },
    { id: "ingles-i2", name: "Inglés Intermedio II", semester: 6, reqs: ["ingles-i1"] },

    // Semestre 7
    { id: "market-estrat", name: "Marketing Estratégico (A+S)", semester: 7, reqs: ["invest-mercado"] },
    { id: "econometria", name: "Econometría", semester: 7, reqs: ["metodos-avanz", "metodos-cuant"] },
    { id: "gestion-oper", name: "Gestión de Operaciones", semester: 7, reqs: ["metodos-cuant"] },
    { id: "electivo-1", name: "Electivo I", semester: 7, reqs: [] },
    { id: "finanzas-corp", name: "Finanzas Corporativas", semester: 7, reqs: ["mercado-cap"] },
    { id: "ingles-a1", name: "Inglés Avanzado I", semester: 7, reqs: ["ingles-i2"] },

    // Semestre 8
    { id: "gobernanza", name: "Gobernanza y Control Estratégico", semester: 8, reqs: ["estrat-comp"] },
    { id: "consultoria", name: "Consultoría Aplicada a Organizaciones (A+S)", semester: 8, reqs: ["gestion-innov"] },
    { id: "analisis-datos", name: "Análisis de Datos", semester: 8, reqs: ["intro-datos", "estadistica-1"] },
    { id: "electivo-2", name: "Electivo II", semester: 8, reqs: [] },
    { id: "formulacion-proy", name: "Formulación y Evaluación de Proyectos", semester: 8, reqs: ["finanzas-corp"] },
    { id: "ingles-a2", name: "Inglés Avanzado II", semester: 8, reqs: ["ingles-a1"] },

    // Semestre 9
    { id: "etica", name: "Ética y Responsabilidad Social", semester: 9, reqs: ["gobernanza"] },
    { id: "politicas-pub", name: "Políticas Públicas, Innovación y Emprendimiento", semester: 9, reqs: ["gestion-innov", "macroeconomia"] },
    { id: "simulacion-neg", name: "Simulación de Negocios", semester: 9, reqs: ["analisis-datos"] },
    { id: "practica", name: "Práctica Profesional", semester: 9, reqs: [] },
    { id: "electivo-3", name: "Electivo III", semester: 9, reqs: [] },

    // Semestre 10
    { id: "seminario-hab", name: "Seminario de Habilidades para la Gestión", semester: 10, reqs: ["gobernanza"] },
    { id: "plan-negocios", name: "Plan de Negocios", semester: 10, reqs: ["gobernanza", "formulacion-proy"] },
    { id: "electivo-4", name: "Electivo IV", semester: 10, reqs: [] }
];

// Estado de ramos aprobados (se carga del localStorage)
let approvedSubjects = new Set(JSON.parse(localStorage.getItem('malla_aprobados')) || []);

// Elementos del DOM
const container = document.getElementById('malla-container');
const notification = document.getElementById('notification');
const resetBtn = document.getElementById('reset-btn');

// Función principal de renderizado
function renderMalla() {
    container.innerHTML = '';
    
    // Crear columnas por semestre (1 al 10)
    for (let i = 1; i <= 10; i++) {
        const col = document.createElement('div');
        col.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.innerText = `Semestre ${i}`;
        col.appendChild(title);

        // Filtrar ramos de este semestre
        const subjects = curriculumData.filter(s => s.semester === i);

        subjects.forEach(subject => {
            const card = document.createElement('div');
            card.innerText = subject.name;
            card.dataset.id = subject.id;
            
            // Lógica de estado
            const isApproved = approvedSubjects.has(subject.id);
            const missingReqs = getMissingRequisites(subject);
            const isLocked = missingReqs.length > 0;

            // Asignar clases CSS
            if (isApproved) {
                card.className = 'subject-card approved';
            } else if (isLocked) {
                card.className = 'subject-card locked';
            } else {
                card.className = 'subject-card available';
            }

            // Evento Click
            card.addEventListener('click', () => handleCardClick(subject, isApproved, isLocked, missingReqs));

            col.appendChild(card);
        });

        container.appendChild(col);
    }
}

// Verifica qué requisitos faltan
function getMissingRequisites(subject) {
    if (!subject.reqs || subject.reqs.length === 0) return [];
    return subject.reqs.filter(reqId => !approvedSubjects.has(reqId));
}

// Obtener nombre del ramo por ID (para mostrar en mensajes)
function getSubjectName(id) {
    const subj = curriculumData.find(s => s.id === id);
    return subj ? subj.name : id;
}

// Manejo del clic en un ramo
function handleCardClick(subject, isApproved, isLocked, missingReqs) {
    if (isLocked) {
        // Mostrar alerta visual de qué falta
        const missingNames = missingReqs.map(id => getSubjectName(id)).join(', ');
        showNotification(`🔒 Bloqueado. Debes aprobar: ${missingNames}`);
        return;
    }

    if (isApproved) {
        // Desmarcar: También debemos desmarcar recursivamente los que dependen de este
        uncheckRecursively(subject.id);
    } else {
        // Marcar como aprobado
        approvedSubjects.add(subject.id);
    }

    saveAndRender();
}

// Desmarcar recursivo: Si saco "Mate 1", se debe salir "Mate 2"
function uncheckRecursively(subjectId) {
    approvedSubjects.delete(subjectId);
    
    // Buscar todos los ramos que tienen este subjectId como requisito
    const dependents = curriculumData.filter(s => s.reqs.includes(subjectId));
    
    dependents.forEach(dep => {
        if (approvedSubjects.has(dep.id)) {
            uncheckRecursively(dep.id);
        }
    });
}

// Guardar en navegador y redibujar
function saveAndRender() {
    localStorage.setItem('malla_aprobados', JSON.stringify([...approvedSubjects]));
    renderMalla();
}

// Mostrar notificación tipo Toast
function showNotification(msg) {
    notification.innerText = msg;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Botón de Reinicio
resetBtn.addEventListener('click', () => {
    if(confirm("¿Estás seguro de que quieres reiniciar toda la malla?")) {
        approvedSubjects.clear();
        saveAndRender();
    }
});

// Inicializar al cargar
renderMalla();
