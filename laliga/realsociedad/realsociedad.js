const jugadores = [
  {
    "nombre": "Adnan Januzaj",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Aihen Munoz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Alberto de la Bella",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2010,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Alejandro Sanz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Alex Remiro",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alex Sola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 2,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Alexander Isak",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Alexander Sorloth",
    "nacionalidad": "Noruega",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Alfred Finnbogason",
    "nacionalidad": "Islandia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Odriozola",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ander Bardaji",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Ander Barrenetxea",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ander Guevara",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Andoni Gorosabel",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Andoni Zubiaurre",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Andre Silva",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Antoine Griezmann",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Aritz Elustondo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2015,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Arkaitz Mariezkurrena",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 40,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Arsen Zakharyan",
    "nacionalidad": "Rusia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Asier Illarramendi",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2010,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Benat Turrientes",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Borja Viguera",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Brais Mendez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Bruma",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Martinez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2008,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Vela",
    "nacionalidad": "Mexico",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2012,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Chory Castro",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Claudio Bravo",
    "nacionalidad": "Chile",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2007,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Cote",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Dani Estrada",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2007,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "David Concha",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "David Silva",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "David Zurutuza",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2010,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Diego Ifran",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Diego Llorente",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Diego Reyes",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Diego Rico",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Diego Rivas",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Enaut Zubikarai",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2009,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Esteban Granero",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Geronimo Rulli",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Gorka Elustondo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2007,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Hamari Traore",
    "nacionalidad": "Mali",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Haris Seferovic",
    "nacionalidad": "Suiza",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Hector Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Hector Moreno",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Igor Zubeldia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Imanol Agirretxe",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2005,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Inigo Martinez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2012,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Ion Ansotegi",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2006,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Javi Galan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 25,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Javi Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Javi Ros",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Jeffrey Sarpong",
    "nacionalidad": "Paises Bajos",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Jon Ander Olasagasti",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Jon Aramburu",
    "nacionalidad": "Venezuela",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jon Bautista",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2016,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jon Gaztanaga",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Jon Guridi",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jon Martin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 31,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jon Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Jonathas",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Joseba Llorente",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2000,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Joseba Zaldua",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Juanmi",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Kevin Rodrigues",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Kieran Tierney",
    "nacionalidad": "Escocia",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Liassine Cadamuro",
    "nacionalidad": "Argelia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Luca Sangalli",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Luka Sucic",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Markel Bergara",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2008,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Martin Merquelanz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Martin Odegaard",
    "nacionalidad": "Noruega",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Martin Zubimendi",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Mathew Ryan",
    "nacionalidad": "Australia",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "McDonald Mariga",
    "nacionalidad": "Kenia",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Angel Moya",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Mikel Aranburu",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 1997,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2006,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Mikel Labaka",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2005,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Merino",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Mikel Oyarzabal",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Modibo Sagnan",
    "nacionalidad": "Mali",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Mohamed-Ali Cho",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Nacho Monreal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Nayef Aguerd",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Oier Olazabal",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Orri Oskarsson",
    "nacionalidad": "Islandia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Hervias",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Marin",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Paco Sutil",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Portu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Rafinha",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Raul Navas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Raul Tamudo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Robert Navarro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Robin Le Normand",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Pardo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2012,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Sandro Ramirez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Canales",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2014,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Gomez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Sheraldo Becker",
    "nacionalidad": "Surinam",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Takefusa Kubo",
    "nacionalidad": "Japon",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Theo Hernandez",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Tono",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2011,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Umar Sadiq",
    "nacionalidad": "Nigeria",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Unai Marrero",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Urko Gonzalez de Zarate",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Vadim Demidov",
    "nacionalidad": "Noruega",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Willian Jose",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Xabi Prieto",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2004,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Yuri Berchiche",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  }
];
