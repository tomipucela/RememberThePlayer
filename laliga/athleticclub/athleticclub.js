const jugadores = [
  {
    "nombre": "Gorka Iraizoz",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2008,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Gaizka Toquero",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 2,
    "temporadaPrim": 2009,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Jon Aurtenetxe",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Ustaritz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2006,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Kepa Arrizabalaga",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Amorebieta",
    "nacionalidad": "Venezuela",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2006,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Erik Moran",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "David Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2008,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Francisco Yeste",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 1999,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Gorka Elustondo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Eneko Boveda",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2009,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Armando Ribeiro",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Fernando Llorente",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2005,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Igor Gabilondo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Koikili",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2008,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Joseba Etxeberria",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 1996,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Javier Eraso",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Enric Saborit",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Orbaiz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2001,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Raul Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Iban Zubiaurre",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Aymeric Laporte",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2013,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Unai Simon",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Isma Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Ion Velez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Inigo Perez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Inigo Diaz de Cerio",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Aitor Ocio",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2002,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Unai Albizua",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Unai Bustinza",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Kike Sola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Javi Martinez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Ganea",
    "nacionalidad": "Rumania",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Andoni Iraola",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2004,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Xabier Castillo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Petxarroman",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Igor Martinez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 26,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Jon Morcillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 2,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Jonas Ramalho",
    "nacionalidad": "Angola",
    "posicion": "Defensa",
    "dorsal": 28,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Andoni Gorosabel",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Mikel San Jose",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2010,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Benat Etxeberria",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2014,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Ander Iturraspe",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2009,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Borja Ekiza",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Gurpegui",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2002,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Dani Vivian",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Guillermo Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Inigo Martinez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Ibai Gomez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2011,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Unai Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Xabier Etxeita",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2009,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Gaizka Larrazabal",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Borja Viguera",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Aitor Paredes",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Sabin Merino",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Markel Susaeta",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2008,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Yeray Alvarez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2017,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Inigo Cordoba",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Rico",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2014,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Ager Aketxe",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Vesga",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alex Berenguer",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Oihan Sancet",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Inaki Williams",
    "nacionalidad": "Ghana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2015,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Aritz Aduriz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2003,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Jokin Ezkieta",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Iker Muniain",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2010,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Nico Williams",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Kenan Kodro",
    "nacionalidad": "Bosnia Herzegovina",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Djalo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Gorka Guruzeta",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Dani Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Unai Vencedor",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2020,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Julen Agirrezabala",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Unai Nunez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Oier Zarraga",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Iago Herrerin",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2014,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Inigo Lekue",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ander Capa",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2019,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Inigo Ruiz de Galarreta",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2013,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Imanol",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Asier Villalibre",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2017,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Balenziaga",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2011,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Yuri Berchiche",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Raul Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Peru Nolaskoain",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Adu Ares",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Oscar de Marcos",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2010,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Javier Marton",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Unai Gomez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Ander Herrera",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2012,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Maroan Sannadi",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Nico Serrano",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Mikel Jauregizar",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Benat Prados",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alex Padilla",
    "nacionalidad": "Mexico",
    "posicion": "Portero",
    "dorsal": 26,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Peio Canales",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Adama Boiro",
    "nacionalidad": "Senegal",
    "posicion": "Defensa",
    "dorsal": 32,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  }
];
