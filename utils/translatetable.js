
  // Traducciones para español e inglés
  const translations = {
    es: {
      rememberText: "Remember<br />the player", // Si quieres traducirlo, pon aquí el texto en español
      infoTitle: "Información",
      statsTitle: "Estadísticas",
      hintTitle: "Pista",
      hintText: "Aquí aparecerá la pista del jugador.",
      guessPlaceholder: "Nombre del jugador...",
      restartButton: "Continuar Jugando",
      tableHeaders: {
        jugador: "Jugador",
        nacionalidad: "Nacionalidad",
        posicion: "Posición",
        dorsal: "Dorsal",
        primera: "Primera Temporada",
        ultima: "Última Temporada"
      },
      infoAriaLabel: "Abrir información del juego",
      hintAriaLabel: "Pista"
    },
    en: {
      rememberText: "Remember<br />the player",
      infoTitle: "Information",
      statsTitle: "Stats",
      hintTitle: "Hint",
      hintText: "The player's hint will appear here.",
      guessPlaceholder: "Player's name...",
      
      restartButton: "Continue Playing",
      tableHeaders: {
        jugador: "Player",
        nacionalidad: "Nationality",
        posicion: "Position",
        dorsal: "Number",
        primera: "First Season",
        ultima: "Last Season"
      },
      infoAriaLabel: "Open game information",
      hintAriaLabel: "Hint"
    }
  };

  // Detectar idioma del navegador (solo español o inglés)
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith('es') ? 'es' : 'en';

  // Función para actualizar textos
  function applyTranslations() {
    const t = translations[lang];

    // Cambiar texto en el DOM
    document.getElementById('remember-text').innerHTML = t.rememberText;
    document.getElementById('liga2-text').textContent = t.liga2Text;
    document.getElementById('info-button').title = t.infoTitle;
    document.getElementById('stats-button').title = t.statsTitle;
    document.getElementById('info-button').setAttribute('aria-label', t.infoAriaLabel);
    document.getElementById('hint-button').title = t.hintTitle;
    document.getElementById('hint-button').setAttribute('aria-label', t.hintAriaLabel);
    document.querySelector('#hint-modal h2').textContent = t.hintTitle;
    document.getElementById('hint-text').textContent = t.hintText;
    document.getElementById('guessName').placeholder = t.guessPlaceholder;
    
    document.getElementById('restart-btn').textContent = t.restartButton;

    // Cambiar encabezados de tabla
    document.querySelector('th:nth-child(1)').textContent = t.tableHeaders.jugador;
    document.getElementById('th-nacionalidad').textContent = t.tableHeaders.nacionalidad;
    document.getElementById('th-posicion').textContent = t.tableHeaders.posicion;
    document.getElementById('th-dorsal').textContent = t.tableHeaders.dorsal;
    document.getElementById('th-primera').textContent = t.tableHeaders.primera;
    document.getElementById('th-ultima').textContent = t.tableHeaders.ultima;
  }

  // Ejecutar la traducción al cargar
  applyTranslations();
