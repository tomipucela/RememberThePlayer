const jugadores = [
  {
    "nombre": "Abdul Razak",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 2,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Adam Aznou",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 39,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Adrian Arnu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Alberto Bueno",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Alberto Guitian",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Alejandro Alfaro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Alex Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Alex Perez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Aceves",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Aguado",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Anton",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2003,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Negredo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Rubio",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2007,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Amath Ndiaye",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Andre Ferreira",
    "nacionalidad": "Portugal",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Andre Leao",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Andrey Lunin",
    "nacionalidad": "Ucrania",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Angel Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Candela",
    "nacionalidad": "Italia",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Antonio Cotan",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Antonito Regal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Anuar Tuhami",
    "nacionalidad": "Marruecos",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Aquino",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Asier Villalibre",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Barragan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Borja Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2007,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Borja Herrera",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Brian Olivan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 33,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Bruno Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Bruno Varela",
    "nacionalidad": "Portugal",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Calle",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Pena",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Cedric",
    "nacionalidad": "Camerun",
    "posicion": "Atacante",
    "dorsal": 35,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Cenk Ozkacar",
    "nacionalidad": "Turquia",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Cesar Arzo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Cesar de la Hoz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Cesar Tarrega",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 34,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Chris Ramos",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Chuki",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Chus Herrero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Espinoza",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Cristo Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Cyle Larin",
    "nacionalidad": "Canada",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Dani Hernandez",
    "nacionalidad": "Venezuela",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Daniel Larsson",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Daniele Verde",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Darwin Machis",
    "nacionalidad": "Venezuela",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "David Mayoral",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 42,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "David Timor",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "David Torres",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Deivid",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Dejan Drazic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Diego Marino",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Diego Rubio",
    "nacionalidad": "Chile",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Diogo Queiros",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Duje Cop",
    "nacionalidad": "Croacia",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Enes Unal",
    "nacionalidad": "Turquia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Enzi Boyomo",
    "nacionalidad": "Camerun",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Eray Comert",
    "nacionalidad": "Suiza",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Erick Moreno",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Fabian Orellana",
    "nacionalidad": "Chile",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Fabio Faria",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Fausto Rossi",
    "nacionalidad": "Italia",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Fede Barba",
    "nacionalidad": "Italia",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Fede San Emeterio",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Calero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Florian Grillitsch",
    "nacionalidad": "Austria",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Giannis Gianniotas",
    "nacionalidad": "Grecia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Gilberto Alcatraz",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Gonzalo Plata",
    "nacionalidad": "Ecuador",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Guilherme",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Guilherme Fernandes",
    "nacionalidad": "Portugal",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Guille Bueno",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Gustavo Henrique",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Guzman Casaseca",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Hatem Ben Arfa",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Heinz Bartmettler",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Henrique Sereno",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Henrique Silva",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Hernan Perez",
    "nacionalidad": "Paraguay",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Hugo Vallejo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 27,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Humberto Osorio",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Iban Salvador",
    "nacionalidad": "Guinea Ecuatorial",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Ibrahim Alani",
    "nacionalidad": "Nigeria",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Igor Lichnovsky",
    "nacionalidad": "Chile",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Isaac Becerra",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Isra Salazar",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 38,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Alejo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Fresneda",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 27,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Garriel",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 29,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Garriel",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 27,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ivi Lopez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Jacobo Sanz",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2006,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Jaime Jimenez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Jaime Mata",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Javi Chica",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Javi Guerra",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Javi Jimenez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 30,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Javi Moyano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Javi Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Javi Varas",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Javier Baraja",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2002,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Javier Ontiveros",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Jawad El Yamiq",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Jeffren",
    "nacionalidad": "Venezuela",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Jesus Rueda",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2009,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Joan Jordan",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Joaquin Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Jofre",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Johan Mojica",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "John Victor",
    "nacionalidad": "Brasil",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Jon Morcillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jonathan Pereira",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Joni Montiel",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jordi Figueras",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Masip",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2018,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Alonso",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Jorge de Frutos",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Delgado",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jose Antonio Caro",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Jose Arnaiz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Josema",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Joseph Aidoo",
    "nacionalidad": "Ghana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jota",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 40,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Juan Neira",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Juan Villar",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Juanito",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Juanjo Narvaez",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Juanmi Latasa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Juanpe",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Julien Ponceau",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Julio Iricibar",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 26,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Juma Bah",
    "nacionalidad": "Sierra Leona",
    "posicion": "Defensa",
    "dorsal": 35,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Justo Villar",
    "nacionalidad": "Paraguay",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Karl Hein",
    "nacionalidad": "Estonia",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Keita",
    "nacionalidad": "Guinea",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Keko Gontan",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Kenan Kodro",
    "nacionalidad": "Bosnia-Herzegovina",
    "posicion": "Atacante",
    "dorsal": 3,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Kenedy",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Kepa Arrizabalaga",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Kike Perez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Kiko Olivas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Koke",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 32,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Leo Suarez",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 32,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Lluis Sastre",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Lolo Pla",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 27,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Olaza",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Oliveira",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Rosa",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Luciano Balbi",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Luis Perez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Luismi Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Lukas Rotpuller",
    "nacionalidad": "Austria",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Mamadou Sylla",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Manu del Moral",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Manucho",
    "nacionalidad": "Angola",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Marc Valiente",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Marcelo Silva",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Marcos Andre",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Mario Hermoso",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 36,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Mario Maroto",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Mario Martin",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Markel Etxeberria",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Marquitos",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 3,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Martin Hongla",
    "nacionalidad": "Camerun",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Matabuena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Matheus Fernandes",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Mathis Lachuer",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Michel Herrero",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Mickael Malsa",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Miguel de la Fuente",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Balenziaga",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Mohamed Jaouab",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Mohammed Salisu",
    "nacionalidad": "Ghana",
    "posicion": "Defensa",
    "dorsal": 27,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Moi Delgado",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Monchu",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Nacho Martinez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Nafti",
    "nacionalidad": "Tunez",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Nauzet",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Nikos Karabelas",
    "nacionalidad": "Grecia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Nooh Al Mousa",
    "nacionalidad": "Arabia Saudi",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Omar Ramos",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Diaz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Oscar Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2002,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Plano",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Hervias",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Tomeo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Patrick Ebert",
    "nacionalidad": "Alemania",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Pau Torres",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Pedro Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2006,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Pedro Porro",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Pedro Tiba",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Peter Federico",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Quique",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 27,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Rafa Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2005,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Raul Carnero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Raul De Tomas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 47,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Raul Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Raul Moro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Raul Navas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 26,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Roberto Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Rodri Rios",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Roger Marti",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Roque Mesa",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Alcaraz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Pena",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 28,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Rukavina",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Saidy Janko",
    "nacionalidad": "Gambia",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Samuel Llorca",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Sana",
    "nacionalidad": "Guinea-Bisau",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Sandro Ramirez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Sekou Gassama",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Selim Amallah",
    "nacionalidad": "Marruecos",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Sergi Canos",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Sergi Guardiola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Asenjo",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2008,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Escudero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Leon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Marcos",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Shon Weissman",
    "nacionalidad": "Israel",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Sisi",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Stanko Juric",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Stefan Mitrovic",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Stipe Biuk",
    "nacionalidad": "Croacia",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Stiven Plaza",
    "nacionalidad": "Ecuador",
    "posicion": "Atacante",
    "dorsal": 42,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Sulayman Marreh",
    "nacionalidad": "Gambia",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Tamas Nikitscher",
    "nacionalidad": "Hungria",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Tekio",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 29,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Toni Martinez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Toni Villa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Trilli",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Tulio de Melo",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Tunde Akinsola",
    "nacionalidad": "Nigeria",
    "posicion": "Atacante",
    "dorsal": 36,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Valdet Rama",
    "nacionalidad": "Albania",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Varela",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Vicenzo Renella",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Victor Meseguer",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Victor Perez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Waldo Rubio",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Xavi Moreno",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 28,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Yoel Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Zakarya Bergdich",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Zouhair Feddal",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  }
];
