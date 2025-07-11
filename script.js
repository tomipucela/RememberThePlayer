let elegido = null;
let intentos = 0;
const maxIntentos = 6;
let juegoTerminado = false;

window.onload = () => {
  elegido = getJugadorDelDiaLocal();
  console.log("Jugador del día (local):", elegido);
  if (!cargarPartidaGuardada()) {
    document.getElementById("guessName").focus();
  }
};

const claveEstadisticas = "estadisticas-jugador";
let estadisticas = {
  jugadasTotales: 0,
  victorias: 0,
  rachaActual: 0,
  histogramaIntentos: [0, 0, 0, 0, 0, 0]
};

// Cargar estadísticas si existen
function cargarEstadisticas() {
  const guardado = localStorage.getItem(claveEstadisticas);
  if (guardado) {
    estadisticas = JSON.parse(guardado);
  }
}

function guardarEstadisticasPartida(acertado) {
  // Solo registrar si es partida del día
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (elegido.nombre !== jugadorDelDia.nombre) return;

  estadisticas.jugadasTotales++;

  if (acertado) {
    estadisticas.victorias++;
    estadisticas.rachaActual++;
    if (intentos >= 1 && intentos <= 6) {
      estadisticas.histogramaIntentos[intentos - 1]++;
    }
  } else {
    estadisticas.rachaActual = 0;
  }

  localStorage.setItem(claveEstadisticas, JSON.stringify(estadisticas));
}

function actualizarEstadisticas(intentos) {
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (elegido.nombre !== jugadorDelDia.nombre) return;
  const key = "estadisticasJugadorDelDia";
  const hoy = getFechaHoyUTC();

  let stats = JSON.parse(localStorage.getItem(key)) || {
    jugadasTotales: 0,
    victorias: 0,
    racha: 0,
    ultimaFecha: null,
    histograma: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  stats.jugadasTotales += 1;

  if (intentos <= maxIntentos) {
    stats.victorias += 1;
    stats.racha = (stats.ultimaFecha !== hoy) ? stats.racha + 1 : stats.racha;
    stats.histograma[intentos] += 1;
  } else {
    stats.racha = 0;
  }

  stats.ultimaFecha = hoy;
  localStorage.setItem(key, JSON.stringify(stats));
  mostrarEstadisticas(stats);
}

function mostrarEstadisticas(stats) {
  // No mostrar si todo es 0
  if (
    stats.jugadasTotales === 0 &&
    stats.victorias === 0 &&
    stats.racha === 0 &&
    Object.values(stats.histograma).every(v => v === 0)
  ) return;

  const modal = document.createElement("div");
  modal.className = "modal-resultado";

  modal.innerHTML = `
    <div class="modal-content-resultado">
      <h2>Estadísticas</h2>
      <div class="tabla-superior">
        <div><strong>Jugadas</strong><br>${stats.jugadasTotales}</div>
        <div><strong>Victorias</strong><br>${stats.victorias}</div>
        <div><strong>Racha</strong><br>${stats.racha}</div>
      </div>
      <div id="estadisticas-histograma"></div>
      <button onclick="cerrarPopupResultado()">Cerrar</button>
    </div>
  `;
  document.body.appendChild(modal);
  renderizarHistograma(stats.histograma);
}



function renderizarHistograma(histograma) {
  const contenedor = document.getElementById("estadisticas-histograma");
  contenedor.className = "contenedor-histograma";
  contenedor.innerHTML = "";

  const valores = Object.values(histograma);
  const maxValor = Math.max(...valores, 1); // Evitar división por 0

  for (let intento = 1; intento <= 6; intento++) {
    const valor = histograma[intento] || 0;

    const fila = document.createElement("div");
    fila.className = "fila-histograma";

    const label = document.createElement("div");
    label.className = "label-histograma";
    label.textContent = intento;

    const barra = document.createElement("div");
    barra.className = "barra-histograma";
    barra.style.width = `${(valor / maxValor) * 100}%`;
    barra.textContent = valor;

    if (valor === 0) {
      barra.style.backgroundColor = "#ccc";
      barra.style.color = "#999";
    }

    fila.appendChild(label);
    fila.appendChild(barra);
    contenedor.appendChild(fila);
  }
}



const clavePartidaHoy = `partida-${getFechaHoyUTC()}`;

// Guardar partida al finalizar jugador del día
function guardarProgresoPartida(resultado) {
  // No guardar si el jugador actual no es el del día
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (elegido.nombre !== jugadorDelDia.nombre) return;

  const datos = {
    intentos,
    resultado,
    jugadas: [],
    elegido
  };

  for (let i = 1; i <= intentos; i++) {
    const fila = [];
    for (let j = 1; j <= 6; j++) {
      const celda = document.getElementById(`r${i}-c${j}`);
      fila.push({
        texto: celda.textContent,
        clase: celda.className,
        html: celda.innerHTML
      });
    }
    datos.jugadas.push(fila);
  }

  localStorage.setItem(clavePartidaHoy, JSON.stringify(datos));
}


// Cargar progreso si ya jugó
function cargarPartidaGuardada() {
  const guardado = localStorage.getItem(clavePartidaHoy);
  if (!guardado) return false;

  const datos = JSON.parse(guardado);
  elegido = datos.elegido;
  juegoTerminado = true;
  intentos = datos.intentos;

  datos.jugadas.forEach((fila, i) => {
    fila.forEach((celda, j) => {
      const celdaDom = document.getElementById(`r${i + 1}-c${j + 1}`);
      celdaDom.innerHTML = celda.html;
      celdaDom.className = celda.clase;
    });
  });

  desactivarInput();
  mostrarBotonReinicio();
  mostrarMensaje("Ya jugaste el jugador del día. ¡Pero puedes continuar jugando!.", 4000, "#d9534f");
    document.getElementById("guessName").style.display = "none";
  document.getElementById("try-button").style.display = "none";

  return true;
}

// Mostrar ventana emergente final
function mostrarPopupFinal(texto, correcto = true) {
  const modal = document.createElement("div");
  modal.className = "modal-resultado";
  modal.innerHTML = `
    <div class="modal-content-resultado">
      <h2>${correcto ? "¡Felicidades!" : "Fin del juego"}</h2>
      <p>${texto}</p>
      <button onclick="cerrarPopupResultado()">Aceptar</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function cerrarPopupResultado() {
  const modal = document.querySelector(".modal-resultado");
  if (modal) modal.remove();
}


function getJugadorDelDiaLocal() {
  const hoy = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  // Semilla simple sumando partes de la fecha
  const seed = hoy.split("-").reduce((acc, val) => acc + parseInt(val, 10), 0);
  // Índice basado en la semilla y cantidad de jugadores
  const index = seed % jugadores.length;
  return jugadores[index];
}


// Devuelve la fecha UTC del día actual en formato YYYY-MM-DD
function getFechaHoyUTC() {
  return new Date().toISOString().slice(0, 10); // UTC
}


function mostrarMensaje(mensaje, duracion = 3000, colorFondo = '#6aaa64') {
  const box = document.getElementById('message-box');
  box.textContent = mensaje;
  box.style.backgroundColor = colorFondo;
  box.style.display = 'block';

  setTimeout(() => {
    box.style.display = 'none';
  }, duracion);
}

function formatearTemporada(temporadaSeg) {
  if (temporadaSeg < 2010) {
    return (temporadaSeg - 1) + "-0" + (temporadaSeg - 2000);
  } else {
    return (temporadaSeg - 1) + "-" + (temporadaSeg - 2000);
  }
}

function submitGuess() {
  if (juegoTerminado) return; // Bloquea si ya terminó

  const inputElem = document.getElementById("guessName");
  const input = inputElem.value.trim().toLowerCase();
  const jugador = jugadores.find(j => j.nombre.toLowerCase() === input);

  if (!jugador) {
    alert("Jugador no encontrado.");
    return;
  }

  mostrarComparacion(jugador);
  intentos++;

if (jugador.nombre === elegido.nombre) {
  mostrarMensaje(`¡Correcto! 🎉 Acertaste en ${intentos} intento${intentos > 1 ? "s" : ""}`, 4000, '#6aaa64');
  juegoTerminado = true;
  desactivarInput();

  let timeout;  // Declarás aquí la variable

  if (elegido.nombre === getJugadorDelDiaLocal().nombre) {
    timeout = 2000;
  } else {
    timeout = 1000;
  }

  setTimeout(() => {
    guardarProgresoPartida("acertado");
    actualizarEstadisticas(intentos); // solo en la primera partida del día
    guardarEstadisticasPartida(true);
    document.getElementById("guessName").style.display = "none";
    document.getElementById("try-button").style.display = "none";
    mostrarBotonReinicio();
  }, timeout);
}



else if (intentos >= maxIntentos) {
  mostrarMensaje(`¡Se acabaron los intentos! Era: ${elegido.nombre}`, 4000, '#d9534f');
  juegoTerminado = true;
  desactivarInput();
  guardarProgresoPartida("fallado");
  guardarEstadisticasPartida(false);
  document.getElementById("guessName").style.display = "none";
  document.getElementById("try-button").style.display = "none";
  mostrarBotonReinicio();
}


  inputElem.value = "";
}

function desactivarInput() {
  const inputElem = document.getElementById("guessName");
  const btn = document.querySelector("button[onclick='submitGuess()']");
  inputElem.disabled = true;
  btn.disabled = true;
}

function mostrarBotonReinicio() {
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.style.display = "inline-block";
}

function reiniciarJuego() {
  intentos = 0;
  juegoTerminado = false;

  // Elegir un jugador aleatorio (NO se guarda en historial)
  elegido = jugadores[Math.floor(Math.random() * jugadores.length)];
  console.log("Reiniciando juego con jugador aleatorio:", elegido);

  // Limpiar tabla
  for (let i = 1; i <= maxIntentos; i++) {
    for (let j = 1; j <= 6; j++) {
      const celda = document.getElementById(`r${i}-c${j}`);
      celda.textContent = "";
      celda.className = "";
      celda.style.transform = "scale(1)";
    }
  }

  // Habilitar input y botón
  const inputElem = document.getElementById("guessName");
  const btn = document.querySelector("button[onclick='submitGuess()']");
  inputElem.disabled = false;
  btn.disabled = false;
  inputElem.value = "";
  inputElem.focus();

  // Ocultar botón reinicio
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.style.display = "none";
  document.getElementById("guessName").style.display = "inline-block";
document.getElementById("try-button").style.display = "inline-block";


  // Limpiar sugerencias
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.innerHTML = "";

  // Ocultar mensaje
  document.getElementById("hint-bubble").style.display = "none";
  pistaMostrada = false;

  // Quitar clases de pista de todas las columnas
  columnasPista.forEach(col => {
    const th = document.getElementById(col.id);
    if (th) th.classList.remove("pista-clicable-activa", "pista-seleccionada");
  });
}
function mostrarComparacion(j) {
  const fila = intentos;

  const props = ["nombre", "nacionalidad", "posicion", "dorsal", "temporadaPrim", "temporadaSeg"];

  const valoresJugador = [
    j.nombre,
    j.nacionalidad.toLowerCase(),
    j.posicion,
    j.dorsal,
    formatearTemporada(j.temporadaPrim),
    formatearTemporada(j.temporadaSeg)
  ];

  const valoresCorrectos = [
    elegido.nombre,
    elegido.nacionalidad.toLowerCase(),
    elegido.posicion,
    elegido.dorsal,
    formatearTemporada(elegido.temporadaPrim),
    formatearTemporada(elegido.temporadaSeg)
  ];

  for (let col = 0; col < props.length; col++) {
    const celda = document.getElementById(`r${fila + 1}-c${col + 1}`);
    const prop = props[col];
    const valor = valoresJugador[col];
    const correcto = valoresCorrectos[col];

    // Añadir animación y eliminarla al terminar
    celda.classList.add("animar-celda");
    celda.addEventListener("animationend", () => {
      celda.classList.remove("animar-celda");
    }, { once: true });

    // Agregar clase correcta o incorrecta sin sobrescribir animación
    if (valor === correcto) {
      celda.classList.add("correct");
    } else {
      celda.classList.add("wrong");
    }

    // Mostrar contenido según tipo de propiedad
    if (prop === "nacionalidad") {
      celda.innerHTML = banderaDePaisImg(j.nacionalidad);
    } else if (prop === "dorsal" || prop === "temporadaPrim" || prop === "temporadaSeg") {
      if (valor === correcto) {
        celda.innerHTML = valor;
      } else {
        const flecha = j[prop] > elegido[prop] ? "▼" : "▲";
        celda.innerHTML = `${valor} <span style="color:#8a070d;">${flecha}</span>`;
      }
    } else {
      celda.innerText = valor;
    }
  }
}


// --- Sugerencias con teclado ---

const input = document.getElementById("guessName");
const suggestionsBox = document.getElementById("suggestions");
let currentFocus = -1;

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";
  currentFocus = -1;

  if (value.length < 3) {
    return;
  }

  const coincidencias = jugadores
    .filter(j => j.nombre.toLowerCase().includes(value))
    .slice(0, 10); // máximo 10 sugerencias

    coincidencias.forEach(j => {
      const div = document.createElement("div");
      div.textContent = j.nombre;
      div.classList.add("suggestion-item");

      div.onclick = () => {
        input.value = j.nombre;
        suggestionsBox.innerHTML = "";
        submitGuess();
      };

      suggestionsBox.appendChild(div); // Asegúrate de usar appendChild y no prepend
    });}
)

input.addEventListener("keydown", (e) => {
  let items = suggestionsBox.getElementsByClassName("suggestion-item");
  if (items.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (currentFocus === -1) {
      currentFocus = 0;
    } else if (currentFocus < items.length - 1) {
      currentFocus++;
    } else {
      currentFocus = 0;
    }
    addActive(items);

    
  } else if (e.key === "ArrowUp") {

    e.preventDefault();
    if (currentFocus === -1) {
      currentFocus = items.length - 1;
    } else if (currentFocus > 0) {
      currentFocus--;
    } else {
      currentFocus = items.length - 1;
    }
    addActive(items);

    
    
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (currentFocus > -1) {
      items[currentFocus].click();
      currentFocus = -1;
    } else {
      submitGuess();
    }
  }
});

function addActive(items) {
  removeActive(items);
  if (currentFocus >= items.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = items.length - 1;
  items[currentFocus].classList.add("autocomplete-active");
  items[currentFocus].scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function removeActive(items) {
  for (let item of items) {
    item.classList.remove("autocomplete-active");
  }
}


// Ocultar sugerencias si clic fuera
document.addEventListener("click", (e) => {
  if (!suggestionsBox.contains(e.target) && e.target !== input) {
    suggestionsBox.innerHTML = "";
  }
});

function banderaDePaisImg(pais) {
  const codigo = obtenerCodigoISO(pais); // Necesitas esta función también
  if (!codigo) return pais;
  return `<img src="https://flagcdn.com/w40/${codigo}.png" alt="${pais}" title="${pais}" style="height:25px;">`;
}

function obtenerCodigoISO(pais) {
  const mapa = {
    espana: "es",
    francia: "fr",
    brasil: "br",
    argentina: "ar",
    alemania: "de",
    italia: "it",
    portugal: "pt",
    paraguay: "py",
    venezuela: "ve",
    albania: "al",
    angola: "ao",
    chile: "cl",
    uruguay: "uy",
    marruecos: "ma",
    tunez: "tn",
    guinea: "gn",
    guinea_bisau: "gw",
    "guinea-bisau": "gw",
    "guinea ecuatorial": "gq",
    suecia: "se",
    serbia: "rs",
    camerun: "cm",
    colombia: "co",
    republica_dominicana: "do",
    "republica dominicana": "do",
    grecia: "gr",
    japon: "jp",
    mexico: "mx",
    croacia: "hr",
    rusia: "ru",
    ucrania: "ua",
    austria: "at",
    israel: "il",
    turquia: "tr",
    gambia: "gm",
    arabia_saudi: "sa",
    "arabia saudi": "sa",
    canada: "ca",
    bosnia_herzegovina: "ba",
    "bosnia-herzegovina": "ba",
    estonia: "ee",
    suiza: "ch",
    hungria: "hu",
    ecuador: "ec",
    nigeria: "ng",
    senegal: "sn",
    ghana: "gh"
    // Puedes añadir más si aparecen nuevos países
  };
  // Normaliza el nombre para buscarlo en el mapa
  let key = pais.trim().toLowerCase()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ü/g, "u")
    .replace(/ñ/g, "n")
    .replace(/\s+/g, "_");
  return mapa[key];
}


document.getElementById("info-button").onclick = () => {
  document.getElementById("info-modal").style.display = "block";
};

document.getElementById("close-info").onclick = () => {
  document.getElementById("info-modal").style.display = "none";
};

window.onclick = (e) => {
  const modal = document.getElementById("info-modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
let pistaMostrada = false;

const columnasPista = [
  { id: "th-nacionalidad", texto: "Nacionalidad", valor: () => elegido.nacionalidad },
  { id: "th-posicion", texto: "Posición", valor: () => elegido.posicion },
  { id: "th-dorsal", texto: "Dorsal", valor: () => elegido.dorsal },
  { id: "th-primera", texto: "Primera Temporada", valor: () => formatearTemporada(elegido.temporadaPrim) },
  { id: "th-ultima", texto: "Última Temporada", valor: () => formatearTemporada(elegido.temporadaSeg) }
];

document.getElementById("hint-button").onclick = () => {
  const bubble = document.getElementById("hint-bubble");
  // Si ya está esperando selección de pista y aún no se ha elegido, cancelar selección
  if (!pistaMostrada && bubble.style.display === "flex") {
    bubble.style.display = "none";
    columnasPista.forEach(col => {
      const th = document.getElementById(col.id);
      if (th) th.classList.remove("pista-clicable-activa");
    });
    return;
  }
  // Si ya se ha mostrado la pista, no hacer nada
  if (pistaMostrada) return;
  // Mostrar mensaje y activar columnas
  bubble.textContent = "Haz clic en una columna para desvelar la pista";
  bubble.style.display = "flex";
  columnasPista.forEach(col => {
    const th = document.getElementById(col.id);
    if (th) th.classList.add("pista-clicable-activa");
  });
};

// Asocia listeners a las columnas clicables
columnasPista.forEach(col => {
  const th = document.getElementById(col.id);
  if (th) {
    th.onclick = () => {
      const bubble = document.getElementById("hint-bubble");
      if (!pistaMostrada && bubble.style.display === "flex") {
        // Quita el color de todas
        columnasPista.forEach(c2 => {
          const th2 = document.getElementById(c2.id);
          if (th2) th2.classList.remove("pista-clicable-activa", "pista-seleccionada");
        });
        // Deja solo la seleccionada en amarillo
        th.classList.add("pista-seleccionada");
        bubble.innerHTML = `<span style="font-weight:bold;">${col.texto}:</span> ${col.valor()}`;
        pistaMostrada = true;
      }
    };
  }
});

// Mantener el foco en el input de texto siempre que sea posible
const guessInput = document.getElementById("guessName");

// Al cargar la página
window.addEventListener("load", () => {
  guessInput.focus();
});

// Si se pierde el foco y el juego no ha terminado, volver a enfocar
guessInput.addEventListener("blur", () => {
  if (!juegoTerminado) {
    setTimeout(() => guessInput.focus(), 10);
  }
});
