import { 
  getJugadorDelDiaLocal,
  cargarPartidaGuardada,
  formatearTemporada,
  submitGuess,
  reiniciarJuego,
  mostrarEstadisticas,
  cargarPistaGuardada,
  guardarProgresoPartida,
  procesarFallo
} from "./funciones.js";
import { banderaDePaisImg } from './paises.js';


const idioma = navigator.language || navigator.userLanguage;
const esEspanol = idioma.startsWith('es');
const traducciones = {
  "Nacionalidad": { en: "Nationality" },
  "Posición": { en: "Position" },
  "Dorsal": { en: "Number" },
  "Primera Temporada": { en: "First Season" },
  "Última Temporada": { en: "Last Season" },
  "Elige una columna para ver la pista": { en: "Select a column to reveal the hint" },
};
const posicionesTraducidas = {
  'Portero': 'Goalkeeper',
  'Defensa': 'Defender',
  'Centrocampista': 'Midfielder',
  'Atacante': 'Forward'
};

function t(texto) {
  if (esEspanol) return texto;
  return traducciones[texto]?.en || texto;
}

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")               // separa letras y acentos
    .replace(/[\u0300-\u036f]/g, "") // quita los acentos
    .replace(/ñ/gi, "n")             // convierte ñ en n
    .toLowerCase();
}



document.addEventListener("DOMContentLoaded", () => {
  let elegido = getJugadorDelDiaLocal();
  document.getElementById("hint-button").disabled = false;
  const maxIntentos = 6;
  let juegoTerminado = false;
  let pistaMostrada = cargarPistaGuardada(clavePartidaHoy);
  if (pistaMostrada) {
    
    const bubble = document.getElementById("hint-bubble");
    if (bubble) {
      bubble.innerHTML = pistaMostrada;
      bubble.style.display = "flex";
    }
    document.getElementById("hint-button").disabled = true;
  }
  let intentos = cargarPartidaGuardada(clavePartidaHoy, elegido, juegoTerminado);

  if (intentos< maxIntentos) {
    document.getElementById("guessName").focus();
  }

  const input = document.getElementById("guessName");
  const suggestionsBox = document.getElementById("suggestions");
  let currentFocus = -1;

  input.addEventListener("input", () => {
    const value = normalizarTexto(input.value.trim());
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
          intentos,
          pistaMostrada
        );

        if (acierto === 0) {
          intentos++;
        } else if (acierto === 1){
          juegoTerminado = true;
          document.getElementById("hint-button").disabled = true;
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
        items[currentFocus].click();
      } else {
        const acierto = submitGuess(
          clavePartidaHoy,
          claveEstadisticas,
          idJuego,
          juegoTerminado,
          elegido,
          intentos,
          pistaMostrada
        );

        if (acierto === 0) {
          intentos++;
        } else if (acierto === 1){
          juegoTerminado = true;
          document.getElementById("hint-button").disabled = true;
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
  {
    id: "th-nacionalidad",
    texto: t("Nacionalidad"),
    valor: () => {
      const bandera = banderaDePaisImg(elegido.nacionalidad.toLowerCase());
      return `${bandera}`;
    }
  },
  {
    id: "th-posicion",
    texto: t("Posición"),
    valor: () => {
      return esEspanol ? elegido.posicion : (posicionesTraducidas[elegido.posicion] || elegido.posicion);
    }
  },
  {
    id: "th-dorsal",
    texto: t("Dorsal"),
    valor: () => elegido.dorsal
  },
  {
    id: "th-primera",
    texto: t("Primera Temporada"),
    valor: () => formatearTemporada(elegido.temporadaPrim)
  },
  {
    id: "th-ultima",
    texto: t("Última Temporada"),
    valor: () => formatearTemporada(elegido.temporadaSeg)
  }
];


document.getElementById("stats-button").onclick = () => {
  mostrarEstadisticas(idJuego);
};


  
document.getElementById("hint-button").onclick = () => {
  const bubble = document.getElementById("hint-bubble");

  if (bubble.style.display === "flex") {
    bubble.style.display = "none";
    bubble.innerHTML = "";
    pistaMostrada = "";

    columnasPista.forEach(col => {
      const th = document.getElementById(col.id);
      if (th) th.classList.remove("pista-clicable-activa", "pista-seleccionada");
    });

  } else {
    bubble.textContent = t("Elige una columna para ver la pista");
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
        if (bubble.style.display === "flex" && pistaMostrada === "") {
          columnasPista.forEach(c2 => {
            const th2 = document.getElementById(c2.id);
            if (th2) th2.classList.remove("pista-clicable-activa", "pista-seleccionada");
          });
          
          th.classList.add("pista-seleccionada");
          pistaMostrada = `<span style="font-weight:bold;">${col.texto}:</span> ${col.valor()}`;
          bubble.innerHTML = pistaMostrada;
          document.getElementById("hint-button").disabled = true;
          guardarProgresoPartida("en_progreso", elegido, intentos-1, clavePartidaHoy, pistaMostrada);
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
  elegido = reiniciarJuego(); 
  intentos = 0;
  juegoTerminado = false;
  document.getElementById("hint-button").disabled = false;
  pistaMostrada = "";
  document.getElementById("hint-button").disabled = false;

  const hintBubble = document.getElementById("hint-bubble");
  hintBubble.style.display = "none";
  hintBubble.innerHTML = "";

  columnasPista.forEach(col => {
    const th = document.getElementById(col.id);
    if (th) {
      th.classList.remove("pista-clicable-activa", "pista-seleccionada");
    }
  });

  columnasPista.forEach(col => {
    if (col.id === "th-nacionalidad") col.valor = () => banderaDePaisImg(elegido.nacionalidad.toLowerCase());
    else if (col.id === "th-posicion") col.valor = () => elegido.posicion;
    else if (col.id === "th-dorsal") col.valor = () => elegido.dorsal;
    else if (col.id === "th-primera") col.valor = () => formatearTemporada(elegido.temporadaPrim);
    else if (col.id === "th-ultima") col.valor = () => formatearTemporada(elegido.temporadaSeg);
  });

  const guessInput = document.getElementById("guessName");
  guessInput.value = "";
  guessInput.focus();
  
});






document.getElementById("flag-button").addEventListener("click", () => {
  const mensaje= esEspanol ? `Te rendiste. El jugador era: ${elegido.nombre}.` :`You gave up. The player was: ${elegido.nombre}`;
  procesarFallo(mensaje, elegido, intentos, clavePartidaHoy, claveEstadisticas, pistaMostrada);
});


});
