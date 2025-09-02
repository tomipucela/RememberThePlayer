const jugadores = [
  {
    "nombre": "Achraf Hakimi",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Alphonse Areola",
    "nacionalidad": "Francia",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Arbeloa",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2004,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Carreras",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Morata",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2011,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Odriozola",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Rodriguez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Andriy Lunin",
    "nacionalidad": "Ucrania",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Angel Di Maria",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Antonio Adan",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Rudiger",
    "nacionalidad": "Alemania",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Arda Guler",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Asier Illarramendi",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Aurelien Tchouameni",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Borja Mayoral",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Brahim Diaz",
    "nacionalidad": "Marruecos",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Casemiro",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Chicharito Hernandez",
    "nacionalidad": "Mexico",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Cristiano Ronaldo",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Cristoph Metzelder",
    "nacionalidad": "Alemania",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Dani Ceballos",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Daniel Carvajal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2014,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Danilo",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "David Alaba",
    "nacionalidad": "Austria",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Dean Huijsen",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Denis Cheryshev",
    "nacionalidad": "Rusia",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Diego Lopez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2006,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Eden Hazard",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Eder Militao",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Eduardo Camavinga",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Emmanuel Adebayor",
    "nacionalidad": "Togo",
    "posicion": "Atacante",
    "dorsal": 6,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Endrick",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Esteban Granero",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Ezequiel Garay",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Fabio Coentrao",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Fede Valverde",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ferland Mendy",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Gago",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Fernando Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Fran Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Franco Mastantuono",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 30,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Gareth Bale",
    "nacionalidad": "Gales",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Gonzalo Garcia",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Gonzalo Higuain",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2007,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Guti",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 1996,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Hamit Altintop",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Iker Casillas",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2000,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Isco Alarcon",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Jacobo Ramon",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 31,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "James Rodriguez",
    "nacionalidad": "Colombia",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Jerzy Dudek",
    "nacionalidad": "Polonia",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Jese Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Jesus Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Jesus Vallejo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jose Callejon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Joselu Mato",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Jude Bellingham",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Kaka",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Karim Benzema",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2010,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Kepa Arrizabalaga",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Keylor Navas",
    "nacionalidad": "Costa Rica",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Kiko Casilla",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Kylian Mbappe",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Lass Diarra",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Luca Jovic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Luca Zidane",
    "nacionalidad": "Francia",
    "posicion": "Portero",
    "dorsal": 30,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Silva",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Vazquez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Luka Modric",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2013,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Mahamadou Diarra",
    "nacionalidad": "Mali",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Marcelo",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2007,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Marco Asensio",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Marcos Llorente",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Mariano Diaz",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Martin Odegaard",
    "nacionalidad": "Noruega",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Mateo Kovacic",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Mesut Ozil",
    "nacionalidad": "Alemania",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Michael Essien",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Gutierrez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 35,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Nacho Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2011,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Nuri Sahin",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Pedro Leon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Pepe",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2008,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Rafael van der Vaart",
    "nacionalidad": "Holanda",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2009,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Raphael Varane",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2012,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Raul Albiol",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Raul Asencio",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Raul Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 1995,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Ricardo Carvalho",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Rodrygo Goes",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Royston Drenthe",
    "nacionalidad": "Holanda",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Yanez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Ruud Van Nistelrooy",
    "nacionalidad": "Holanda",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2007,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Sami Khedira",
    "nacionalidad": "Alemania",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Arribas",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 30,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Canales",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Ramos",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2006,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Reguilon",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Theo Hernandez",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Thibaut Courtois",
    "nacionalidad": "Belgica",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Toni Kroos",
    "nacionalidad": "Alemania",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Trent Alexander-Arnold",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Vinicius Junior",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Xabi Alonso",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2010,
    "temporadaSeg": 2015,
    "grupo": "B"
  }
];
