/* ============================================================
   script.js — Dragon Slider
   • Efecto typewriter en el título "I´m ESLEDA"
   • Panel de información al hacer clic en una card del slider
   ============================================================ */

/* ──────────────────────────────────────────────
   1. DATOS DE LOS DRAGONES
   Edita nombre, origen, descripción y stats
   de cada dragón según tus imágenes reales.
   ────────────────────────────────────────────── */
const dragons = {
    1:  {
        name: "Ignarius",
        tag: "🔥 Fuego",
        origin: "Volcán Eterno, Sureste de Drakmoor",
        img: "img/dragon-01.png",
        desc: "Nacido en las entrañas del volcán más antiguo del mundo, Ignarius puede alcanzar temperaturas de 3 000 °C con un solo aliento. Su escama dorsal brilla como brasas.",
        stats: [
            { label: "Fuerza",    value: 95 },
            { label: "Velocidad", value: 70 },
            { label: "Magia",     value: 60 },
            { label: "Defensa",   value: 80 },
        ]
    },
    2:  {
        name: "Pyrothax",
        tag: "🔥 Fuego",
        origin: "Desierto de Ashveil",
        img: "img/dragon-02.png",
        desc: "El destructor del desierto. Sus alas rojas cubren kilómetros de sombra y su rugido desencadena tormentas de arena ardiente.",
        stats: [
            { label: "Fuerza",    value: 90 },
            { label: "Velocidad", value: 85 },
            { label: "Magia",     value: 50 },
            { label: "Defensa",   value: 75 },
        ]
    },
    3:  {
        name: "Lumiveth",
        tag: "✨ Luz",
        origin: "Cima de los Cielos Blancos",
        img: "img/dragon-03.png",
        desc: "Dragón celestial de escamas blancas iridiscentes. Se dice que su presencia sana enfermedades y disipa la oscuridad.",
        stats: [
            { label: "Fuerza",    value: 65 },
            { label: "Velocidad", value: 90 },
            { label: "Magia",     value: 98 },
            { label: "Defensa",   value: 70 },
        ]
    },
    4:  {
        name: "Thalassor",
        tag: "🌊 Agua",
        origin: "Abismo de Coral Negro",
        img: "img/dragon-04.png",
        desc: "Señor de las profundidades oceánicas. Puede invocar tsunamis con el movimiento de su cola y respirar bajo el agua indefinidamente.",
        stats: [
            { label: "Fuerza",    value: 80 },
            { label: "Velocidad", value: 75 },
            { label: "Magia",     value: 85 },
            { label: "Defensa",   value: 88 },
        ]
    },
    5:  {
        name: "Auranthos",
        tag: "⚡ Tormenta",
        origin: "Nubes de la Gran Tormenta Permanente",
        img: "img/dragon-05.png",
        desc: "Su cuerpo dorado conduce la electricidad. Cada batida de ala genera un campo electromagnético capaz de derribar aeronaves.",
        stats: [
            { label: "Fuerza",    value: 78 },
            { label: "Velocidad", value: 95 },
            { label: "Magia",     value: 90 },
            { label: "Defensa",   value: 65 },
        ]
    },
    6:  {
        name: "Cindareth",
        tag: "🌿 Naturaleza",
        origin: "Bosque Primigenio de Verdenmoor",
        img: "img/dragon-06.png",
        desc: "Guardián del bosque más antiguo. Sus escamas verdes cambian de tono con las estaciones y puede controlar el crecimiento de plantas.",
        stats: [
            { label: "Fuerza",    value: 72 },
            { label: "Velocidad", value: 68 },
            { label: "Magia",     value: 92 },
            { label: "Defensa",   value: 85 },
        ]
    },
    7:  {
        name: "Noctivex",
        tag: "🌑 Sombra",
        origin: "Reino de las Sombras Eternas",
        img: "img/dragon-07.png",
        desc: "Dragón de la oscuridad absoluta. Puede volverse invisible a voluntad y su mordida drena la energía vital de sus presas.",
        stats: [
            { label: "Fuerza",    value: 88 },
            { label: "Velocidad", value: 92 },
            { label: "Magia",     value: 87 },
            { label: "Defensa",   value: 70 },
        ]
    },
    8:  {
        name: "Glacivorn",
        tag: "❄️ Hielo",
        origin: "Glaciar Perpetuo del Norte",
        img: "img/dragon-08.png",
        desc: "Su aliento congela todo en un radio de 50 metros. Las escamas de Glacivorn son más duras que el diamante a temperaturas bajo cero.",
        stats: [
            { label: "Fuerza",    value: 85 },
            { label: "Velocidad", value: 60 },
            { label: "Magia",     value: 80 },
            { label: "Defensa",   value: 95 },
        ]
    },
    9:  {
        name: "Terraxis",
        tag: "🪨 Tierra",
        origin: "Montañas de Piedra Viva",
        img: "img/dragon-09.png",
        desc: "El coloso de piedra viviente. Terraxis puede fundir su cuerpo con la roca para aparecer sin ser detectado y su pisada provoca terremotos.",
        stats: [
            { label: "Fuerza",    value: 98 },
            { label: "Velocidad", value: 45 },
            { label: "Magia",     value: 55 },
            { label: "Defensa",   value: 99 },
        ]
    },
    10: {
        name: "Aerynth",
        tag: "🌪️ Viento",
        origin: "Corrientes del Jet Stream Superior",
        img: "img/dragon-10.png",
        desc: "El dragón más veloz conocido. Aerynth alcanza velocidades supersónicas y sus alas generan tornados categoría 5 con cada despegue.",
        stats: [
            { label: "Fuerza",    value: 70 },
            { label: "Velocidad", value: 99 },
            { label: "Magia",     value: 75 },
            { label: "Defensa",   value: 60 },
        ]
    }
};


/* ──────────────────────────────────────────────
   2. EFECTO TYPEWRITER
   Escribe "ESLEDA" letra a letra al cargar
   la página; al terminar el cursor parpadea.
   ────────────────────────────────────────────── */
(function initTypewriter() {
    const target   = document.getElementById("typeTarget");
    const cursor   = document.querySelector(".cursor");
    const fullText = "ESLEDA";
    let   index    = 0;

    // Pequeña pausa inicial antes de empezar a escribir
    setTimeout(function type() {
        if (index < fullText.length) {
            target.textContent += fullText[index];
            index++;
            setTimeout(type, 120);          // velocidad: 120 ms por letra
        } else {
            // Al terminar, el cursor sigue parpadeando (via CSS)
            cursor.classList.add("blink");
        }
    }, 800);
})();


/* ──────────────────────────────────────────────
   3. PANEL DE INFORMACIÓN
   Click en cualquier .item abre el panel lateral
   con los datos del dragón seleccionado.
   ────────────────────────────────────────────── */
(function initPanel() {
    const panel   = document.getElementById("dragonPanel");
    const overlay = document.getElementById("panelOverlay");
    const btnClose = document.getElementById("panelClose");

    // Referencias a los elementos del panel
    const elImg    = document.getElementById("panelImg");
    const elTag    = document.getElementById("panelTag");
    const elName   = document.getElementById("panelName");
    const elOrigin = document.getElementById("panelOrigin");
    const elDesc   = document.getElementById("panelDesc");
    const elStats  = document.getElementById("panelStats");

    /* Abre el panel con los datos del dragón */
    function openPanel(id) {
        const d = dragons[id];
        if (!d) return;

        elImg.src       = d.img;
        elImg.alt       = d.name;
        elTag.textContent    = d.tag;
        elName.textContent   = d.name;
        elOrigin.textContent = d.origin;
        elDesc.textContent   = d.desc;

        // Generar barras de estadísticas
        elStats.innerHTML = d.stats.map(s => `
            <li>
                <span class="stat-label">${s.label}</span>
                <div class="stat-bar-bg">
                    <div class="stat-bar-fill" style="width:0%" data-val="${s.value}"></div>
                </div>
                <span class="stat-val">${s.value}</span>
            </li>
        `).join("");

        panel.classList.add("open");
        overlay.classList.add("open");

        // Animar las barras con un pequeño delay para el efecto visual
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                panel.querySelectorAll(".stat-bar-fill").forEach(bar => {
                    bar.style.width = bar.dataset.val + "%";
                });
            });
        });
    }

    /* Cierra el panel */
    function closePanel() {
        panel.classList.remove("open");
        overlay.classList.remove("open");
    }

    /* Asignar click a cada item del slider */
    document.querySelectorAll(".slider .item").forEach(item => {
        item.addEventListener("click", () => {
            const id = parseInt(item.dataset.id, 10);
            openPanel(id);
        });
    });

    btnClose.addEventListener("click", closePanel);
    overlay.addEventListener("click", closePanel);

    /* Cerrar con tecla Escape */
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closePanel();
    });
})();
