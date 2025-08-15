const jugadores = [
  {
    "nombre": "Aaron Martin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Abraham Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Adria Pedrosa",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Adrian Embarba",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Aldo Duscher",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Aleix Vidal",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Alejo Veliz",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alex Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Alex Kral",
    "nacionalidad": "Republica Checa",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alex Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Alfa Semedo",
    "nacionalidad": "Guinea-Bissau",
    "posicion": "Centrocampista",
    "dorsal": 2,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Aguado",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Tejero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Vadillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Vazquez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Anaitz Arbilla",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Ander Iturraspe",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Andres Prieto",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Raillo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Antoniu Roca",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 31,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Benjamin Lecomte",
    "nacionalidad": "Francia",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Bernardo Espinosa",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Borja Iglesias",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Brian Olivan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Burgui",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Clerc",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Kameni",
    "nacionalidad": "Camerun",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2005,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Romero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Sanchez",
    "nacionalidad": "Colombia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Cesar Montes",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Christian Alfonso",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Cristhian Stuani",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Alvarez",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Cristian Gomez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Dani Gomez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Daniel Osvaldo",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "David Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2001,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "David Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Denis Suarez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Didac Vila",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2010,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Diego Colotto",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Diego Lopez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Diego Reyes",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Edu Exposito",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Enzo Roco",
    "nacionalidad": "Chile",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Eric Bailly",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Defensa",
    "dorsal": 30,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Ernesto Galan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Esteban Granero",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Facundo Ferreyra",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Felipe Caicedo",
    "nacionalidad": "Ecuador",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Felipe Mattioni",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Calero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Fernando Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Ferran Corominas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Fran Merida",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Francesco Bardi",
    "nacionalidad": "Italia",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Gabriel Torje",
    "nacionalidad": "Rumania",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Gerard Moreno",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "German Parreno",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Giedrius Arlauskis",
    "nacionalidad": "Lituania",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Hector Moreno",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Hernan Perez",
    "nacionalidad": "Paraguay",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Alonso",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Ivan de la Pena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 9,
    "temporadaPrim": 2003,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Jairo Morillas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Javi Chica",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Javi Fuego",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Javi Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Javi Marquez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Javi Puado",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jesus Datolo",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Jhon Cordoba",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Joan Capdevila",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 1999,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Joan Garcia",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Joan Jordan",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Joan Verdu",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Jofre Carreras",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Jonathan Calleri",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Amat",
    "nacionalidad": "Indonesia",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Jose Alberto Canas",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Jose Antonio Reyes",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Jose Callejon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Jose Carlos Lazo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jose Gragera",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jose Manuel Jurado",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Joselu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Juan Albin",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Juan Forlin",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Juan Rafael Fuentes",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Julian Luque",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 32,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Justin Smith",
    "nacionalidad": "Canada",
    "posicion": "Centrocampista",
    "dorsal": 40,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Kalu Uche",
    "nacionalidad": "Nigeria",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Keidi Bare",
    "nacionalidad": "Albania",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Keita Balde",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Kiko Casilla",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Landry Dimata",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Leandro Cabrera",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Lei Wu",
    "nacionalidad": "China",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Leo Baptistao",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Lluis Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Loren Moron",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Vazquez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Luis Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2006,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Manu Lanzarote",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Manu Molina",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 29,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Manu Morlanes",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Marash Kumbulla",
    "nacionalidad": "Albania",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Marc Navarro",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Marc Roca",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Marco Asensio",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Mario Hermoso",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Martin Braithwaite",
    "nacionalidad": "Dinamarca",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Martin Demichelis",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Martin Petrov",
    "nacionalidad": "Bulgaria",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Matias Vargas",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Michael Ciani",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Llambrich",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Mubarak Wakaso",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Naldo",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Nico Melamed",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Oier Olazabal",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Omar El Hilali",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Oscar Duarte",
    "nacionalidad": "Costa Rica",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Gil",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Oscar Melendo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Piatti",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Ramon",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Paco Montanes",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Pape Diop",
    "nacionalidad": "Senegal",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Pau Lopez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Pere Milla",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Philippe Coutinho",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Pipa",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Pizzi",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Pol Lozano",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Ramon",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Raul Baena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Raul de Tomas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Raul Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Rober Correa",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Roberto (Portero)",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Roberto Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 2,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Roberto Rosales",
    "nacionalidad": "Venezuela",
    "posicion": "Defensa",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Romaric",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Ronael Pierre-Gabriel",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Duarte",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Rui Fonte",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Salva Sevilla",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Salvi Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Samuele Longo",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Sebastien Corchia",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Sergi Darder",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Sergi Gomez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Garcia",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2011,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Tejera",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Sidnei",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Simao",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Thievy Bifouma",
    "nacionalidad": "Congo",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Tonny Vilhena",
    "nacionalidad": "Paises Bajos",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Urko Gonzalez de Zarate",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Victor Alvarez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2013,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Victor Campuzano",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Victor Gomez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 34,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Victor Ruiz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2010,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Victor Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2012,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Vini Souza",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Vladimir Weiss",
    "nacionalidad": "Eslovaquia",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Walid Cheddira",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Walter Pandiani",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Yangel Herrera",
    "nacionalidad": "Venezuela",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  }
];
