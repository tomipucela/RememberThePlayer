const jugadores = [
  {
    "nombre": "Justo Villar",
    "nacionalidad": "Paraguay",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Fabio Faria",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Jordi Figueras",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Tekio",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 29,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Marc Valiente",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Cesar Arzo",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Jesus Rueda",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2009,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Ruben Peña",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 28,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Lolo Plá",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 27,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Manucho",
    "nacionalidad": "Angola",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Alvaro Anton",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2003,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Oscar Gonzalez",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2002,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Mikel Balenziaga",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Matabuena",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Aquino",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Dani Hernández",
    "nacionalidad": "Venezuela",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Valdet Rama",
    "nacionalidad": "Albania",
    "posicion": "EI",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Guilherme",
    "nacionalidad": "Brasil",
    "posicion": "LI",
    "dorsal": 15,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Victor Pérez",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 22,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Pedro López",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 16,
    "temporadaPrim": 2006,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Sisi",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 21,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Carlos Peña",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 17,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Alvaro Rubio",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 18,
    "temporadaPrim": 2007,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Patrick Ebert",
    "nacionalidad": "Alemania",
    "posicion": "ED",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Barragan",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Varela",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Calle",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Nafti",
    "nacionalidad": "Tunez",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Keita",
    "nacionalidad": "Guinea",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Alberto Bueno",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Jorge Alonso",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Jacobo Sanz",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2006,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Sana",
    "nacionalidad": "Guinea-Bisau",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Raul Navas",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 26,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Quique",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 27,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Jofre",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 11,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Daniel Larsson",
    "nacionalidad": "Suecia",
    "posicion": "MP",
    "dorsal": 11,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Javi Jimenez",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 30,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011
  },
  {
    "nombre": "Javi Guerra",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Javier Baraja",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2002,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Nauzet",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Omar Ramos",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Juan Neira",
    "nacionalidad": "Argentina",
    "posicion": "MP",
    "dorsal": 7,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Lluis Sastre",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Juanito",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Henrique Sereno",
    "nacionalidad": "Portugal",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013
  },
  {
    "nombre": "Marquitos",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 3,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Abdul Razak",
    "nacionalidad": "Ghana",
    "posicion": "MCD",
    "dorsal": 2,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012
  },
  {
    "nombre": "Rukavina",
    "nacionalidad": "Serbia",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Jaime Jimenez",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Diego Mariño",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Fausto Rossi",
    "nacionalidad": "Italia",
    "posicion": "MCD",
    "dorsal": 5,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Zakarya Bergdich",
    "nacionalidad": "Marruecos",
    "posicion": "EI",
    "dorsal": 21,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Stefan Mitrovic",
    "nacionalidad": "Serbia",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Humberto Osorio",
    "nacionalidad": "Colombia",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Jeffren",
    "nacionalidad": "Venezuela",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Gilberto Alcatraz",
    "nacionalidad": "Colombia",
    "posicion": "LD",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Heinz Bartmettler",
    "nacionalidad": "Republica Dominicana",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014
  },
  {
    "nombre": "Javi Varas",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Javi Chica",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "André Leao",
    "nacionalidad": "Portugal",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Johan Mojica",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016
  },
  {
    "nombre": "David Timor",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Oscar Diaz",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Samuel Llorca",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Chus Herrero",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Raul Fernandez",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Jonathan Pereira",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 24,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Roger Martí",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Hernan Perez",
    "nacionalidad": "Paraguay",
    "posicion": "ED",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Tulio de Melo",
    "nacionalidad": "Brasil",
    "posicion": "DC",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Alejandro Alfaro",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Brian Olivan",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 33,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015
  },
  {
    "nombre": "Julio Iricibar",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 26,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Kepa Arrizabalaga",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Javi Moyano",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Mario Hermoso",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 36,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Juanpe",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 14,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Marcelo Silva",
    "nacionalidad": "Uruguay",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Juan Villar",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Rodri Ríos",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Pedro Tiba",
    "nacionalidad": "Portugal",
    "posicion": "MP",
    "dorsal": 25,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Manu del Moral",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 20,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Bruno Varela",
    "nacionalidad": "Portugal",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Guzman Casaseca",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Borja Fernandez",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2007,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Vicenzo Renella",
    "nacionalidad": "Italia",
    "posicion": "DC",
    "dorsal": 24,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Nikos Karabelas",
    "nacionalidad": "Grecia",
    "posicion": "LI",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Diego Rubio",
    "nacionalidad": "Chile",
    "posicion": "DC",
    "dorsal": 19,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Angel García",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Jose Arnaiz",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018
  },
  {
    "nombre": "André Ferreira",
    "nacionalidad": "Portugal",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Erick Moreno",
    "nacionalidad": "Colombia",
    "posicion": "DC",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016
  },
  {
    "nombre": "Isaac Becerra",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Luciano Balbi",
    "nacionalidad": "Argentina",
    "posicion": "LI",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Alex Perez",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Alberto Guitian",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Michel Herrero",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Joan Jordan",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 19,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Alex Lopez",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 4,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Pau Torres",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Raul De Tomás",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 47,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Jaime Mata",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Rafa López",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2005,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Igor Lichnovsky",
    "nacionalidad": "Chile",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Sergio Marcos",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Cristian Espinoza",
    "nacionalidad": "Argentina",
    "posicion": "EI",
    "dorsal": 18,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Dejan Drazic",
    "nacionalidad": "Serbia",
    "posicion": "ED",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Iban Salvador",
    "nacionalidad": "Guinea Ecuatorial",
    "posicion": "MP",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Markel Etxeberria",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 22,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017
  },
  {
    "nombre": "Luismi Sánchez",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021
  },
  {
    "nombre": "David Mayoral",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 42,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Jordi Masip",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 1,
    "temporadaPrim": 2018,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Antoñito Regal",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Kiko Olivas",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 4,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Deivid",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Pablo Hervías",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Oscar Plano",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Toni Villa",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Fernando Calero",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Nacho Martínez",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Giannis Gianniotas",
    "nacionalidad": "Grecia",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Javier Ontiveros",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Antonio Cotán",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Asier Villalibre",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Toni Martinez",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Borja Herrera",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Chris Ramos",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 12,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Lukas Rotpuller",
    "nacionalidad": "Austria",
    "posicion": "DFC",
    "dorsal": 20,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Sulayman Marreh",
    "nacionalidad": "Gambia",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Nooh Al Mousa",
    "nacionalidad": "Arabia Saudí",
    "posicion": "MCD",
    "dorsal": 25,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018
  },
  {
    "nombre": "Ruben Alcaraz",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Enes Ünal",
    "nacionalidad": "Turquia",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Sergi Guardiola",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 16,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Yoel Rodríguez",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Keko Gontan",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Daniele Verde",
    "nacionalidad": "Italia",
    "posicion": "EI",
    "dorsal": 11,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Duje Cop",
    "nacionalidad": "Croacia",
    "posicion": "DC",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Joaquin Fernandez",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Leo Suarez",
    "nacionalidad": "Argentina",
    "posicion": "ED",
    "dorsal": 32,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Waldo Rubio",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Moi Delgado",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Ivi López",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Miguel de la Fuente",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 29,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Stiven Plaza",
    "nacionalidad": "Ecuador",
    "posicion": "DC",
    "dorsal": 42,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019
  },
  {
    "nombre": "Mohammed Salisu",
    "nacionalidad": "Ghana",
    "posicion": "DFC",
    "dorsal": 27,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Sandro Ramírez",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Jose Antonio Caro",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Fede San Emeterio",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Raul Carnero",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Pedro Porro",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Luis Perez",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Fede Barba",
    "nacionalidad": "Italia",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "David Torres",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Hatem Ben Arfa",
    "nacionalidad": "Francia",
    "posicion": "MP",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Matheus Fernandes",
    "nacionalidad": "Brasil",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Andrey Lunin",
    "nacionalidad": "Ucrania",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Jorge de Frutos",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020
  },
  {
    "nombre": "Victor Meseguer",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 4,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Bruno González",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Fabian Orellana",
    "nacionalidad": "Chile",
    "posicion": "ED",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Roque Mesa",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Shon Weissman",
    "nacionalidad": "Israel",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Roberto Fernández",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Jawad El Yamiq",
    "nacionalidad": "Marruecos",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Javi Sanchez",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Saidy Janko",
    "nacionalidad": "Gambia",
    "posicion": "LD",
    "dorsal": 18,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Lucas Olaza",
    "nacionalidad": "Uruguay",
    "posicion": "LI",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Jota",
    "nacionalidad": "Portugal",
    "posicion": "EI",
    "dorsal": 40,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Kenan Kodro",
    "nacionalidad": "Bosnia-Herzegovina",
    "posicion": "DC",
    "dorsal": 3,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021
  },
  {
    "nombre": "Alvaro Aguado",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Gonzalo Plata",
    "nacionalidad": "Ecuador",
    "posicion": "ED",
    "dorsal": 11,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Sergio León",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Cristo Gonzalez",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 23,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Monchu",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Enzi Boyomo",
    "nacionalidad": "Camerún",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Jon Morcillo",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 20,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Diogo Queirós",
    "nacionalidad": "Portugal",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Josema",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Ivan Fresneda",
    "nacionalidad": "España",
    "posicion": "LD",
    "dorsal": 27,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Hugo Vallejo",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 27,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022
  },
  {
    "nombre": "Sekou Gassama",
    "nacionalidad": "Senegal",
    "posicion": "DC",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Sergio Asenjo",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2008,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Sergio Escudero",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Mamadou Sylla",
    "nacionalidad": "Senegal",
    "posicion": "DC",
    "dorsal": 7,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Cyle Larin",
    "nacionalidad": "Canadá",
    "posicion": "DC",
    "dorsal": 25,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Kike Perez",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Martin Hongla",
    "nacionalidad": "Camerún",
    "posicion": "MCD",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Ivan Sanchez",
    "nacionalidad": "España",
    "posicion": "ED",
    "dorsal": 10,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Raul Moro",
    "nacionalidad": "España",
    "posicion": "EI",
    "dorsal": 11,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Marcos André",
    "nacionalidad": "Brasil",
    "posicion": "DC",
    "dorsal": 9,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Zouhair Feddal",
    "nacionalidad": "Marruecos",
    "posicion": "DFC",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Cesar de la Hoz",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Juanjo Narvaez",
    "nacionalidad": "Colombia",
    "posicion": "EI",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023
  },
  {
    "nombre": "Mickael Malsa",
    "nacionalidad": "Francia",
    "posicion": "MCD",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Tunde Akinsola",
    "nacionalidad": "Nigeria",
    "posicion": "EI",
    "dorsal": 36,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Darwin Machis",
    "nacionalidad": "Venezuela",
    "posicion": "EI",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Amath Ndiaye",
    "nacionalidad": "Senegal",
    "posicion": "EI",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Stanko Juric",
    "nacionalidad": "Croacia",
    "posicion": "MCD",
    "dorsal": 20,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Selim Amallah",
    "nacionalidad": "Marruecos",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Lucas Rosa",
    "nacionalidad": "Brasil",
    "posicion": "LD",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "John Victor",
    "nacionalidad": "Brasil",
    "posicion": "PT",
    "dorsal": 25,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Anuar Tuhami",
    "nacionalidad": "Marruecos",
    "posicion": "MCD",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Kenedy",
    "nacionalidad": "Brasil",
    "posicion": "EI",
    "dorsal": 24,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Álvaro Aceves",
    "nacionalidad": "España",
    "posicion": "PT",
    "dorsal": 31,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Gustavo Henrique",
    "nacionalidad": "Brasil",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Lucas Oliveira",
    "nacionalidad": "Brasil",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Álvaro Negredo",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Isra Salazar",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 38,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Cédric",
    "nacionalidad": "Camerún",
    "posicion": "DC",
    "dorsal": 35,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Stipe Biuk",
    "nacionalidad": "Croacia",
    "posicion": "EI",
    "dorsal": 17,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "César Tárrega",
    "nacionalidad": "España",
    "posicion": "DFC",
    "dorsal": 34,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Joni Montiel",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Arnu",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 29,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Ivan Garriel",
    "nacionalidad": "España",
    "posicion": "LI",
    "dorsal": 29,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024
  },
  {
    "nombre": "Karl Hein",
    "nacionalidad": "Estonia",
    "posicion": "PT",
    "dorsal": 13,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Eray Comert",
    "nacionalidad": "Suiza",
    "posicion": "DFC",
    "dorsal": 15,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Mario Martin",
    "nacionalidad": "España",
    "posicion": "MCD",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Juanmi Latasa",
    "nacionalidad": "España",
    "posicion": "DC",
    "dorsal": 14,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Chuki",
    "nacionalidad": "España",
    "posicion": "MP",
    "dorsal": 28,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Antonio Candela",
    "nacionalidad": "Italia",
    "posicion": "LD",
    "dorsal": 22,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Adam Aznou",
    "nacionalidad": "Marruecos",
    "posicion": "LI",
    "dorsal": 39,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Tamas Nikitscher",
    "nacionalidad": "Hungria",
    "posicion": "MCD",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Juma Bah",
    "nacionalidad": "Sierra Leona",
    "posicion": "DFC",
    "dorsal": 35,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Cenk Ozkacar",
    "nacionalidad": "Turquia",
    "posicion": "DFC",
    "dorsal": 6,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Florian Grillitsch",
    "nacionalidad": "Austria",
    "posicion": "MCD",
    "dorsal": 8,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Joseph Aidoo",
    "nacionalidad": "Ghana",
    "posicion": "DFC",
    "dorsal": 16,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  },
  {
    "nombre": "Henrique Silva",
    "nacionalidad": "Brasil",
    "posicion": "LI",
    "dorsal": 17,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025
  }
];
