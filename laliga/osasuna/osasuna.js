const jugadores = [
  {
    "nombre": "Abde Ezzalzouli",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Abel Bretones",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Adri Cruz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Adrian Lopez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Aimar Oroz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Aitor Bunuel",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 34,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Aitor Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Alejandro Arribas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Alejandro Catena",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Alex Berenguer",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alex Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Cejudo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Andres Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2008,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Ante Budimir",
    "nacionalidad": "Croacia",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Anthony Annan",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Aridane Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2018,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Asier Riesgo",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2011,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Bogdan Milic",
    "nacionalidad": "Montenegro",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Borja Lasso",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Brandon Thomas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Bryan Zaragoza",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Aranda",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Clerc",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Cedrick",
    "nacionalidad": "RD del Congo",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Cesar Azpilicueta",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2007,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Chimy Avila",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Cote",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Cristian Lobato",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Dady",
    "nacionalidad": "Cabo Verde",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Damia Abella",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Darko Brasanac",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "David Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2015,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "David Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "David Timor",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Dejan Lekic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Didier Digard",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Diego Moreno",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 35,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Emiliano Armenteros",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Emmanuel Riviere",
    "nacionalidad": "Martinica",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Eneko Satrustegui",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Enric Gallego",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Enzo Boyomo",
    "nacionalidad": "Camerun",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Facundo Roncaglia",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Fausto Tienza",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Fernando Soriano",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Ferran Corominas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Fran Merida",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Francisco Silva",
    "nacionalidad": "Chile",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Goran Causic",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Ibrahima Balde",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Iker Benito",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 2,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Iker Munoz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Inigo Perez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Barbero",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Jaime Romero",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Jaume Grau",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Javad Nekounam",
    "nacionalidad": "Iran",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2007,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Javi Acuna",
    "nacionalidad": "Paraguay",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Javi Alamo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Javi Martinez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2016,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Javi Ontiveros",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Javier Calleja",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Javier Camunas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Javier Flano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Javier Portillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Jesus Areso",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Joan Oriol",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Joaquin Arzura",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Johan Mojica",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jokin Esparza",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2007,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Jon Echaide",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2008,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Jon Moncayola",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jonas Ramalho",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jonathan Calleri",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Jony",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Jordan Loties",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Jorge Galan",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2010,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Herrando",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jose Arnaiz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Jose Nunez",
    "nacionalidad": "Paraguay",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Joseba Llorente",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Josetxo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 1996,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Juan Cruz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2021,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Juan Perez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Juan Rafael Fuentes",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Juan Villar",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Juanfran Torres",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Jukka Raitala",
    "nacionalidad": "Finlandia",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Karim Ansarifard",
    "nacionalidad": "Iran",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Kenan Kodro",
    "nacionalidad": "Bosnia y Herzegovina",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Kike Barja",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Kike Garcia",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Kike Sola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2011,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Krisztian Vadocz",
    "nacionalidad": "Hungria",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Liassine Cadamuro",
    "nacionalidad": "Argelia",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Lillo Castellano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Lolo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Torro",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ludovic Delporte",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2005,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Luis Martins",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Luis Perea",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 28,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Maikel Mesa",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Manu Herrera",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Manu Onwu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Manu Sanchez (2000)",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2021,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Manuel Sanchez (1988)",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Marc Bertran",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Marc Cardona",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Mario Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Masoud Shojaei",
    "nacionalidad": "Iran",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2009,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Matej Pucko",
    "nacionalidad": "Eslovenia",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Mateo Garcia",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Miguel de las Cuevas",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2013,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Miguel Diaz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Flano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2005,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Miguel Olavide",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 27,
    "temporadaPrim": 2015,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Mikel Merino",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Moi Gomez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Nacho Monreal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Nacho Vidal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Nano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Nauzet Perez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Nelson",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Nikola Vujadinovic",
    "nacionalidad": "Montenegro",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Nino",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Oier Sanjurjo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2009,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Oriol Riera",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Hervias",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Ibanez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Patxi Punal",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 1997,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Pervis Estupinan",
    "nacionalidad": "Ecuador",
    "posicion": "Defensa",
    "dorsal": 30,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Quique Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Raoul Loe",
    "nacionalidad": "Camerun",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Raul Garcia (1986)",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Raul Garcia de Haro (2000)",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Raul Navas",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Ricardo",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2006,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Rober Ibanez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Roberto Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2009,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Roberto Santamaria",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Roberto Torres",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2012,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Roland Lamah",
    "nacionalidad": "Belgica",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Roversio",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Garcia",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Martinez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Pena",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Ruper",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2009,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Salvatore Sirigu",
    "nacionalidad": "Italia",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Sebas Coris",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2009,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Herrera",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Leon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Sheraldo Becker",
    "nacionalidad": "Surinam",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Sisi Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Tano Bonnin",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Toni Lato",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Unai Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2013,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Urko Vera",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Valentin Rosier",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Victor Munoz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Walter Pandiani",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Xavier Annunziata",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Xisco",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  }
];
