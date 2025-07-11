const jugadores = [
  {
    "nombre": "Iker Casillas",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2000,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Ricardo Carvalho",
    "nacionalidad": "Portugal",
    "posicion": "DFC",
    "dorsal": 11,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Keylor Navas",
    "nacionalidad": "Costa Rica",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Fernando Gago",
    "nacionalidad": "Argentina",
    "posicion": "MCD",
    "dorsal": 5,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Mahamadou Diarra",
    "nacionalidad": "Mali",
    "posicion": "MCD",
    "dorsal": 6,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Thibaur Courtois",
    "nacionalidad": "Belgica",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Pepe",
    "nacionalidad": "Portugal",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2008,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Fabio Coentrao",
    "nacionalidad": "Portugal",
    "posicion": "LI",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Sami Khedira",
    "nacionalidad": "Alemania",
    "posicion": "MCD",
    "dorsal": 6,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Daniel Carvajal",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2014,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Jerzy Dudek",
    "nacionalidad": "Polonia",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Eder Militao",
    "nacionalidad": "Brasil",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Kaka",
    "nacionalidad": "Brasil",
    "posicion": "MP",
    "dorsal": 8,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Rafael van der Vaart",
    "nacionalidad": "Holanda",
    "posicion": "MCD",
    "dorsal": 23,
    "temporadaPrim": 2009,
    "temporadaSeg": 2010
  },
  {
    "nombre": "Esteban Granero",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 11,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Raul Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 1995,
    "temporadaSeg": 2010
  },
  {
    "nombre": "Guti",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 1996,
    "temporadaSeg": 2010
  },
  {
    "nombre": "Ezequiel Garay",
    "nacionalidad": "Argentina",
    "posicion": "DFC",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011
  },
  {
    "nombre": "David Alaba",
    "nacionalidad": "Austria",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Mesut Ozil",
    "nacionalidad": "Alemania",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Royston Drenthe",
    "nacionalidad": "Holanda",
    "posicion": "LI",
    "dorsal": 15,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010
  },
  {
    "nombre": "Cristoph Metzelder",
    "nacionalidad": "Alemania",
    "posicion": "DFC",
    "dorsal": 21,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010
  },
  {
    "nombre": "Ruud Van Nistelrooy",
    "nacionalidad": "Holanda",
    "posicion": "DC",
    "dorsal": 17,
    "temporadaPrim": 2007,
    "temporadaSeg": 2010
  },
  {
    "nombre": "Sergio Ramos",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2006,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Antonio Adan",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Raphael Varane",
    "nacionalidad": "Francia",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2012,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Jude Bellingham",
    "nacionalidad": "Inglaterra",
    "posicion": "MP",
    "dorsal": 5,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Raul Albiol",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 18,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Emmanuel Adebayor",
    "nacionalidad": "Togo",
    "posicion": "DC",
    "dorsal": 6,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Sergio Canales",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Pedro Leon",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 21,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Gonzalo Higuain",
    "nacionalidad": "Argentina",
    "posicion": "DC",
    "dorsal": 20,
    "temporadaPrim": 2007,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Xabi Alonso",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2010,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Jose Callejon",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 21,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Cristiano Ronaldo",
    "nacionalidad": "Portugal",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Lass Diarra",
    "nacionalidad": "Francia",
    "posicion": "MCD",
    "dorsal": 24,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Nacho Fernandez",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2011,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Nuri Sahin",
    "nacionalidad": "Turquia",
    "posicion": "MCD",
    "dorsal": 5,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Hamit Altintop",
    "nacionalidad": "Turquia",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Eduardo Camavinga",
    "nacionalidad": "Francia",
    "posicion": "MCD",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Diego Lopez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2006,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Vinicius Junior",
    "nacionalidad": "Brasil",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Michael Essien",
    "nacionalidad": "Ghana",
    "posicion": "MCD",
    "dorsal": 15,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Eden Hazard",
    "nacionalidad": "Belgica",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Angel Di Maria",
    "nacionalidad": "Argentina",
    "posicion": "ED",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Alvaro Arbeloa",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 17,
    "temporadaPrim": 2004,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Asier Illarramendi",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Jese Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Jesus Fernandez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Toni Kroos",
    "nacionalidad": "Alemania",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Mateo Kovacic",
    "nacionalidad": "Croacia",
    "posicion": "MCD",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Fede Valverde",
    "nacionalidad": "Uruguay",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Chicharito Hernandez",
    "nacionalidad": "Mexico",
    "posicion": "DC",
    "dorsal": 14,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Fernando Pacheco",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Lucas Silva",
    "nacionalidad": "Brasil",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Alvaro Morata",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 21,
    "temporadaPrim": 2011,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Karim Benzema",
    "nacionalidad": "Francia",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2010,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Danilo",
    "nacionalidad": "Brasil",
    "posicion": "LD",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Kylian Mbappe",
    "nacionalidad": "Francia",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Marcelo",
    "nacionalidad": "Brasil",
    "posicion": "LI",
    "dorsal": 12,
    "temporadaPrim": 2007,
    "temporadaSeg": 2022
  },
  {
    "nombre": "James Rodriguez",
    "nacionalidad": "Colombia",
    "posicion": "MP",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Denis Cheryshev",
    "nacionalidad": "Rusia",
    "posicion": "EI",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Borja Mayoral",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Ruben Yanez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Kiko Casilla",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Luka Modric",
    "nacionalidad": "Croacia",
    "posicion": "MCD",
    "dorsal": 10,
    "temporadaPrim": 2013,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Theo Hernandez",
    "nacionalidad": "Francia",
    "posicion": "LI",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Achraf Hakimi",
    "nacionalidad": "Marruecos",
    "posicion": "LD",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Marco Asensio",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Marcos Llorente",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 18,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Rodrygo Goes",
    "nacionalidad": "Brasil",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Gareth Bale",
    "nacionalidad": "Gales",
    "posicion": "ED",
    "dorsal": 18,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Luca Jovic",
    "nacionalidad": "Serbia",
    "posicion": "DC",
    "dorsal": 16,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Casemiro",
    "nacionalidad": "Brasil",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Martin Odegaard",
    "nacionalidad": "Noruega",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Joselu Mato",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Sergio Reguilon",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Isco Alarcon",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 22,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Alvaro Odriozola",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 16,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Alphonse Areola",
    "nacionalidad": "Francia",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Andriy Lunin",
    "nacionalidad": "Ucrania",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Luca Zidane",
    "nacionalidad": "Francia",
    "posicion": "PT",
    "dorsal": 30,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Aurelien Tchouameni",
    "nacionalidad": "Francia",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Arda Guler",
    "nacionalidad": "Turquia",
    "posicion": "MP",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Miguel Gutierrez",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 35,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Mariano Diaz",
    "nacionalidad": "Republica Dominicana",
    "posicion": "DC",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Sergio Arribas",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 30,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Endrick",
    "nacionalidad": "Brasil",
    "posicion": "DC",
    "dorsal": 16,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Lucas Vazquez",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Jesus Vallejo",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Alvaro Rodriguez",
    "nacionalidad": "Uruguay",
    "posicion": "DC",
    "dorsal": 29,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Dani Ceballos",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Kepa Arrizabalaga",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Fran Garcia",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 20,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Brahim Diaz",
    "nacionalidad": "Marruecos",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Antonio Rudiger",
    "nacionalidad": "Alemania",
    "posicion": "DFC",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Ferland Mendy",
    "nacionalidad": "Francia",
    "posicion": "LI",
    "dorsal": 23,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Jacobo Ramon",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 31,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Raul Asencio",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 35,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Gonzalo Garcia",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 30,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  }
];
