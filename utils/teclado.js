import { 
  guardarEstadisticasPartida ,
  getJugadorDelDiaLocal,
  actualizarEstadisticas,
  guardarProgresoPartida,
  cargarPartidaGuardada,
  desactivarInput,
  mostrarBotonReinicio,
  mostrarMensaje,
  formatearTemporada,
  submitGuess,
  reiniciarJuego
} from "./funciones.js";

let elegido = null;
let intentos = 0;
const maxIntentos = 6;
let juegoTerminado = false;

window.onload = () => {
  elegido = getJugadorDelDiaLocal();
  console.log("Jugador del día (local):", elegido);
  if (!cargarPartidaGuardada(clavePartidaHoy, elegido, juegoTerminado, intentos)) {
    document.getElementById("guessName").focus();
  }
};

// --- Sugerencias con teclado ---

const input = document.getElementById("guessName");
const suggestionsBox = document.getElementById("suggestions");
let currentFocus = -1;

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";
  currentFocus = -1;

  if (value.length < 3) return;

  const coincidencias = jugadores
    .filter(j => j.nombre.toLowerCase().includes(value))
    .slice(0, 10);

  coincidencias.forEach(j => {
    const div = document.createElement("div");
    div.textContent = j.nombre;
    div.classList.add("suggestion-item");

    div.onclick = () => {
      input.value = j.nombre;
      suggestionsBox.innerHTML = "";

      const acierto = submitGuess(
        clavePartidaHoy,
        claveEstadisticas,
        idJuego,
        juegoTerminado,
        elegido,
        intentos
      );

      if (!acierto) {
        intentos++;
      } else {
        juegoTerminado = true;
      }
    };

    suggestionsBox.appendChild(div);
  });
});

input.addEventListener("keydown", (e) => {
  const items = suggestionsBox.getElementsByClassName("suggestion-item");
  if (items.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    currentFocus = (currentFocus + 1) % items.length;
    addActive(items);

  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    currentFocus = (currentFocus - 1 + items.length) % items.length;
    addActive(items);

  } else if (e.key === "Enter") {
    e.preventDefault();

    if (currentFocus > -1) {
      items[currentFocus].click();
      currentFocus = -1;
    } else {
      const acierto = submitGuess(
        clavePartidaHoy,
        claveEstadisticas,
        idJuego,
        juegoTerminado,
        elegido,
        intentos
      );

      if (!acierto) {
        intentos++;
      } else {
        juegoTerminado = true;
      }
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


document.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restart-btn");
  if (restartBtn) {
    // Inicialización inicial
    intentos = 0;
    juegoTerminado = false;
    pistaMostrada = false;

    columnasPista.forEach(col => {
      const th = document.getElementById(col.id);
      if (th) th.classList.remove("pista-clicable-activa", "pista-seleccionada");
    });

    elegido = jugadores[Math.floor(Math.random() * jugadores.length)];

    // Evento click para reiniciar
    restartBtn.addEventListener("click", () => {
      elegido = reiniciarJuego(); // Actualiza elegido al reiniciar
      intentos = 0;
      juegoTerminado = false;
      pistaMostrada = false;
    });
  }
});
