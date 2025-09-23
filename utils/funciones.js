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


export function guardarEstadisticasPartida(acertado, intentos, elegido, claveEstadisticas) {
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (!elegido || !jugadorDelDia) return;
  const nombreElegido = elegido.nombre.trim().toLowerCase();
  const nombreDelDia = jugadorDelDia.nombre.trim().toLowerCase();
  if (nombreElegido !== nombreDelDia) return;

  const estadisticas = JSON.parse(localStorage.getItem(claveEstadisticas)) || {
    jugadasTotales: 0,
    victorias: 0,
    rachaActual: 0,
    histogramaIntentos: [0, 0, 0, 0, 0, 0]
  };

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

  const jugadoresDelGrupo = jugadores.filter(j => j.grupo === grupoDeseado);

  const seed = diasDesdeEpoch;

  const index = seed % jugadoresDelGrupo.length;

  return jugadoresDelGrupo[index];
}

// Función que genera y muestra el modal con las estadísticas pasadas
export function mostrarModalEstadisticas(stats) {
  const textos = {
    titulo: esEspanol ? "Estadísticas Remember The Player" : "Remember The Player Stats",
    partidasJugadas: esEspanol ? "Partidas Jugadas" : "Games Played",
    victoriasTotales: esEspanol ? "Victorias Totales" : "Total Wins",
    rachaActual: esEspanol ? "Racha Actual" : "Current Streak",
    cerrar: esEspanol ? "Cerrar" : "Close"
  };

  const modal = document.createElement("div");
  modal.className = "modal-resultado";

  modal.innerHTML = `
    <div class="modal-content-resultado">
      <h2><span class="titulo-juego">${textos.titulo}</span></h2>
      <div class="tabla-superior">
        <div><strong>${textos.partidasJugadas}</strong><br>${stats.jugadasTotales}</div>
        <div><strong>${textos.victoriasTotales}</strong><br>${stats.victorias}</div>
        <div><strong>${textos.rachaActual}</strong><br>${stats.racha}</div>
      </div>
      <div id="estadisticas-histograma"></div>
      <button id="btn-cerrar-modal">${textos.cerrar}</button>
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
  const maxValor = Math.max(...valores, 1); 

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

// Función que actualiza estadísticas, guarda y muestra modal
function actualizarEstadisticas(intentos, idJuego, elegido, acertado) {
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (elegido.nombre !== jugadorDelDia.nombre) return;

  const key = `estadisticas-jugador-del-dia-${idJuego}`;
  const hoy = new Date().toISOString().slice(0, 10);

  let stats = JSON.parse(localStorage.getItem(key)) || {
    jugadasTotales: 0,
    victorias: 0,
    racha: 0,
    ultimaFecha: null,
    histograma: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  stats.jugadasTotales += 1;

  if (acertado) {
    stats.victorias += 1;
    stats.racha = (stats.ultimaFecha !== hoy) ? stats.racha + 1 : stats.racha;
    if (intentos >= 0 && intentos < 6) {
      stats.histograma[intentos + 1] += 1;
    }
  } else {
    stats.racha = 0;
  }

  stats.ultimaFecha = hoy;
  localStorage.setItem(key, JSON.stringify(stats));
  return stats;

  
}

// Función para mostrar estadísticas sin actualizar (para el botón)
export function mostrarEstadisticas(idJuego) {
  const key = `estadisticas-jugador-del-dia-${idJuego}`;
  const stats = JSON.parse(localStorage.getItem(key)) || {
    jugadasTotales: 0,
    victorias: 0,
    racha: 0,
    ultimaFecha: null,
    histograma: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  mostrarModalEstadisticas(stats);
}



// Guardar partida al finalizar jugador del día
export function guardarProgresoPartida(resultado, elegido, intentos, clavePartidaHoy,pistaMostrada) {
  // No guardar si el jugador actual no es el del día
  const jugadorDelDia = getJugadorDelDiaLocal();
  if (elegido.nombre !== jugadorDelDia.nombre) return;

  const datos = {
    intentos,
    resultado,
    jugadas: [],
    elegido,
    pistaMostrada
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
export function cargarPartidaGuardada(clavePartidaHoy, elegido, juegoTerminado) {
  const guardado = localStorage.getItem(clavePartidaHoy);
  if (!guardado) return 0;

  const datos = JSON.parse(guardado);
  const jugadorHoy = getJugadorDelDiaLocal();
  if (datos.elegido.nombre !== jugadorHoy.nombre) {
    localStorage.removeItem(clavePartidaHoy);
    return 0;
  }
  elegido = datos.elegido;
  let intentos = datos.intentos;

  datos.jugadas.forEach((fila, i) => {
    fila.forEach((celda, j) => {
      const celdaDom = document.getElementById(`r${i + 1}-c${j + 1}`);
      celdaDom.innerHTML = celda.html;
      celdaDom.className = celda.clase;
    });
  });

  if (datos.resultado !== "en_progreso") {
    juegoTerminado = true;
    desactivarInput();
    mostrarBotonReinicio();
    if(esEspanol){
      mostrarMensaje(`El jugador del día era ${elegido.nombre}. ¡Pero puedes continuar jugando!`, 4000, "#6aaa64");
    }else{
      mostrarMensaje(`Today's player was ${elegido.nombre}. But you can keep playing!", 4000, "#6aaa64`);
    }
    document.getElementById("guessName").style.display = "none";
    document.getElementById("hint-button").disabled = true; 
  }
  return intentos+1;
}

export function cargarPistaGuardada(clavePartidaHoy) {
  const guardado = localStorage.getItem(clavePartidaHoy);
  if (!guardado) return "";
  const datos = JSON.parse(guardado);
  return datos.pistaMostrada;
}

export function desactivarInput() {
  const inputElem = document.getElementById("guessName");
  inputElem.disabled = true;
  const flagButton = document.getElementById("flag-button");
  flagButton.style.display = "none";
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

export function submitGuess( clavePartidaHoy, claveEstadisticas, idJuego,juegoTerminado,elegido, intentos,pistaMostrada) {

  if (juegoTerminado) return;

  const inputElem = document.getElementById("guessName");
  const input = inputElem.value.trim().toLowerCase();
  const jugador = jugadores.find(j => j.nombre.toLowerCase() === input);

  if (!jugador) {
    return -1;
  }

mostrarComparacion(jugador, elegido, intentos);
guardarProgresoPartida("en_progreso", elegido, intentos, clavePartidaHoy,pistaMostrada);

if (jugador.nombre === elegido.nombre) {
  if(esEspanol){
    mostrarMensaje(`¡Correcto! 🎉 Acertaste en ${intentos+1} intento${intentos > 0 ? "s" : ""}`, 4000, '#6aaa64');
  }else{
    mostrarMensaje(`Correct! 🎉 You guessed it in ${intentos+1} attempt${intentos > 0 ? "s" : ""}`, 4000, '#6aaa64');
  }
  desactivarInput();
  guardarProgresoPartida("acertado", elegido, intentos, clavePartidaHoy,pistaMostrada);
  guardarEstadisticasPartida(true,intentos, elegido,claveEstadisticas);
  let stats=actualizarEstadisticas(intentos,idJuego,elegido,true);
  let timeout;

  if (elegido.nombre === getJugadorDelDiaLocal().nombre) {
    timeout = 2000;
  } else {
    timeout = 1000;
  }
  

  setTimeout(() => {
    if (elegido.nombre === getJugadorDelDiaLocal().nombre) {
      mostrarModalEstadisticas(stats);
    }
    document.getElementById("guessName").style.display = "none";
    mostrarBotonReinicio();
  }, timeout);

    return 1; // Indica que se acertó
}

//añado un cometarioo xq no parece q se suba
else if (intentos >= maxIntentos-1) {
  let mensaje;
  if(elegido.nombre === getJugadorDelDiaLocal().nombre){
    mensaje= esEspanol ? `¡Se acabaron los intentos! El jugador del dia era: ${elegido.nombre}.` :`You ran out of attempts! Today's player was: ${elegido.nombre}`;
  }else{
    mensaje= esEspanol ? `¡Se acabaron los intentos! El jugador era: ${elegido.nombre}.` :`You ran out of attempts! The player was: ${elegido.nombre}`;
  }
  procesarFallo(mensaje, elegido, intentos, clavePartidaHoy, claveEstadisticas, pistaMostrada);
  return 1;
}
  inputElem.value = "";
  return 0; // Indica que no se acertó
}

export function procesarFallo(mensaje, elegido, intentos, clavePartidaHoy, claveEstadisticas, pistaMostrada) {
  mostrarMensaje(mensaje, 4000, '#d9534f');
  desactivarInput();
  guardarProgresoPartida("fallado", elegido, intentos, clavePartidaHoy,pistaMostrada);
  guardarEstadisticasPartida(false,intentos, elegido,claveEstadisticas);
  let stats=actualizarEstadisticas(intentos,idJuego,elegido,false);
  let timeout;

  if (elegido.nombre === getJugadorDelDiaLocal().nombre) {
    timeout = 2000;
  } else {
    timeout = 1000;
  }
  setTimeout(() => {
    if (elegido.nombre === getJugadorDelDiaLocal().nombre) {
      mostrarModalEstadisticas(stats);
    }
    document.getElementById("guessName").style.display = "none";
    mostrarBotonReinicio();
  }, timeout);
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

    celda.classList.add("animar-celda");
    celda.addEventListener("animationend", () => {
      celda.classList.remove("animar-celda");
    }, { once: true });

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
        const flechaHaciaAbajo = j[prop] > elegido[prop];
        const flecha = flechaHaciaAbajo ? "▼" : "▲";
        const colorFlecha = flechaHaciaAbajo ? "#8a070d" : "#006400";
        celda.innerHTML = `${valor} <span style="color:${colorFlecha};">${flecha}</span>`;
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
  inputElem.disabled = false;
  inputElem.value = "";
  inputElem.focus();
  const flagButton = document.getElementById("flag-button");
  flagButton.style.display = "inline-block"; 

  // Ocultar botón reinicio
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.style.display = "none";
  document.getElementById("guessName").style.display = "inline-block";


  // Limpiar sugerencias
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.innerHTML = "";

  document.getElementById("hint-bubble").style.display = "none";

  let nuevoElegido = jugadores[Math.floor(Math.random() * jugadores.length)];
  while (nuevoElegido.nombre === getJugadorDelDiaLocal().nombre) {
    nuevoElegido = jugadores[Math.floor(Math.random() * jugadores.length)];
  }

  return nuevoElegido;
}
