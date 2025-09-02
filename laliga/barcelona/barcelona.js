const jugadores = [
  {
    "nombre": "Victor Valdes",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2003,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Marc-Andre Ter Stegen",
    "nacionalidad": "Alemania",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Nelson Semedo",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Rafa Marquez",
    "nacionalidad": "Mexico",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2004,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Cesc Fabregas",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Carles Puyol",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2000,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Sergino Dest",
    "nacionalidad": "Estados Unidos",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Xavi Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 1999,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Samuel Eto'o",
    "nacionalidad": "Camerun",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2005,
    "temporadaSeg": 2009,
    "grupo": "A"
  },
  {
    "nombre": "David Villa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Bojan Krkic",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 9,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Rakitic",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Thierry Henry",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Alexis Sanchez",
    "nacionalidad": "Chile",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Hector Bellerin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Gudjohnsen",
    "nacionalidad": "Islandia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2007,
    "temporadaSeg": 2009,
    "grupo": "B"
  },
  {
    "nombre": "Yaya Toure",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Gabriel Milito",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Aliaksandr Hleb",
    "nacionalidad": "Bielorrusia",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2009,
    "temporadaSeg": 2009,
    "grupo": "A"
  },
  {
    "nombre": "Sylvinho",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2005,
    "temporadaSeg": 2009,
    "grupo": "B"
  },
  {
    "nombre": "Martin Caceres",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2009,
    "temporadaSeg": 2009,
    "grupo": "A"
  },
  {
    "nombre": "Victor Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 29,
    "temporadaPrim": 2009,
    "temporadaSeg": 2009,
    "grupo": "B"
  },
  {
    "nombre": "Seydou Keita",
    "nacionalidad": "Mali",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Thiago Alcantara",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Albert Jorquera",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2004,
    "temporadaSeg": 2009,
    "grupo": "A"
  },
  {
    "nombre": "Maxwell",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Jonathan dos Santos",
    "nacionalidad": "Mexico",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2010,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Zlatan Ibrahimovic",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2010,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Dmytro Chygrinskiy",
    "nacionalidad": "Ucrania",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2010,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Jose Pinto",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2008,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Jeffren Suarez",
    "nacionalidad": "Venezuela",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Arda Turan",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Gerard Pique",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2009,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Pedro Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2008,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Eric Abidal",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2008,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Andres Iniesta",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2003,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Andreu Fontas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Martin Montoya",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Ibrahim Afellay",
    "nacionalidad": "Holanda",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Denis Suarez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Oier Olazabal",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2009,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Alexandre Song",
    "nacionalidad": "Camerun",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Isaac Cuenca",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Neymar Jr",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Jean-Clair Todibo",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Claudio Bravo",
    "nacionalidad": "Chile",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Tello",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Marc Bartra",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2010,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Douglas Pereira",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Joao Cancelo",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Arthur Melo",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Adriano Correia",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2011,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Javier Mascherano",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Luis Suarez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Leo Messi",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2005,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Paco Alcacer",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Jeremy Mathieu",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Sandro Ramirez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Masip",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Inaki Pena",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Digne",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Riqui Puig",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Andre Gomes",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Aleix Vidal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Jasper Cillesen",
    "nacionalidad": "Holanda",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Malcom",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Gerard Deulofeu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2012,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Rafinha",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2015,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Sergi Samper",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Jeison Murillo",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Busquets",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2009,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Paulinho",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Munir El Haddadi",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Kevin-Prince Boateng",
    "nacionalidad": "Ghana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Yerry  Mina",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Antoine Griezmann",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Moussa Wague",
    "nacionalidad": "Senegal",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Alejandro Balde",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ousmane Dembele",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Thomas Vermaelen",
    "nacionalidad": "Belgica",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Carles Alena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Dani Alves",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 8,
    "temporadaPrim": 2009,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Ronald Araujo",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Pau Cubarsi",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Arturo Vidal",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Adama Traore",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Junior Firpo",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Carles Perez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 27,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Yusuf Demir",
    "nacionalidad": "Austria",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Martin Braithwaite",
    "nacionalidad": "Dinamarca",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Neto Murara",
    "nacionalidad": "Brasil",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Phillipe Coutinho",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Nico Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Clement Lenglet",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Gavi",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Francisco Trincao",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Miralem Pjanic",
    "nacionalidad": "Bosnia Herzegovina",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Ilaix Moriba",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 27,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Matheus Fernandes",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Luuk De Jong",
    "nacionalidad": "Holanda",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Rey Manaj",
    "nacionalidad": "Albania",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Inigo Martinez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Aguero",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Ferran Torres",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Memphis Depay",
    "nacionalidad": "Holanda",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Mingueza",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Emerson Royal",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Samuel Umtiti",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Pedri Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Pierre-Emerick Aubameyang",
    "nacionalidad": "Gabon",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Ferran Jungtla",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Robert Lewandowski",
    "nacionalidad": "Polonia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Alba",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2013,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Franck Yannick Kessie",
    "nacionalidad": "Costa de Marfil",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Hector Fort",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 32,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Lamine Yamal",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Joao Felix",
    "nacionalidad": "Portugal",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Raphinha",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Abde Ezzalzouli",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Joan Garcia",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Marcos Alonso",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Oriol Romeu",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2011,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Torre",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Vitor Roque",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Sergi Roberto",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2011,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Marcus Rashford",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ilkay Gundogan",
    "nacionalidad": "Alemania",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Andreas Christiensen",
    "nacionalidad": "Dinamarca",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Fermin Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Marc Casado",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Gerard Martin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Dani Olmo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ansu Fati",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Frenkie De Jong",
    "nacionalidad": "Holanda",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2020,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Pau Victor",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Marc Bernal",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jules Kounde",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Eric Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Wojciech Szczesny",
    "nacionalidad": "Polonia",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  }
];
