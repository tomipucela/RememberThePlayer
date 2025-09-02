const jugadores = [
  {
    "nombre": "Aaron Martin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Agustin Marchesin",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Alex Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Alfon Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Lemos",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Vadillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Anastasios Douvikas",
    "nacionalidad": "Grecia",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Andres Tunez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Andreu Fontas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Andrew Hjulsager",
    "nacionalidad": "Dinamarca",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Augusto Fernandez",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Augusto Solari",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Villar",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Borja Oubina",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2008,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Brais Mendez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Carl Starfelt",
    "nacionalidad": "Suecia",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Oscar Mingueza",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Carles Perez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Carles Planas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Bellvis",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Joseph Aidoo",
    "nacionalidad": "Ghana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Dotor",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Charles",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Chu-young Park",
    "nacionalidad": "Corea del Sur",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Claudio Beauvue",
    "nacionalidad": "Guadalupe",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Cristian Bustos",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Carreira",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Dani Abalo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Daniel Wass",
    "nacionalidad": "Dinamarca",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Danijel Pranjic",
    "nacionalidad": "Croacia",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "David Catala",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "David Costas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "David Junca",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "David Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2009,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Dejan Drazic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 31,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Denis Suarez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Emre Mor",
    "nacionalidad": "Turquia",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Fabian Orellana",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2012,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Facundo Ferreyra",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Facundo Roncaglia",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Fedor Smolov",
    "nacionalidad": "Rusia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Fer Lopez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 28,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ilaix Moriba",
    "nacionalidad": "Guinea",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Filip Bradaric",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Borja Iglesias",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Fran Beltran",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Gabri Veiga",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Gabriel Fernandez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Giuseppe Rossi",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Goncalo Paciencia",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Gustavo Cabral",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2013,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Haris Seferovic",
    "nacionalidad": "Suiza",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Ferran Jutgla",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Hugo Mallo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2010,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Franco Cervi",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Iago Aspas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2010,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Iker Losada",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Manu Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Inigo Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Ionu? Radu",
    "nacionalidad": "Rumania",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Damian Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Jailson",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Javi Galan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Bryan Zaragoza",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Roman",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Javi Varas",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Javier Manquillo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Jeison Murillo",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Joan Tomas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Joaquin Larrivey",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "John Guidetti",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Jon Aurtenetxe",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Jonathan Bamba",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Javi Rueda",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jonny Otto",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Saenz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Jorgen Strand Larsen",
    "nacionalidad": "Noruega",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jose Fontan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Jose Naranjo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Josep Sene",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Duran",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Jozabed Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Juan Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Junior Alonso",
    "nacionalidad": "Paraguay",
    "posicion": "Defensa",
    "dorsal": 25,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Kevin Vazquez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Levy Madinda",
    "nacionalidad": "Gabon",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Luca de la Torre",
    "nacionalidad": "Estados Unidos",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Boye",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Olaza",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "z",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Manu Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Marcos Alonso",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Marcelo Diaz",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Mihailo Ristic",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Mario Bermejo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Mathias Jensen",
    "nacionalidad": "Dinamarca",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Matias Dituro",
    "nacionalidad": "Chile",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2012,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Maxi Gomez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Michael Krohn-Dehli",
    "nacionalidad": "Dinamarca",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Hugo Sotelo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Hugo Alvarez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Natxo Insa",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Nemanja Radoja",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Nestor Araujo",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Nolito",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Oier Sanjurjo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Okay Yokuslu",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Orbelin Pineda",
    "nacionalidad": "Mexico",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Dominguez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Marc Vidal",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Hernandez",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Pape Cheikh",
    "nacionalidad": "Senegal",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Pione Sisto",
    "nacionalidad": "Dinamarca",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Quique de Lucas",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Rafinha",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2014,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Renato Tapia",
    "nacionalidad": "Peru",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Robert Mazan",
    "nacionalidad": "Eslovaquia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Roberto Lago",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2008,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Blanco",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2012,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Ryad Boudebouz",
    "nacionalidad": "Argelia",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Samuel Llorca",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Santi Mina",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2013,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Sergi Gomez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Alvarez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2012,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Yoel Lago",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 29,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Sofiane Boufal",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Stanislav Lobotka",
    "nacionalidad": "Eslovaquia",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Tadeo Allende",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Theo Bongonda",
    "nacionalidad": "RD Congo",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Thiago Galhardo",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Toni Dovale",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2010,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Unai Nunez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Vadim Demidov",
    "nacionalidad": "Noruega",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Vicente Guaita",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Welliton",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Wesley Hoedt",
    "nacionalidad": "Holanda",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Javi Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 32,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Yoel Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2010,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Jones El-Abdellaoui",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 39,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  }
];
