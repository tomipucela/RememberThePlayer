const jugadores = [
  {
    "nombre": "Adam Bogdan",
    "nacionalidad": "Hungria",
    "posicion": "Portero",
    "dorsal": 34,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Adam Lallana",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Adrian",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Alberto Moreno",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Alex Oxlade-Chamberlain",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Alexander Isak",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Alexis Mac Allister",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Alisson",
    "nacionalidad": "Brasil",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Aly Cissokho",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Andre Wisdom",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 47,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Andrew Robertson",
    "nacionalidad": "Escocia",
    "posicion": "Defensa",
    "dorsal": 26,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Andy Carroll",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Arthur Melo",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 29,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Brad Jones",
    "nacionalidad": "Australia",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Charlie Adam",
    "nacionalidad": "Escocia",
    "posicion": "Centrocampista",
    "dorsal": 26,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Christian Benteke",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Christian Poulsen",
    "nacionalidad": "Dinamarca",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Cody Gakpo",
    "nacionalidad": "Paises Bajos",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Conor Bradley",
    "nacionalidad": "Irlanda del Norte",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Craig Bellamy",
    "nacionalidad": "Gales",
    "posicion": "Atacante",
    "dorsal": 39,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Curtis Jones",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Daniel Agger",
    "nacionalidad": "Dinamarca",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2008,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Daniel Sturridge",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2013,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Danny Ings",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 28,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Darwin Nunez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "David N'Gog",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Dejan Lovren",
    "nacionalidad": "Croacia",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Diogo Jota",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Dirk Kuyt",
    "nacionalidad": "Paises Bajos",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Divock Origi",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 27,
    "temporadaPrim": 2016,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Dominic Solanke",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Dominik Szoboszlai",
    "nacionalidad": "Hungria",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Doni",
    "nacionalidad": "Brasil",
    "posicion": "Portero",
    "dorsal": 32,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Emre Can",
    "nacionalidad": "Alemania",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Fabinho",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Fabio Aurelio",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Fabio Borini",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Fabio Carvalho",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Federico Chiesa",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Torres",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Florian Wirtz",
    "nacionalidad": "Alemania",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Georginio Wijnaldum",
    "nacionalidad": "Paises Bajos",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Giorgi Mamardashvili",
    "nacionalidad": "Georgia",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Glen Johnson",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2010,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Harvey Elliott",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Hugo Ekitike",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Iago Aspas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Ibrahima Konate",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "James Milner",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Jamie Carragher",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 1997,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Javier Manquillo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Jay Spearing",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Jeremie Frimpong",
    "nacionalidad": "Paises Bajos",
    "posicion": "Defensa",
    "dorsal": 30,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Joe Allen",
    "nacionalidad": "Gales",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Joe Cole",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Joe Gomez",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2016,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Joel Matip",
    "nacionalidad": "Camerun",
    "posicion": "Defensa",
    "dorsal": 32,
    "temporadaPrim": 2017,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jon Flanagan",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 38,
    "temporadaPrim": 2011,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Jonjo Shelvey",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 33,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Jordan Henderson",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2012,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Jordon Ibe",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 33,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Jose Enrique",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Kevin Stewart",
    "nacionalidad": "Jamaica",
    "posicion": "Centrocampista",
    "dorsal": 35,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Kolo Toure",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Konstantinos Tsimikas",
    "nacionalidad": "Grecia",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Loris Karius",
    "nacionalidad": "Alemania",
    "posicion": "Portero",
    "dorsal": 22,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Leiva",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2008,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Luis Alberto",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Luis Diaz",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Luis Suarez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Mamadou Sakho",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Mario Balotelli",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 45,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Martin Kelly",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 34,
    "temporadaPrim": 2009,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Martin Skrtel",
    "nacionalidad": "Eslovaquia",
    "posicion": "Defensa",
    "dorsal": 37,
    "temporadaPrim": 2008,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Maxi Rodriguez",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Milan Jovanovic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Milos Kerkez",
    "nacionalidad": "Hungria",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Mohamed Salah",
    "nacionalidad": "Egipto",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Naby Keita",
    "nacionalidad": "Guinea",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Nat Phillips",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 47,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Nathaniel Clyne",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2016,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Neco Williams",
    "nacionalidad": "Gales",
    "posicion": "Defensa",
    "dorsal": 76,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Nuri Sahin",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Ozan Kabak",
    "nacionalidad": "Turquia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Paul Konchesky",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Pepe Reina",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2006,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Philippe Coutinho",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2013,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Ragnar Klavan",
    "nacionalidad": "Estonia",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Raheem Sterling",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 31,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Raul Meireles",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Rickie Lambert",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Rio Ngumoha",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 73,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Roberto Firmino",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Ryan Babel",
    "nacionalidad": "Paises Bajos",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Ryan Gravenberch",
    "nacionalidad": "Paises Bajos",
    "posicion": "Centrocampista",
    "dorsal": 38,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Sadio Mane",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Sebastian Coates",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Sheyi Ojo",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 54,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Simon Mignolet",
    "nacionalidad": "Belgica",
    "posicion": "Portero",
    "dorsal": 22,
    "temporadaPrim": 2014,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Sotiris Kyrgiakos",
    "nacionalidad": "Grecia",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Stefan Bajcetic",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 43,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Steven Gerrard",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 1999,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Stewart Downing",
    "nacionalidad": "Inglaterra",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Suso",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 30,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Takumi Minamino",
    "nacionalidad": "Japon",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Thiago Alcantara",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Trent Alexander-Arnold",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa",
    "dorsal": 66,
    "temporadaPrim": 2017,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Victor Moses",
    "nacionalidad": "Nigeria",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Virgil van Dijk",
    "nacionalidad": "Paises Bajos",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Wataru Endo",
    "nacionalidad": "Japon",
    "posicion": "Centrocampista",
    "dorsal": 3,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Xherdan Shaqiri",
    "nacionalidad": "Suiza",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "A"
  }
];
