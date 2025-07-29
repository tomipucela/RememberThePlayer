const jugadores = [
  {
    "nombre": "Joel Robles",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Asenjo",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2001,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Daniel Aranzubia",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Angel Moya",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Antonio Adan",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Diego Godin",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Mario Suarez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2006,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Eduardo Salvio",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Ivo Grbic",
    "nacionalidad": "Croacia",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Jose Antonio Reyes",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2008,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Guilherme Siqueira",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Paulo Assuncao",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Radamel Falcao",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Adrian Lopez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Luis Pizzi",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Fran Merida",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Tiago Cardoso",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2010,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Dominguez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Pulido",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Luis Amaranto Perea",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2005,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "David Villa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Arda Turan",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Domingo Cisma",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Silvio",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Cata Diaz",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Cebolla Rodriguez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Toby Alderweireld",
    "nacionalidad": "Belgica",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Emre Belozoglu",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Thibaut Courtois",
    "nacionalidad": "Belgica",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Filipe Luis",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Joshua Guilavogui",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Santiago Arias",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Javier Manquillo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Raul Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2008,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Benjamin Lecomte",
    "nacionalidad": "Francia",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Diego Ribas",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Leo Baptistao",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Emiliano Insua",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Joao Miranda",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Jose Sosa",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Manu Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Oliver Torres",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Torres",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2001,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Jesus Gamez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Mario Mandzukic",
    "nacionalidad": "Croacia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Horatiu Moldovan",
    "nacionalidad": "Rumania",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Thomas Partey",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Augusto Fernandez",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Raul Jimenez",
    "nacionalidad": "Mexico",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Ansaldi",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Nikola Kalinic",
    "nacionalidad": "Croacia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Cani",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Gabi Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2004,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Torreira",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Alessio Cerci",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Reguilon",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Luciano Vietto",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Geoffrey Kondogbia",
    "nacionalidad": "Republica Centroafricana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Jackson Martinez",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Jose Maria Gimenez",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2014,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Krannevitter",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Rodrigo Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Kevin Gameiro",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Nico Gaitan",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Cesar Azpilicueta",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Axel Werner",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Gabriel Paulista",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Gelson Martins",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Joao Felix",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Juanfran",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2011,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Hernandez",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Caglar Soyuncu",
    "nacionalidad": "Turquia",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Luis Suarez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Francisco Montero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 35,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Matheus Cunha",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Rodrigo de Paul",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Renan Lodi",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Koke",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2010,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Antoine Griezmann",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Matthew Doherty",
    "nacionalidad": "Irlanda",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Hector Herrera",
    "nacionalidad": "Mexico",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Diego Costa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2011,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Moussa Dembele",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Vitolo Machin",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Saponjic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Daniel Wass",
    "nacionalidad": "Dinamarca",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Barrios",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Saul Niguez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2013,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Memphis Depay",
    "nacionalidad": "Holanda",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Angel Correa",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Kieran Trippier",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Thomas Lemar",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Sime Vrsaljko",
    "nacionalidad": "Croacia",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Felipe",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Samuel Lino",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jan Oblak",
    "nacionalidad": "Eslovenia",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Marcos Llorente",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Stefan Savic",
    "nacionalidad": "Montenegro",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Nahuel Molina",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Rodrigo Riquelme",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Arthur Vermeeren",
    "nacionalidad": "Belgica",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Morata",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Axel Witsel",
    "nacionalidad": "Belgica",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Javi Galan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Yannick Carrasco",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Mario Hermoso",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Giuliano Simeone",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Reinildo Mandava",
    "nacionalidad": "Mozambique",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Robin Le Normand",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Julian Alvarez",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Juan Musso",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Conor Gallagher",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alexander Sorloth",
    "nacionalidad": "Noruega",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  }
];
