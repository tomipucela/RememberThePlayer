const jugadores = [
  {
    "nombre": "Aaron Wan-Bissaka",
    "nacionalidad": "RD del Congo",
    "posicion": "Lateral derecho",
    "dorsal": 29,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Adnan Januzaj",
    "nacionalidad": "Belgica",
    "posicion": "Extremo derecho",
    "dorsal": 15,
    "temporadaPrim": 2013,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alejandro Garnacho",
    "nacionalidad": "Argentina",
    "posicion": "Extremo izquierdo",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alex Telles",
    "nacionalidad": "Brasil",
    "posicion": "Lateral izquierdo",
    "dorsal": 27,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Alexander Buttner",
    "nacionalidad": "Paises Bajos",
    "posicion": "Lateral izquierdo",
    "dorsal": 28,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Alexis Sanchez",
    "nacionalidad": "Chile",
    "posicion": "Delantero centro",
    "dorsal": 7,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Altay Bayindir",
    "nacionalidad": "Turquia",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Amad Diallo",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Extremo derecho",
    "dorsal": 16,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ander Herrera",
    "nacionalidad": "Espana",
    "posicion": "Mediocentro",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Anders Lindegaard",
    "nacionalidad": "Dinamarca",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Anderson",
    "nacionalidad": "Brasil",
    "posicion": "Mediocentro",
    "dorsal": 8,
    "temporadaPrim": 2008,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Andre Onana",
    "nacionalidad": "Camerun",
    "posicion": "Portero",
    "dorsal": 24,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Andreas Pereira",
    "nacionalidad": "Brasil",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 15,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Angel Di Maria",
    "nacionalidad": "Argentina",
    "posicion": "Extremo derecho",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Anthony Elanga",
    "nacionalidad": "Suecia",
    "posicion": "Extremo derecho",
    "dorsal": 36,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Anthony Martial",
    "nacionalidad": "Francia",
    "posicion": "Delantero centro",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Valencia",
    "nacionalidad": "Ecuador",
    "posicion": "Lateral derecho",
    "dorsal": 25,
    "temporadaPrim": 2010,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Antony",
    "nacionalidad": "Brasil",
    "posicion": "Extremo derecho",
    "dorsal": 21,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Ashley Young",
    "nacionalidad": "Inglaterra",
    "posicion": "Lateral derecho",
    "dorsal": 18,
    "temporadaPrim": 2012,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Axel Tuanzebe",
    "nacionalidad": "RD del Congo",
    "posicion": "Lateral derecho",
    "dorsal": 38,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Bastian Schweinsteiger",
    "nacionalidad": "Alemania",
    "posicion": "Mediocentro",
    "dorsal": 31,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Benjamin Sesko",
    "nacionalidad": "Eslovenia",
    "posicion": "Delantero centro",
    "dorsal": 30,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Brandon Williams",
    "nacionalidad": "Inglaterra",
    "posicion": "Lateral izquierdo",
    "dorsal": 33,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Bruno Fernandes",
    "nacionalidad": "Portugal",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Bryan Mbeumo",
    "nacionalidad": "Camerun",
    "posicion": "Extremo derecho",
    "dorsal": 19,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Cameron Borthwick-Jackson",
    "nacionalidad": "Inglaterra",
    "posicion": "Lateral izquierdo",
    "dorsal": 43,
    "temporadaPrim": 2016,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Casemiro",
    "nacionalidad": "Brasil",
    "posicion": "Pivote",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Chicharito",
    "nacionalidad": "Mexico",
    "posicion": "Delantero centro",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Chris Smalling",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa central",
    "dorsal": 12,
    "temporadaPrim": 2011,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Christian Eriksen",
    "nacionalidad": "Dinamarca",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Corry Evans",
    "nacionalidad": "Irlanda del Norte",
    "posicion": "Mediocentro",
    "dorsal": 31,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Cristiano Ronaldo",
    "nacionalidad": "Portugal",
    "posicion": "Delantero centro",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Daley Blind",
    "nacionalidad": "Paises Bajos",
    "posicion": "Defensa central",
    "dorsal": 17,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Daniel James",
    "nacionalidad": "Gales",
    "posicion": "Extremo derecho",
    "dorsal": 21,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Danny Welbeck",
    "nacionalidad": "Inglaterra",
    "posicion": "Delantero centro",
    "dorsal": 19,
    "temporadaPrim": 2009,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Darren Fletcher",
    "nacionalidad": "Escocia",
    "posicion": "Mediocentro",
    "dorsal": 24,
    "temporadaPrim": 2003,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Darron Gibson",
    "nacionalidad": "Irlanda",
    "posicion": "Mediocentro",
    "dorsal": 28,
    "temporadaPrim": 2008,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "David de Gea",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2012,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Dean Henderson",
    "nacionalidad": "Inglaterra",
    "posicion": "Portero",
    "dorsal": 26,
    "temporadaPrim": 2016,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Dimitar Berbatov",
    "nacionalidad": "Bulgaria",
    "posicion": "Delantero centro",
    "dorsal": 9,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Diogo Dalot",
    "nacionalidad": "Portugal",
    "posicion": "Lateral derecho",
    "dorsal": 2,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Donny van de Beek",
    "nacionalidad": "Paises Bajos",
    "posicion": "Mediocentro",
    "dorsal": 34,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Edinson Cavani",
    "nacionalidad": "Uruguay",
    "posicion": "Delantero centro",
    "dorsal": 21,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Edwin van der Sar",
    "nacionalidad": "Paises Bajos",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Eric Bailly",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Defensa central",
    "dorsal": 3,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Fabio",
    "nacionalidad": "Brasil",
    "posicion": "Lateral derecho",
    "dorsal": 20,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Facundo Pellistri",
    "nacionalidad": "Uruguay",
    "posicion": "Extremo derecho",
    "dorsal": 28,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Federico Macheda",
    "nacionalidad": "Italia",
    "posicion": "Delantero centro",
    "dorsal": 27,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Fred",
    "nacionalidad": "Brasil",
    "posicion": "Mediocentro",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Gabriel Obertan",
    "nacionalidad": "Francia",
    "posicion": "Extremo derecho",
    "dorsal": 26,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Gary Neville",
    "nacionalidad": "Inglaterra",
    "posicion": "Lateral derecho",
    "dorsal": 2,
    "temporadaPrim": 1995,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Hannibal",
    "nacionalidad": "Tunez",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 46,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Harry Maguire",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa central",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Henrikh Mkhitaryan",
    "nacionalidad": "Armenia",
    "posicion": "Mediocentro",
    "dorsal": 22,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Jack Butland",
    "nacionalidad": "Inglaterra",
    "posicion": "Portero",
    "dorsal": 31,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Jadon Sancho",
    "nacionalidad": "Inglaterra",
    "posicion": "Extremo izquierdo",
    "dorsal": 25,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "James Wilson",
    "nacionalidad": "Inglaterra",
    "posicion": "Delantero centro",
    "dorsal": 29,
    "temporadaPrim": 2014,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Jesse Lingard",
    "nacionalidad": "Inglaterra",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 14,
    "temporadaPrim": 2012,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Ji-sung Park",
    "nacionalidad": "Corea del Sur",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 13,
    "temporadaPrim": 2006,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "John O'Shea",
    "nacionalidad": "Irlanda",
    "posicion": "Defensa central",
    "dorsal": 22,
    "temporadaPrim": 2001,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Jonny Evans",
    "nacionalidad": "Irlanda del Norte",
    "posicion": "Defensa central",
    "dorsal": 35,
    "temporadaPrim": 2008,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Joshua Zirkzee",
    "nacionalidad": "Paises Bajos",
    "posicion": "Delantero centro",
    "dorsal": 11,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Juan Mata",
    "nacionalidad": "Espana",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 8,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Kobbie Mainoo",
    "nacionalidad": "Inglaterra",
    "posicion": "Mediocentro",
    "dorsal": 37,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Lee Grant",
    "nacionalidad": "Inglaterra",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Leny Yoro",
    "nacionalidad": "Francia",
    "posicion": "Defensa central",
    "dorsal": 15,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Lisandro Martinez",
    "nacionalidad": "Argentina",
    "posicion": "Defensa central",
    "dorsal": 6,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Luke Shaw",
    "nacionalidad": "Inglaterra",
    "posicion": "Lateral izquierdo",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Manuel Ugarte",
    "nacionalidad": "Uruguay",
    "posicion": "Pivote",
    "dorsal": 25,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Marcel Sabitzer",
    "nacionalidad": "Austria",
    "posicion": "Mediocentro",
    "dorsal": 15,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Marcos Rojo",
    "nacionalidad": "Argentina",
    "posicion": "Defensa central",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Marcus Rashford",
    "nacionalidad": "Inglaterra",
    "posicion": "Extremo izquierdo",
    "dorsal": 10,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Marouane Fellaini",
    "nacionalidad": "Belgica",
    "posicion": "Mediocentro",
    "dorsal": 27,
    "temporadaPrim": 2014,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Mason Greenwood",
    "nacionalidad": "Inglaterra",
    "posicion": "Extremo derecho",
    "dorsal": 11,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Mason Mount",
    "nacionalidad": "Inglaterra",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 7,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Matheus Cunha",
    "nacionalidad": "Brasil",
    "posicion": "Mediapunta",
    "dorsal": 10,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Matteo Darmian",
    "nacionalidad": "Italia",
    "posicion": "Lateral derecho",
    "dorsal": 36,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Matthijs de Ligt",
    "nacionalidad": "Paises Bajos",
    "posicion": "Defensa central",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Memphis Depay",
    "nacionalidad": "Paises Bajos",
    "posicion": "Delantero centro",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Michael Carrick",
    "nacionalidad": "Inglaterra",
    "posicion": "Pivote",
    "dorsal": 16,
    "temporadaPrim": 2007,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Michael Owen",
    "nacionalidad": "Inglaterra",
    "posicion": "Delantero centro",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Morgan Schneiderlin",
    "nacionalidad": "Francia",
    "posicion": "Pivote",
    "dorsal": 28,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Nani",
    "nacionalidad": "Portugal",
    "posicion": "Extremo izquierdo",
    "dorsal": 17,
    "temporadaPrim": 2008,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Nathan Bishop",
    "nacionalidad": "Inglaterra",
    "posicion": "Portero",
    "dorsal": 30,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Nemanja Matic",
    "nacionalidad": "Serbia",
    "posicion": "Pivote",
    "dorsal": 31,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Nemanja Vidic?",
    "nacionalidad": "Serbia",
    "posicion": "Defensa central",
    "dorsal": 15,
    "temporadaPrim": 2006,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Nick Powell",
    "nacionalidad": "Inglaterra",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 22,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Noussair Mazraoui",
    "nacionalidad": "Marruecos",
    "posicion": "Lateral derecho",
    "dorsal": 3,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Odion Ighalo",
    "nacionalidad": "Nigeria",
    "posicion": "Delantero centro",
    "dorsal": 25,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Patrice Evra",
    "nacionalidad": "Francia",
    "posicion": "Lateral izquierdo",
    "dorsal": 3,
    "temporadaPrim": 2006,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Patrick Dorgu",
    "nacionalidad": "Dinamarca",
    "posicion": "Lateral izquierdo",
    "dorsal": 13,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Paul Pogba",
    "nacionalidad": "Francia",
    "posicion": "Mediocentro",
    "dorsal": 6,
    "temporadaPrim": 2012,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Paul Scholes",
    "nacionalidad": "Inglaterra",
    "posicion": "Mediocentro",
    "dorsal": 22,
    "temporadaPrim": 1995,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Phil Jones",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa central",
    "dorsal": 4,
    "temporadaPrim": 2012,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Radamel Falcao",
    "nacionalidad": "Colombia",
    "posicion": "Delantero centro",
    "dorsal": 9,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Rafael",
    "nacionalidad": "Brasil",
    "posicion": "Lateral derecho",
    "dorsal": 2,
    "temporadaPrim": 2009,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Raphael Varane",
    "nacionalidad": "Francia",
    "posicion": "Defensa central",
    "dorsal": 19,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Rasmus Hojlund",
    "nacionalidad": "Dinamarca",
    "posicion": "Delantero centro",
    "dorsal": 9,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Rio Ferdinand",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa central",
    "dorsal": 5,
    "temporadaPrim": 2003,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Robin van Persie",
    "nacionalidad": "Paises Bajos",
    "posicion": "Delantero centro",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Romelu Lukaku",
    "nacionalidad": "Belgica",
    "posicion": "Delantero centro",
    "dorsal": 9,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Ryan Giggs",
    "nacionalidad": "Gales",
    "posicion": "Interior izquierdo",
    "dorsal": 11,
    "temporadaPrim": 1991,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Sam Johnstone",
    "nacionalidad": "Inglaterra",
    "posicion": "Portero",
    "dorsal": 34,
    "temporadaPrim": 2013,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Scott McTominay",
    "nacionalidad": "Escocia",
    "posicion": "Mediocentro",
    "dorsal": 39,
    "temporadaPrim": 2017,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Senne Lammens",
    "nacionalidad": "Belgica",
    "posicion": "Portero",
    "dorsal": 31,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Reguilon",
    "nacionalidad": "Espana",
    "posicion": "Lateral izquierdo",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Romero",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Shinji Kagawa",
    "nacionalidad": "Japon",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 26,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Sofyan Amrabat",
    "nacionalidad": "Marruecos",
    "posicion": "Pivote",
    "dorsal": 4,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Tahith Chong",
    "nacionalidad": "Curazao",
    "posicion": "Mediocentro ofensivo",
    "dorsal": 44,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Teden Mengi",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa central",
    "dorsal": 43,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Timothy Fosu-Mensah",
    "nacionalidad": "Paises Bajos",
    "posicion": "Lateral derecho",
    "dorsal": 24,
    "temporadaPrim": 2016,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Tom Cleverley",
    "nacionalidad": "Inglaterra",
    "posicion": "Mediocentro",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Tom Heaton",
    "nacionalidad": "Inglaterra",
    "posicion": "Portero",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Tomasz Kuszczak",
    "nacionalidad": "Polonia",
    "posicion": "Portero",
    "dorsal": 29,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Tyrell Malacia",
    "nacionalidad": "Paises Bajos",
    "posicion": "Lateral izquierdo",
    "dorsal": 12,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Victor Lindelof",
    "nacionalidad": "Suecia",
    "posicion": "Defensa central",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Victor Valdes",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 32,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Wayne Rooney",
    "nacionalidad": "Inglaterra",
    "posicion": "Delantero centro",
    "dorsal": 10,
    "temporadaPrim": 2005,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Wes Brown",
    "nacionalidad": "Inglaterra",
    "posicion": "Defensa central",
    "dorsal": 6,
    "temporadaPrim": 1998,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Wilfried Zaha",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Extremo izquierdo",
    "dorsal": 29,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Will Keane",
    "nacionalidad": "Irlanda",
    "posicion": "Delantero centro",
    "dorsal": 48,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Willy Kambwala",
    "nacionalidad": "Francia",
    "posicion": "Defensa central",
    "dorsal": 53,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Wout Weghorst",
    "nacionalidad": "Paises Bajos",
    "posicion": "Delantero centro",
    "dorsal": 27,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Zlatan Ibrahimovic",
    "nacionalidad": "Suecia",
    "posicion": "Delantero centro",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  }
];
