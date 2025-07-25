import { 
  guardarEstadisticasPartida,
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
document.addEventListener("DOMContentLoaded", () => {
  let elegido = getJugadorDelDiaLocal();
  console.log("Jugador del día (local):", elegido);

  let intentos = 0;
  const maxIntentos = 6;
  let juegoTerminado = false;
  let pistaMostrada = false;

  if (!cargarPartidaGuardada(clavePartidaHoy, elegido, juegoTerminado, intentos)) {
    document.getElementById("guessName").focus();
  }

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

    coincidencias.forEach((j, index) => {
      const div = document.createElement("div");
      div.textContent = j.nombre;
      div.classList.add("suggestion-item");
      div.dataset.index = index;

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

        if (acierto === -1) {
          alert("Jugador no encontrado.");
        } else if (acierto === 0) {
          intentos++;
        } else if (acierto === 1){
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
      if (currentFocus > -1 && items[currentFocus]) {
        items[currentFocus].click();  // ejecuta el mismo código del click
      } else {
        const nombreIngresado = input.value.trim().toLowerCase();
        const jugadorValido = jugadores.find(j => j.nombre.toLowerCase() === nombreIngresado);

        if (!jugadorValido) {
          alert("Jugador no encontrado.");
          return;
        }

        const acierto = submitGuess(
          clavePartidaHoy,
          claveEstadisticas,
          idJuego,
          juegoTerminado,
          elegido,
          intentos
        );

        if (acierto === -1) {
          alert("Jugador no encontrado.");
        } else if (acierto === 0) {
          intentos++;
        } else if (acierto === 1){
          juegoTerminado = true;
        }

      }
      currentFocus = -1;
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

  document.addEventListener("click", (e) => {
    if (!suggestionsBox.contains(e.target) && e.target !== input) {
      suggestionsBox.innerHTML = "";
    }
  });

  document.getElementById("info-button").onclick = () => {
    document.getElementById("info-modal").style.display = "block";
  };

  const closeInfoBtn = document.getElementById("close-info");
if (closeInfoBtn) {
  closeInfoBtn.onclick = () => {
    const infoModal = document.getElementById("info-modal");
    if (infoModal) infoModal.style.display = "none";
  };
}


  const columnasPista = [
    { id: "th-nacionalidad", texto: "Nacionalidad", valor: () => elegido.nacionalidad },
    { id: "th-posicion", texto: "Posición", valor: () => elegido.posicion },
    { id: "th-dorsal", texto: "Dorsal", valor: () => elegido.dorsal },
    { id: "th-primera", texto: "Primera Temporada", valor: () => formatearTemporada(elegido.temporadaPrim) },
    { id: "th-ultima", texto: "Última Temporada", valor: () => formatearTemporada(elegido.temporadaSeg) }
  ];


  
document.getElementById("hint-button").onclick = () => {
  const bubble = document.getElementById("hint-bubble");

  if (bubble.style.display === "flex") {
    // Ocultar pista y resetear estados
    bubble.style.display = "none";
    bubble.innerHTML = "";
    pistaMostrada = false;

    columnasPista.forEach(col => {
      const th = document.getElementById(col.id);
      if (th) th.classList.remove("pista-clicable-activa", "pista-seleccionada");
    });

  } else {
    // Mostrar instrucción para elegir columna
    bubble.textContent = "Haz clic en una columna para desvelar la pista";
    bubble.style.display = "flex";

    columnasPista.forEach(col => {
      const th = document.getElementById(col.id);
      if (th) th.classList.add("pista-clicable-activa");
    });
  }
};

  columnasPista.forEach(col => {
    const th = document.getElementById(col.id);
    if (th) {
      th.onclick = () => {
        const bubble = document.getElementById("hint-bubble");
        if (!pistaMostrada && bubble.style.display === "flex") {
          columnasPista.forEach(c2 => {
            const th2 = document.getElementById(c2.id);
            if (th2) th2.classList.remove("pista-clicable-activa", "pista-seleccionada");
          });
          th.classList.add("pista-seleccionada");
          bubble.innerHTML = `<span style="font-weight:bold;">${col.texto}:</span> ${col.valor()}`;
          pistaMostrada = true;
          document.getElementById("hint-button").disabled = true;
        }
      };
    }
  });

  const guessInput = document.getElementById("guessName");

  guessInput.focus();

  guessInput.addEventListener("blur", () => {
    if (!juegoTerminado) {
      setTimeout(() => guessInput.focus(), 10);
    }
  });

const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", () => {
  elegido = reiniciarJuego();  // nuevo elegido
  intentos = 0;
  juegoTerminado = false;
  pistaMostrada = false;
  document.getElementById("hint-button").disabled = false;

  const hintBubble = document.getElementById("hint-bubble");
  hintBubble.style.display = "none";
  hintBubble.innerHTML = "";

  // Quitar clases de las columnas
  columnasPista.forEach(col => {
    const th = document.getElementById(col.id);
    if (th) {
      th.classList.remove("pista-clicable-activa", "pista-seleccionada");
    }
  });

  // Actualizar funciones valor() para usar nuevo elegido
  columnasPista.forEach(col => {
    if (col.id === "th-nacionalidad") col.valor = () => elegido.nacionalidad;
    else if (col.id === "th-posicion") col.valor = () => elegido.posicion;
    else if (col.id === "th-dorsal") col.valor = () => elegido.dorsal;
    else if (col.id === "th-primera") col.valor = () => formatearTemporada(elegido.temporadaPrim);
    else if (col.id === "th-ultima") col.valor = () => formatearTemporada(elegido.temporadaSeg);
  });

  // Limpiar input y poner foco
  const guessInput = document.getElementById("guessName");
  guessInput.value = "";
  guessInput.focus();
});

});
