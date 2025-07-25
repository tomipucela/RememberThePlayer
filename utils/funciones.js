import { banderaDePaisImg } from './paises.js';

const maxIntentos = 6;
let estadisticas = {
  jugadasTotales: 0,
  victorias: 0,
  rachaActual: 0,
  histogramaIntentos: [0, 0, 0, 0, 0, 0]
};
const idioma = navigator.language || navigator.userLanguage;
const esEspanol = idioma.startsWith('es');
const posicionesTraducidas = {
  'Portero': 'Goalkeeper',
  'Defensa': 'Defender',
  'Centrocampista': 'Midfielder',
  'Atacante': 'Forward'
};



export function guardarEstadisticasPartida(acertado, intentos, elegido,claveEstadisticas) {
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


export function getJugadorDelDiaLocal() {
  const hoy = new Date();
  const milisegundosPorDia = 1000 * 60 * 60 * 24;
  const diasDesdeEpoch = Math.floor(hoy.getTime() / milisegundosPorDia);

  const grupoDeseado = (diasDesdeEpoch % 2 === 0) ? "A" : "B";

  // Filtrar jugadores del grupo correspondiente
  const jugadoresDelGrupo = jugadores.filter(j => j.grupo === grupoDeseado);

  // Crear semilla basada en diasDesdeEpoch para que sea reproducible
  // Ejemplo simple: usar el mismo diasDesdeEpoch para indexar en el grupo
  const seed = diasDesdeEpoch;

  // Índice basado en la semilla y cantidad de jugadores del grupo
  const index = seed % jugadoresDelGrupo.length;

  return jugadoresDelGrupo[index];
}

export function actualizarEstadisticas(intentos,idJuego,elegido) {
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (elegido.nombre !== jugadorDelDia.nombre) return;

  const key = `estadisticas-jugador-del-dia-${idJuego}`;  // Aquí está la clave con idJuego
  const hoy = new Date().toISOString().slice(0, 10);

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
    stats.histograma[intentos+1] += 1;
  } else {
    stats.racha = 0;
  }

  stats.ultimaFecha = hoy;
  localStorage.setItem(key, JSON.stringify(stats));
  const modal = document.createElement("div");
  modal.className = "modal-resultado";

  modal.innerHTML = `
    <div class="modal-content-resultado">
      <h2><span class="titulo-juego">Estadísticas Remember The Player</span></h2>
      <div class="tabla-superior">
        <div><strong>Partidas Jugadas</strong><br>${stats.jugadasTotales}</div>
        <div><strong>Victorias Totales</strong><br>${stats.victorias}</div>
        <div><strong>Racha Actual</strong><br>${stats.racha}</div>
      </div>
      <div id="estadisticas-histograma"></div>
      <button id="btn-cerrar-modal">Cerrar</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById("btn-cerrar-modal").addEventListener("click", () => {
  modal.remove();
});

  const contenedor = document.getElementById("estadisticas-histograma");
    contenedor.className = "contenedor-histograma";
    contenedor.innerHTML = "";
  
    const valores = Object.values(stats.histograma);
    const maxValor = Math.max(...valores, 1); // Evitar división por 0
  
    for (let intento = 1; intento <= 6; intento++) {
      const valor = stats.histograma[intento] || 0;
  
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



// Guardar partida al finalizar jugador del día
export function guardarProgresoPartida(resultado, elegido, intentos, clavePartidaHoy) {
  // No guardar si el jugador actual no es el del día
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (elegido.nombre !== jugadorDelDia.nombre) return;

  const datos = {
    intentos,
    resultado,
    jugadas: [],
    elegido
  };

  for (let i = 1; i <= intentos+1; i++) {
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
export function cargarPartidaGuardada(  clavePartidaHoy, elegido, juegoTerminado, intentos) {
  const guardado = localStorage.getItem(clavePartidaHoy);
  if (!guardado) return false;

  const datos = JSON.parse(guardado);
  const jugadorHoy = getJugadorDelDiaLocal();
  if (datos.elegido.nombre !== jugadorHoy.nombre) {
    // Si no es el mismo jugador, es una partida de otro día: ignórala
    localStorage.removeItem(clavePartidaHoy);
    return false;
  }
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
  if(esEspanol){
    mostrarMensaje("Ya jugaste el jugador del día. ¡Pero puedes continuar jugando!.", 4000, "#6aaa64");
  }else{
    mostrarMensaje("You already played today's player. But you can keep playing!", 4000, "#6aaa64");
  }
    document.getElementById("guessName").style.display = "none";
  document.getElementById("try-button").style.display = "none";

  return true;
}


export function desactivarInput() {
  const inputElem = document.getElementById("guessName");
  const btn = document.querySelector("button[onclick='submitGuess()']");
  inputElem.disabled = true;
  btn.disabled = true;
}

export function mostrarBotonReinicio() {
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.style.display = "inline-block";
}

export function mostrarMensaje(mensaje, duracion = 3000, colorFondo = '#6aaa64') {
  const box = document.getElementById('message-box');
  box.textContent = mensaje;
  box.style.backgroundColor = colorFondo;
  box.style.display = 'block';

  setTimeout(() => {
    box.style.display = 'none';
  }, duracion);
}

export function formatearTemporada(temporadaSeg) {
  if (temporadaSeg <2000){
    return (temporadaSeg - 1) + "-" + (temporadaSeg - 1900);
  }else  if (temporadaSeg < 2010) {
    return (temporadaSeg - 1) + "-0" + (temporadaSeg - 2000);
  } else {
    return (temporadaSeg - 1) + "-" + (temporadaSeg - 2000);
  }
}

export function submitGuess( clavePartidaHoy, claveEstadisticas, idJuego,juegoTerminado,elegido, intentos) {

  if (juegoTerminado) return; // Bloquea si ya terminó

  const inputElem = document.getElementById("guessName");
  const input = inputElem.value.trim().toLowerCase();
  const jugador = jugadores.find(j => j.nombre.toLowerCase() === input);

  if (!jugador) {
    return -1;
  }

mostrarComparacion(jugador, elegido, intentos);

if (jugador.nombre === elegido.nombre) {
  if(esEspanol){
    mostrarMensaje(`¡Correcto! 🎉 Acertaste en ${intentos+1} intento${intentos > 0 ? "s" : ""}`, 4000, '#6aaa64');
  }else{
    mostrarMensaje(`Correct! 🎉 You guessed it in ${intentos+1} attempt${intentos > 0 ? "s" : ""}`, 4000, '#6aaa64');
  }
  desactivarInput();
  guardarProgresoPartida("acertado", elegido, intentos, clavePartidaHoy);
  guardarEstadisticasPartida(true,intentos, elegido,claveEstadisticas);
  let timeout;  // Declarás aquí la variable

  if (elegido.nombre === getJugadorDelDiaLocal().nombre) {
    timeout = 2000;
  } else {
    timeout = 1000;
  }

  setTimeout(() => {
    actualizarEstadisticas(intentos,idJuego,elegido); // solo en la primera partida del día
    document.getElementById("guessName").style.display = "none";
    document.getElementById("try-button").style.display = "none";
    mostrarBotonReinicio();
  }, timeout);

    return 1; // Indica que se acertó
}



else if (intentos >= maxIntentos-1) {
  if(esEspanol){
    mostrarMensaje(`¡Se acabaron los intentos! Era: ${elegido.nombre}`, 4000, '#d9534f');
  }else{
    mostrarMensaje(`You ran out of attempts! It was: ${elegido.nombre}`, 4000, '#d9534f');
  }
  desactivarInput();
  guardarProgresoPartida("fallado", elegido, intentos, clavePartidaHoy);
  guardarEstadisticasPartida(false,intentos, elegido,claveEstadisticas);
  document.getElementById("guessName").style.display = "none";
  document.getElementById("try-button").style.display = "none";
  mostrarBotonReinicio();
  return 1;
}

  inputElem.value = "";
  return 0; // Indica que no se acertó
}


function mostrarComparacion(j,elegido, intentos) {
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

    if (prop === "nacionalidad") {
      celda.innerHTML = banderaDePaisImg(j.nacionalidad);
    } else if (prop === "dorsal" || prop === "temporadaPrim" || prop === "temporadaSeg") {
      if (valor === correcto) {
        celda.innerHTML = valor;
      } else {
        const flecha = j[prop] > elegido[prop] ? "▼" : "▲";
        celda.innerHTML = `${valor} <span style="color:#8a070d;">${flecha}</span>`;
      }
    } else if (prop === "posicion" && !esEspanol) {
      celda.innerText = posicionesTraducidas[valor] || valor;
    } else {
      celda.innerText = valor;
    }

}
}

export function reiniciarJuego() {
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

  const nuevoElegido = jugadores[Math.floor(Math.random() * jugadores.length)];
    console.log("reiniciarJuego: nuevo elegido ->", nuevoElegido);

  return nuevoElegido;
}
