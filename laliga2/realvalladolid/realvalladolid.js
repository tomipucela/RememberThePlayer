const jugadores = [
  {
    "nombre": "Justo Villar",
    "nacionalidad": "Paraguay",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Fabio Faria",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Figueras",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Tekio",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 29,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Marc Valiente",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Cesar Arzo",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Jesus Rueda",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2009,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Pena",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 28,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Lolo Pla",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 27,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Manucho",
    "nacionalidad": "Angola",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Anton",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2003,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2002,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Balenziaga",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Matabuena",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Aquino",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Dani Hernandez",
    "nacionalidad": "Venezuela",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Valdet Rama",
    "nacionalidad": "Albania",
    "posicion": "EI",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Guilherme",
    "nacionalidad": "Brasil",
    "posicion": "LI",
    "dorsal": 15,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Victor Perez",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 22,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Pedro Lopez",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 16,
    "temporadaPrim": 2006,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Sisi",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 21,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Pena",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 17,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Rubio",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 18,
    "temporadaPrim": 2007,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Patrick Ebert",
    "nacionalidad": "Alemania",
    "posicion": "ED",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Barragan",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Varela",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Calle",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Nafti",
    "nacionalidad": "Tunez",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Keita",
    "nacionalidad": "Guinea",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Alberto Bueno",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Jorge Alonso",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Jacobo Sanz",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2006,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Sana",
    "nacionalidad": "Guinea-Bisau",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Raul Navas",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 26,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Quique",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 27,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Jofre",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 11,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Daniel Larsson",
    "nacionalidad": "Suecia",
    "posicion": "MP",
    "dorsal": 11,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Javi Jimenez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 30,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Javi Guerra",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Javier Baraja",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2002,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Nauzet",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Omar Ramos",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Juan Neira",
    "nacionalidad": "Argentina",
    "posicion": "MP",
    "dorsal": 7,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Lluis Sastre",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Juanito",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Henrique Sereno",
    "nacionalidad": "Portugal",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Marquitos",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 3,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Abdul Razak",
    "nacionalidad": "Ghana",
    "posicion": "MCD",
    "dorsal": 2,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Rukavina",
    "nacionalidad": "Serbia",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Jaime Jimenez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Diego Marino",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Fausto Rossi",
    "nacionalidad": "Italia",
    "posicion": "MCD",
    "dorsal": 5,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Zakarya Bergdich",
    "nacionalidad": "Marruecos",
    "posicion": "EI",
    "dorsal": 21,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Stefan Mitrovic",
    "nacionalidad": "Serbia",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Humberto Osorio",
    "nacionalidad": "Colombia",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Jeffren",
    "nacionalidad": "Venezuela",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Gilberto Alcatraz",
    "nacionalidad": "Colombia",
    "posicion": "LD",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Heinz Bartmettler",
    "nacionalidad": "Republica Dominicana",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Javi Varas",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Javi Chica",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Andre Leao",
    "nacionalidad": "Portugal",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Johan Mojica",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "David Timor",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Diaz",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Samuel Llorca",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Chus Herrero",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Raul Fernandez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Jonathan Pereira",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 24,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Roger Marti",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Hernan Perez",
    "nacionalidad": "Paraguay",
    "posicion": "ED",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Tulio de Melo",
    "nacionalidad": "Brasil",
    "posicion": "DC",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Alejandro Alfaro",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Brian Olivan",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 33,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Julio Iricibar",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 26,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Kepa Arrizabalaga",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Javi Moyano",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Mario Hermoso",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 36,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Juanpe",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 14,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Marcelo Silva",
    "nacionalidad": "Uruguay",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Juan Villar",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Rodri Rios",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Pedro Tiba",
    "nacionalidad": "Portugal",
    "posicion": "MP",
    "dorsal": 25,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Manu del Moral",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 20,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Bruno Varela",
    "nacionalidad": "Portugal",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Guzman Casaseca",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Borja Fernandez",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2007,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Vicenzo Renella",
    "nacionalidad": "Italia",
    "posicion": "DC",
    "dorsal": 24,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Nikos Karabelas",
    "nacionalidad": "Grecia",
    "posicion": "LI",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Diego Rubio",
    "nacionalidad": "Chile",
    "posicion": "DC",
    "dorsal": 19,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Angel Garcia",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Jose Arnaiz",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Andre Ferreira",
    "nacionalidad": "Portugal",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Erick Moreno",
    "nacionalidad": "Colombia",
    "posicion": "DC",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Isaac Becerra",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Luciano Balbi",
    "nacionalidad": "Argentina",
    "posicion": "LI",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Alex Perez",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alberto Guitian",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Michel Herrero",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Joan Jordan",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 19,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Alex Lopez",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 4,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Pau Torres",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Raul De Tomas",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 47,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Jaime Mata",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Rafa Lopez",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2005,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Igor Lichnovsky",
    "nacionalidad": "Chile",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Marcos",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Espinoza",
    "nacionalidad": "Argentina",
    "posicion": "EI",
    "dorsal": 18,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Dejan Drazic",
    "nacionalidad": "Serbia",
    "posicion": "ED",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Iban Salvador",
    "nacionalidad": "Guinea Ecuatorial",
    "posicion": "MP",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Markel Etxeberria",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 22,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Luismi Sanchez",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "David Mayoral",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 42,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Masip",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2018,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Antonito Regal",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Kiko Olivas",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Deivid",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Hervias",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Plano",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Toni Villa",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Calero",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Nacho Martinez",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Giannis Gianniotas",
    "nacionalidad": "Grecia",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Javier Ontiveros",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Antonio Cotan",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Asier Villalibre",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Toni Martinez",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Borja Herrera",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Chris Ramos",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 12,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Lukas Rotpuller",
    "nacionalidad": "Austria",
    "posicion": "DFC",
    "dorsal": 20,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Sulayman Marreh",
    "nacionalidad": "Gambia",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Nooh Al Mousa",
    "nacionalidad": "Arabia Saudi",
    "posicion": "MCD",
    "dorsal": 25,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Alcaraz",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Enes Unal",
    "nacionalidad": "Turquia",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Sergi Guardiola",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 16,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Yoel Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Keko Gontan",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Daniele Verde",
    "nacionalidad": "Italia",
    "posicion": "EI",
    "dorsal": 11,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Duje Cop",
    "nacionalidad": "Croacia",
    "posicion": "DC",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Joaquin Fernandez",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Leo Suarez",
    "nacionalidad": "Argentina",
    "posicion": "ED",
    "dorsal": 32,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Waldo Rubio",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Moi Delgado",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Ivi Lopez",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Miguel de la Fuente",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 29,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Stiven Plaza",
    "nacionalidad": "Ecuador",
    "posicion": "DC",
    "dorsal": 42,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Mohammed Salisu",
    "nacionalidad": "Ghana",
    "posicion": "DFC",
    "dorsal": 27,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Sandro Ramirez",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Jose Antonio Caro",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Fede San Emeterio",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Raul Carnero",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Pedro Porro",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Luis Perez",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Fede Barba",
    "nacionalidad": "Italia",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "David Torres",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Hatem Ben Arfa",
    "nacionalidad": "Francia",
    "posicion": "MP",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Matheus Fernandes",
    "nacionalidad": "Brasil",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Andrey Lunin",
    "nacionalidad": "Ucrania",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Jorge de Frutos",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Victor Meseguer",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 4,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Bruno Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Fabian Orellana",
    "nacionalidad": "Chile",
    "posicion": "ED",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Roque Mesa",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Shon Weissman",
    "nacionalidad": "Israel",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Roberto Fernandez",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Jawad El Yamiq",
    "nacionalidad": "Marruecos",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Javi Sanchez",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Saidy Janko",
    "nacionalidad": "Gambia",
    "posicion": "LD",
    "dorsal": 18,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Olaza",
    "nacionalidad": "Uruguay",
    "posicion": "LI",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Jota",
    "nacionalidad": "Portugal",
    "posicion": "EI",
    "dorsal": 40,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Kenan Kodro",
    "nacionalidad": "Bosnia-Herzegovina",
    "posicion": "DC",
    "dorsal": 3,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Aguado",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Gonzalo Plata",
    "nacionalidad": "Ecuador",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Leon",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Cristo Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Monchu",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Enzi Boyomo",
    "nacionalidad": "Camerun",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jon Morcillo",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 20,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Diogo Queiros",
    "nacionalidad": "Portugal",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Josema",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Fresneda",
    "nacionalidad": "Espana",
    "posicion": "LD",
    "dorsal": 27,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Hugo Vallejo",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 27,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Sekou Gassama",
    "nacionalidad": "Senegal",
    "posicion": "DC",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Asenjo",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2008,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Escudero",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Mamadou Sylla",
    "nacionalidad": "Senegal",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Cyle Larin",
    "nacionalidad": "Canada",
    "posicion": "DC",
    "dorsal": 25,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Kike Perez",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Martin Hongla",
    "nacionalidad": "Camerun",
    "posicion": "MCD",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Sanchez",
    "nacionalidad": "Espana",
    "posicion": "ED",
    "dorsal": 10,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Raul Moro",
    "nacionalidad": "Espana",
    "posicion": "EI",
    "dorsal": 11,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Marcos Andre",
    "nacionalidad": "Brasil",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Zouhair Feddal",
    "nacionalidad": "Marruecos",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Cesar de la Hoz",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Juanjo Narvaez",
    "nacionalidad": "Colombia",
    "posicion": "EI",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Mickael Malsa",
    "nacionalidad": "Francia",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Tunde Akinsola",
    "nacionalidad": "Nigeria",
    "posicion": "EI",
    "dorsal": 36,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Darwin Machis",
    "nacionalidad": "Venezuela",
    "posicion": "EI",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Amath Ndiaye",
    "nacionalidad": "Senegal",
    "posicion": "EI",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Stanko Juric",
    "nacionalidad": "Croacia",
    "posicion": "MCD",
    "dorsal": 20,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Selim Amallah",
    "nacionalidad": "Marruecos",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Rosa",
    "nacionalidad": "Brasil",
    "posicion": "LD",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "John Victor",
    "nacionalidad": "Brasil",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Anuar Tuhami",
    "nacionalidad": "Marruecos",
    "posicion": "MCD",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Kenedy",
    "nacionalidad": "Brasil",
    "posicion": "EI",
    "dorsal": 24,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Aceves",
    "nacionalidad": "Espana",
    "posicion": "PT",
    "dorsal": 31,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Gustavo Henrique",
    "nacionalidad": "Brasil",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Oliveira",
    "nacionalidad": "Brasil",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Negredo",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Isra Salazar",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 38,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Cedric",
    "nacionalidad": "Camerun",
    "posicion": "DC",
    "dorsal": 35,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Stipe Biuk",
    "nacionalidad": "Croacia",
    "posicion": "EI",
    "dorsal": 17,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Cesar Tarrega",
    "nacionalidad": "Espana",
    "posicion": "DFC",
    "dorsal": 34,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Joni Montiel",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Arnu",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 29,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Garriel",
    "nacionalidad": "Espana",
    "posicion": "LI",
    "dorsal": 29,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Karl Hein",
    "nacionalidad": "Estonia",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Eray Comert",
    "nacionalidad": "Suiza",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Mario Martin",
    "nacionalidad": "Espana",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Juanmi Latasa",
    "nacionalidad": "Espana",
    "posicion": "DC",
    "dorsal": 14,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Chuki",
    "nacionalidad": "Espana",
    "posicion": "MP",
    "dorsal": 28,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Candela",
    "nacionalidad": "Italia",
    "posicion": "LD",
    "dorsal": 22,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Adam Aznou",
    "nacionalidad": "Marruecos",
    "posicion": "LI",
    "dorsal": 39,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Tamas Nikitscher",
    "nacionalidad": "Hungria",
    "posicion": "MCD",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Juma Bah",
    "nacionalidad": "Sierra Leona",
    "posicion": "DFC",
    "dorsal": 35,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Cenk Ozkacar",
    "nacionalidad": "Turquia",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Florian Grillitsch",
    "nacionalidad": "Austria",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Joseph Aidoo",
    "nacionalidad": "Ghana",
    "posicion": "DFC",
    "dorsal": 16,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Henrique Silva",
    "nacionalidad": "Brasil",
    "posicion": "LI",
    "dorsal": 17,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  }
];
