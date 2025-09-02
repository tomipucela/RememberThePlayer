const jugadores = [
  {
    "nombre": "Abde Rebbach",
    "nacionalidad": "Argelia",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Abdel Abqar",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Adrian Dieguez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 26,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Adrian Marin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Adrian Ortola",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Adrian Pica",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 36,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Aleix Vidal",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Aleksandar Katai",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Aleksandar Pantic",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Aleksandar Sedlar",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Alex Blanco",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Alex Ortiz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Alex Sola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Alexis Ruano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Alfonso Pedraza",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Medran",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Ander Guevara",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Anderson Arroyo",
    "nacionalidad": "Colombia",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Andoni Gorosabel",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Antonio Blanco",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Antonio Sivera",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2018,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Aritz Borda",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Asier Villalibre",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Bojan Krkic",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Borja Baston",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Borja Sainz",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Borja Viguera",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Burgui",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Calebe",
    "nacionalidad": "Brasil",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Carles Alena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Lazaro",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Martin",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Protesoni",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Vicente",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2024,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Vigaray",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Christian Santos",
    "nacionalidad": "Venezuela",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Cristian Espinoza",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Dani Abalo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Dani Estrada",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Dani Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Dani Toribio",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Dani Torres",
    "nacionalidad": "Colombia",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Darko Brasanac",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "David Torres",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Denis Suarez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Deyverson",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Diego Rolan",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Edgar Mendez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Einar Galilea",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 27,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Emilio Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Enzo Zidane",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Ernesto Galan",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Facundo Garces",
    "nacionalidad": "Malasia",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Facundo Guichon",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Facundo Pellistri",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Fernando Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Florian Lejeune",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Gaizka Toquero",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Giuliano Simeone",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Gonzalo Escalante",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Gorka Laborda",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Guillermo Maripan",
    "nacionalidad": "Chile",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Guzman Casaseca",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Hector Hernandez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Hernan Bernardello",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Hernan Perez",
    "nacionalidad": "Paraguay",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Hugo Novoa",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Ianis Hagi",
    "nacionalidad": "Rumania",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Ibai Gomez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Inaki Goitia",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Inaki Saenz",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Inigo Cordoba",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Ion Velez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Crespo",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Jagoba Beobide",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Jason Remeseiro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Jaume Delgado",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Javi Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 27,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Javi Munoz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Javier Carpio",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Jesus Owono",
    "nacionalidad": "Guinea Ecuatorial",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Jiri Jarosik",
    "nacionalidad": "Republica Checa",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Joan Jordan",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Joaquin Panichelli",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "John Guidetti",
    "nacionalidad": "Suecia",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jon Guridi",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jon Karrikaburu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jon Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jonathan Calleri",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Jonny Otto",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Jony",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Joselu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Jota Peleteiro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Juanma",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 22,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Juli Cerda",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Kike Garcia",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Kiko Femenia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Krisztian Vadocz",
    "nacionalidad": "Hungria",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Lisandro Magallan",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Ljubomir Fejsa",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Boye",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Lucas Perez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Luciano Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2013,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Luis Rioja",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2020,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Luka Romero",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Mamadou Loum",
    "nacionalidad": "Senegal",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Mamadou Sylla",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Manu Barreiro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Manu Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Manu Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2013,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Manu Lanzarote",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Manu Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Manu Vallejo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Marco Sangalli",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Marcos Llorente",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Mariano Diaz",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Martin Aguirregabiria",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Matt Miazga",
    "nacionalidad": "Estados Unidos",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Mauro Quiroga",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Migue",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Miguel de la Fuente",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Miroslav Stevanovic",
    "nacionalidad": "Bosnia y Herzegovina",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Moussa Diarra",
    "nacionalidad": "Mali",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Mubarak Wakaso",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Munir El Haddadi",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Nahuel Tenaglia",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2022,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Nano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Nenad Krsticic",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Nicolas Schenone",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Nikola Maras",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2023,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Oliver Burke",
    "nacionalidad": "Escocia",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Romero",
    "nacionalidad": "Paraguay",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Oscar Rubio",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Serrano",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Ibanez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "A"
  },
  {
    "nombre": "Patrick Twumasi",
    "nacionalidad": "Ghana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Pau Cabanes",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Pau Torres",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Pepe Mora",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Pere Pons",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Rafa Garcia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Rafa Marin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Rafa Navarro",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Ranko Despotovic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Raul Carnero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Raul Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Rober Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 20,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Roberto",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Rodrigo Battaglia",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Rodrigo Ely",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Duarte",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2018,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Sobrino",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2017,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Salva Sevilla",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Samu Aghehowa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 32,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Samuel Llorca",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 25,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Santiago Mourino",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Saul Garcia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Llamas",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 12,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Mora",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Pelegrin",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Tejera",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Tachi",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Taichi Hara",
    "nacionalidad": "Japon",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Takashi Inui",
    "nacionalidad": "Japon",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Theo Hernandez",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Tomas Conechny",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Tomas Pina",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Toni Martinez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2025,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Toni Moya",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Toti",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Unai Medina",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Victor Camarasa",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Victor Laguardia",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2015,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Victor Parada",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Xabier Castillo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Xeber Alkain",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Ximo Navarro",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Youssef Enriquez",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2026,
    "temporadaSeg": 2026,
    "grupo": "B"
  },
  {
    "nombre": "Zouhair Feddal",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  }
];
