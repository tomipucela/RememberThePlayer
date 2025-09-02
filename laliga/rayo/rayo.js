const jugadores = [
  {
    "nombre": "Abdoulaye Ba",
    "nacionalidad": "Senegal",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Abdul Mumin",
    "nacionalidad": "Ghana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Abdulmajeed Al-Sulayhim",
    "nacionalidad": "Arabia Saudita",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Adrian Embarba",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2014,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Adrian Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Alberto Bueno",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Alberto Garcia",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Alberto Perea",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Alejandro Arribas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Alejandro Catena",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Alejandro Galvez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2013,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Alejandro Pozuelo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Alemao",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 69,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Alex Alegria",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Alex Moreno",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Alfonso Espino",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Garcia",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Medran",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Anaitz Arbilla",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Andrei Ra?iu",
    "nacionalidad": "Rumania",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Andres Martin",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Andrija Delibasic",
    "nacionalidad": "Montenegro",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Amaya",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Antonio Luna",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Milic",
    "nacionalidad": "Croacia",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Antonin",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Aras Ozbiliz",
    "nacionalidad": "Armenia",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Aridane Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Augusto Batalla",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Baiano",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Bebe",
    "nacionalidad": "Cabo Verde",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Bruno Zuculini",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Chengdong Zhang",
    "nacionalidad": "China",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Chori Dominguez",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 9,
    "temporadaPrim": 2013,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Alvarez",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Dani Cardenas",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Dani Gimenez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Dani Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "David Cobeno",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2009,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Diego Aguirre",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Diego Costa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Diego Llorente",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 27,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Diego Lopez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Emiliano Armenteros",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2011,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Emiliano Insua",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Emiliano Velazquez",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Ernesto Galan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Esteban Saveljich",
    "nacionalidad": "Montenegro",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Federico Piovaccari",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Florian Lejeune",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Fran Beltran",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 29,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Fran Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Fran Perez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Francisco Cerro",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Franco Cristaldo",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Franco Di Santo",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Franco Vazquez",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Gael Kakuta",
    "nacionalidad": "RD del Congo",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Gerard Gumbau",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Giannelli Imbula",
    "nacionalidad": "RD del Congo",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Gorka Elustondo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Iago Falque",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Isi Palazon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Balliu",
    "nacionalidad": "Albania",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Martos",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "James Rodriguez",
    "nacionalidad": "Colombia",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Javi Fuego",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Javi Guerra",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Javier Aquino",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Joaquin Larrivey",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Joel Robles",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Johan Mojica",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Jonathan Pereira",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Jonathan Viera",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Joni Montiel",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Jordi Amat",
    "nacionalidad": "Indonesia",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2013,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Figueras",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Jordi Gomez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Jorge de Frutos",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Morcillo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Jorge Pulido",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Jose Carlos",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 9,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Jose Crespo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Jose Dorado",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Jose Leon",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Jose Manuel Casado",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Jose Maria Movilla",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Jose Pozo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Jozabed Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Jozhua Vertrouwd",
    "nacionalidad": "Paises Bajos",
    "posicion": "Defensa",
    "dorsal": 33,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Juan Carlos",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Juan Villar",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Kevin Rodrigues",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Kike Perez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Koke",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Lass Bangoura",
    "nacionalidad": "Guinea",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2011,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Leo Baptistao",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Leonardo Ulloa",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Leonel Galeano",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Lica",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Luca Zidane",
    "nacionalidad": "Francia",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Luis Advincula",
    "nacionalidad": "Peru",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Luis Farina",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Luiz Felipe",
    "nacionalidad": "Italia",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Mamadou Sylla",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Manucho",
    "nacionalidad": "Angola",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Manuel Arana",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Manuel Iturra",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Mario Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Mario Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Mario Suarez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Martin Merquelanz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Michel",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 1993,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Michu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Angel Guerrero",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Miguel Crespo",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Labaka",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Miku",
    "nacionalidad": "Venezuela",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Mohammed Abu",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Mohammed Fatau",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Nacho Martinez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2013,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Nery Castillo",
    "nacionalidad": "Mexico",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Nestor Susaeta",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Nicki Bille",
    "nacionalidad": "Dinamarca",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Nikola Maras",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Nobel Mendy",
    "nacionalidad": "Senegal",
    "posicion": "Defensa",
    "dorsal": 69,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Oscar Trejo",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2011,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Valentin",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ousseynou Cisse",
    "nacionalidad": "Mali",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Claveria",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Iniguez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Pacha Espino",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Pathe Ciss",
    "nacionalidad": "Senegal",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Patrick Ebert",
    "nacionalidad": "Alemania",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Paulo Gazzaniga",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Pedro Botelho",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Pedro Diaz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Pep Chavarria",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Piti",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2007,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Quini",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Radamel Falcao",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Rafa Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Randy Nteka",
    "nacionalidad": "Angola",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Raul Baena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Raul Bravo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Raul de Tomas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Raul Tamudo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Razvan Rat",
    "nacionalidad": "Rumania",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Roberto Santamaria",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Roberto Trashorras",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2012,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Rodri",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Martinez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Rochina",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Salvi Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Samuele Longo",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Santi Comesana",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Saul Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Saul Niguez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Sebastian Fernandez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Sergi Guardiola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Akieme",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2016,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Camello",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Stole Dimitrievski",
    "nacionalidad": "Macedonia del Norte",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Sueliton",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Tito",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2010,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Tomas Mejias",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Toni Dovale",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Tono",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Uche Agbo",
    "nacionalidad": "Nigeria",
    "posicion": "Centrocampista",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Unai Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Yacine Qasmi",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Yoel Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Ze Castro",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "B"
  }
];
