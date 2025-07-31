const jugadores = [
  {
    "nombre": "Claudio Bravo",
    "nacionalidad": "Chile",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Casto",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2008,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Dani Gimenez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Inaki Goitia",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Joel Robles",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Rui Silva",
    "nacionalidad": "Portugal",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Stephan Andersen",
    "nacionalidad": "Dinamarca",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Francis Guerrero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Francisco Molinero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Hector Bellerin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Isidoro",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Javi Chica",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Martin Montoya",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2016,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Rafa Navarro ",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Paulao",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Amro Tarek",
    "nacionalidad": "Egipto",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Alex Martinez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2012,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Diego Llorente",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Edgar Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Javi Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Juan Miranda ",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Mario Abrante",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Amaya",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Bruno Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Johnny Cardoso",
    "nacionalidad": "Estados Unidos",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Zouhair Feddal",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Paul Akouokou",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Foued Kadir",
    "nacionalidad": "Argelia",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Guido Rodriguez",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Chechu Dorado",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Javier Matilla",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Jordi Amat",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Marc Bartra",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Petros",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "German Pezzella",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Leo Baptistao",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 6,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Natan",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Felipe Gutierrez",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alfonso Pedraza",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Fabian Ruiz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Fran Varela",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Jordi Figueras",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Dusko Tosic",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Victor Ruiz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Charly Musonda Jr.",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Antony",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Angel Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 7,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Juanma",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Juanmi",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Pardo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Leon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Jonas Martin",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Nabil Fekir",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Vincenzo Rennella",
    "nacionalidad": "Italia",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Vitor Roque",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Takashi Inui",
    "nacionalidad": "Japon",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Perez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Chimy Avila",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Borja Iglesias",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Chuli",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Jonathan Pereira",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Ricky van Wolfswinkel",
    "nacionalidad": "Holanda",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Ryad Boudebouz",
    "nacionalidad": "Argelia",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Abde Ezzalzouli ",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ayoze Perez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Benat Etxebarria",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Dani Ceballos",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Jese",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Joan Verdu",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Nono",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Canales",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Luiz Henrique ",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Alejandro Pozuelo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Cristian Tello",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Juanfran Moreno",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Matias Nahuel ",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Juan Manuel Vargas",
    "nacionalidad": "Peru",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Cedric Bakambu",
    "nacionalidad": "RD Congo",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Momo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Leandro Damiao",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Sidnei",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Willian Jose",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Joel Campbell",
    "nacionalidad": "Costa Rica",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2013,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Didac Vila",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Cristiano Piccini ",
    "nacionalidad": "Italia",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Ricardo Rodriguez",
    "nacionalidad": "Suiza",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Guillermo Sara",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Adrian",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2013,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Adan",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2014,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Pau Lopez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Riza Durmisi",
    "nacionalidad": "Dinamarca",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "William Carvalho",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Salva Sevilla",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Xavi Torres",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Alex Moreno",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Didier Digard",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Ryan Donk",
    "nacionalidad": "Surinam",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Romain Perraud",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ustaritz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Cejudo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Juan Cruz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Loren Moron",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Braian Rodriguez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Roque Santa Cruz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Sergi Altimira",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Heiko Westermann",
    "nacionalidad": "Alemania",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Dani Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Joaquin",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2023,
    "temporadaSeg": 2001,
    "grupo": "B"
  },
  {
    "nombre": "Juankar",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Rodri Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Iriney",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Andres Guardado",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Alfred N'Diaye",
    "nacionalidad": "Senegal",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Guillermo Molins",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Markus Steinhofer",
    "nacionalidad": "Alemania",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Salvador Agra",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Fornals",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Roman Zozulya",
    "nacionalidad": "Ucrania",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Cucho Hernandez",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alex Alegria",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Barragan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Iker Losada",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Jorge Molina",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Luiz Felipe",
    "nacionalidad": "Italia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Sanabria",
    "nacionalidad": "Paraguay",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Sokratis Papastathopoulos",
    "nacionalidad": "Grecia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Giovani Lo Celso ",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Abner",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Jefferson Montero",
    "nacionalidad": "Ecuador",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Damien Perquis",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Diego Lainez",
    "nacionalidad": "Mexico",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Junior Firpo",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Nosa Igiebor",
    "nacionalidad": "Nigeria",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Lorenzo Reyes",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Vadillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Jose Alberto Canas",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Marc Roca ",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alin To?ca",
    "nacionalidad": "Rumania",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Wilfrid Kaptoum",
    "nacionalidad": "Camerun",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Emerson Royal",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Dorlan Pabon",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Francisco Portillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Isco",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Cedrick",
    "nacionalidad": "RD Congo",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Darko Brasanac",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Nelson",
    "nacionalidad": "Cabo Verde",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Victor Camarasa",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Casado",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Rafael van der Vaart",
    "nacionalidad": "Holanda",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Youssouf Sabaly",
    "nacionalidad": "Senegal",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Nacho",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Aitor Ruibal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Carles Alena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Castro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2011,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Dani Martin",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Fabricio",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Fran Vieites",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Hector Rodas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 25,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Manu Herrera",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Chadi Riad ",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 28,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Jesus Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 36,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Assane Diao",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 38,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  }
];
