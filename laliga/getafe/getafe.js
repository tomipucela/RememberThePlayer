const jugadores = [
  {
    "nombre": "Abdelaziz Barrada",
    "nacionalidad": "Marruecos",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Abdoulay Diaby",
    "nacionalidad": "Mali",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Adrian Colunga",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Adrian Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2009,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Adrian Sardinero",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 27,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Alberto Garcia",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Alberto Lopo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Alberto Redondo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 36,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Alejandro Faurlin",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 4,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Alex Sola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Alexis Ruano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Allan Nyom",
    "nacionalidad": "Camerun",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2020,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Arroyo",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Jimenez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Medran",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Pereira",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Alvaro Rodriguez",
    "nacionalidad": "Uruguay",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Alvaro Vazquez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2013,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Amath Ndiaye",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Angel Algobia",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Angel Lafita",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2013,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Angel Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2018,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Ante Palaversa",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Antunes",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Baba",
    "nacionalidad": "Senegal",
    "posicion": "Atacante",
    "dorsal": 15,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Balazs Megyeri",
    "nacionalidad": "Hungria",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Bernard Mensah",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Bertug Yildirim",
    "nacionalidad": "Turquia",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Borja Fernandez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Borja Mayoral",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2022,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Bruno Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Carles Alena",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Carles Perez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Carlos Pena",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Carlos Vigaray",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Cata Diaz",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2008,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Chema Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Choco Lozano",
    "nacionalidad": "Honduras",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Christantus Uche",
    "nacionalidad": "Nigeria",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Chuli",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Ciprian Marica",
    "nacionalidad": "Rumania",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Coba da Costa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 29,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Cosmin Contra",
    "nacionalidad": "Rumania",
    "posicion": "Defensa",
    "dorsal": 11,
    "temporadaPrim": 2006,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Cucho Hernandez",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Damian Suarez",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2016,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Dani Guiza",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Dani Pacheco",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Dani Parejo",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Daniel Fuzato",
    "nacionalidad": "Brasil",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Dario Poveda",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2021,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "David Abraham",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "David Belenguer",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2004,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "David Cortes",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2007,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "David Fuster",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "David Soria",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2019,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "David Timor",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Derek Boateng",
    "nacionalidad": "Ghana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2010,
    "temporadaSeg": 2011,
    "grupo": "A"
  },
  {
    "nombre": "Deyverson",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Diego Castro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Diego Rico",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Dimitri Foulquier",
    "nacionalidad": "Guadalupe",
    "posicion": "Defensa",
    "dorsal": 24,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Djene",
    "nacionalidad": "Togo",
    "posicion": "Defensa",
    "dorsal": 2,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Domingos Duarte",
    "nacionalidad": "Portugal",
    "posicion": "Defensa",
    "dorsal": 22,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Emiliano Buendia",
    "nacionalidad": "Argentina",
    "posicion": "Centrocampista",
    "dorsal": 7,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Emiliano Martinez",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Emiliano Velazquez",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2015,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Enes Unal",
    "nacionalidad": "Turquia",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2021,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Enric Gallego",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Erick Cabaco",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2020,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Fabio Celestini",
    "nacionalidad": "Suiza",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2006,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Fabrizio Angileri",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Facundo Castillon",
    "nacionalidad": "Argentina",
    "posicion": "Atacante",
    "dorsal": 18,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Faycal Fajr",
    "nacionalidad": "Marruecos",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Federico Fernandez",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Filip Manojlovic",
    "nacionalidad": "Serbia",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Florent Poulolo",
    "nacionalidad": "Martinica",
    "posicion": "Defensa",
    "dorsal": 28,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Florentino",
    "nacionalidad": "Portugal",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Foued Kadir",
    "nacionalidad": "Argelia",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Francisco Molinero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Francisco Portillo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2017,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Franck Signorino",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Fredy Hinestroza",
    "nacionalidad": "Colombia",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Gaku Shibasaki",
    "nacionalidad": "Japon",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Gaston Alvarez",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Gonzalo Villar",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2022,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Henok Goitom",
    "nacionalidad": "Eritrea",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Hugo Duro",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 26,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Hugo Fraile",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Ian Gonzalez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 26,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Ibrahim Kas",
    "nacionalidad": "Turquia",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Ignasi Miquel",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Ilaix Moriba",
    "nacionalidad": "Guinea",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Ivan Alejo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Ivan Marcano",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Ivi Lopez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 26,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Jaime Gavilan",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2006,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Jaime Mata",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Jaime Seoane",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Jakub Jankto",
    "nacionalidad": "Republica Checa",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jason",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 23,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Javi Casquero",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2007,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Javier Arizmendi",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2011,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Jefferson Montero",
    "nacionalidad": "Ecuador",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Jiri Letacek",
    "nacionalidad": "Republica Checa",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Johannes van den Bergh",
    "nacionalidad": "Alemania",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Jonathan Lopez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Jonathan Silva",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Jordan Amavi",
    "nacionalidad": "Francia",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Jordi Codina",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2010,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Jorge Cuenca",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Jorge Molina",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2017,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Jose Angel Carmona",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Jose Juan Macias",
    "nacionalidad": "Mexico",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Juan Albin",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 10,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Juan Bernat",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Juan Berrocal",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Juan Cala",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 16,
    "temporadaPrim": 2016,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Juan Iglesias",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2021,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Juan Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 22,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Juan Valera",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2012,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Juanmi",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 24,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Juanmi Latasa",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2023,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Julio Cesar",
    "nacionalidad": "Brasil",
    "posicion": "Portero",
    "dorsal": 25,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Karim Yoda",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2015,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Kenedy",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 25,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Kepa Blanco",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 7,
    "temporadaPrim": 2008,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Kike Sola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Kiko Casilla",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Leandro Cabrera",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Leandro Chichizola",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Lisandro Lopez",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2014,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Loic Remy",
    "nacionalidad": "Francia",
    "posicion": "Atacante",
    "dorsal": 11,
    "temporadaPrim": 2018,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Lucas Licht",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 12,
    "temporadaPrim": 2010,
    "temporadaSeg": 2010,
    "grupo": "A"
  },
  {
    "nombre": "Luis Milla",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Mane",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "A"
  },
  {
    "nombre": "Manu del Moral",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2007,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Marc Cucurella",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Mario Abrante",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2008,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Markel Bergara",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2018,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Mason Greenwood",
    "nacionalidad": "Inglaterra",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2024,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Mathias Olivera",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 17,
    "temporadaPrim": 2018,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Mathieu Flamini",
    "nacionalidad": "Francia",
    "posicion": "Centrocampista",
    "dorsal": 16,
    "temporadaPrim": 2018,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Mauro Arambarri",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2018,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Mehdi Lacen",
    "nacionalidad": "Argelia",
    "posicion": "Centrocampista",
    "dorsal": 8,
    "temporadaPrim": 2012,
    "temporadaSeg": 2018,
    "grupo": "B"
  },
  {
    "nombre": "Michel Herrero",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Michel Madera",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 21,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Miguel Angel Moya",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2012,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Miguel Torres",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2010,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Miku",
    "nacionalidad": "Venezuela",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2010,
    "temporadaSeg": 2014,
    "grupo": "A"
  },
  {
    "nombre": "Moi Gomez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 21,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Munir El Haddadi",
    "nacionalidad": "Marruecos",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "A"
  },
  {
    "nombre": "Nabil Aberdin",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 27,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Naldo",
    "nacionalidad": "Brasil",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2015,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Nemanja Maksimovic",
    "nacionalidad": "Serbia",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2019,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Nicolas Gorosito",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 6,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Okay Yokuslu",
    "nacionalidad": "Turquia",
    "posicion": "Centrocampista",
    "dorsal": 19,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Omar Alderete",
    "nacionalidad": "Paraguay",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2023,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Oscar Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 9,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "B"
  },
  {
    "nombre": "Oscar Ustari",
    "nacionalidad": "Argentina",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2008,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Pablo Pintos",
    "nacionalidad": "Uruguay",
    "posicion": "Defensa",
    "dorsal": 20,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Pablo Sarabia",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2012,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Paul Anton",
    "nacionalidad": "Rumania",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Pedro Leon",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2010,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Pedro Mosquera",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2011,
    "temporadaSeg": 2014,
    "grupo": "B"
  },
  {
    "nombre": "Pedro Rios",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 16,
    "temporadaPrim": 2010,
    "temporadaSeg": 2012,
    "grupo": "A"
  },
  {
    "nombre": "Peter Etebo",
    "nacionalidad": "Nigeria",
    "posicion": "Centrocampista",
    "dorsal": 5,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "B"
  },
  {
    "nombre": "Peter Federico",
    "nacionalidad": "Republica Dominicana",
    "posicion": "Atacante",
    "dorsal": 19,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "A"
  },
  {
    "nombre": "Portu",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2023,
    "temporadaSeg": 2023,
    "grupo": "B"
  },
  {
    "nombre": "Rafa Lopez",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 15,
    "temporadaPrim": 2009,
    "temporadaSeg": 2015,
    "grupo": "A"
  },
  {
    "nombre": "Ramon Terrats",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2025,
    "temporadaSeg": 2025,
    "grupo": "B"
  },
  {
    "nombre": "Raul Carnero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 14,
    "temporadaPrim": 2020,
    "temporadaSeg": 2020,
    "grupo": "A"
  },
  {
    "nombre": "Rober Ibanez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 17,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Roberto Lago",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 3,
    "temporadaPrim": 2014,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Roberto Soldado",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 9,
    "temporadaPrim": 2009,
    "temporadaSeg": 2010,
    "grupo": "B"
  },
  {
    "nombre": "Rolf Feltscher",
    "nacionalidad": "Venezuela",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2017,
    "temporadaSeg": 2017,
    "grupo": "A"
  },
  {
    "nombre": "Ruben Perez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 24,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Ruben Yanez",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 1,
    "temporadaPrim": 2019,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Sammir",
    "nacionalidad": "Croacia",
    "posicion": "Centrocampista",
    "dorsal": 6,
    "temporadaPrim": 2014,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Samu Saiz",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 11,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Sandro Ramirez",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 12,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "B"
  },
  {
    "nombre": "Santiago Vergini",
    "nacionalidad": "Argentina",
    "posicion": "Defensa",
    "dorsal": 5,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Sebastian Cristoforo",
    "nacionalidad": "Uruguay",
    "posicion": "Centrocampista",
    "dorsal": 15,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "B"
  },
  {
    "nombre": "Sergi Guardiola",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 14,
    "temporadaPrim": 2019,
    "temporadaSeg": 2019,
    "grupo": "A"
  },
  {
    "nombre": "Sergio Escudero",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2013,
    "temporadaSeg": 2015,
    "grupo": "B"
  },
  {
    "nombre": "Sergio Mora",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 14,
    "temporadaPrim": 2017,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Soufiane Chakla",
    "nacionalidad": "Marruecos",
    "posicion": "Defensa",
    "dorsal": 21,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Stefan Mitrovic",
    "nacionalidad": "Serbia",
    "posicion": "Defensa",
    "dorsal": 23,
    "temporadaPrim": 2022,
    "temporadaSeg": 2024,
    "grupo": "A"
  },
  {
    "nombre": "Stefan Scepovic",
    "nacionalidad": "Serbia",
    "posicion": "Atacante",
    "dorsal": 10,
    "temporadaPrim": 2016,
    "temporadaSeg": 2017,
    "grupo": "B"
  },
  {
    "nombre": "Takefusa Kubo",
    "nacionalidad": "Japon",
    "posicion": "Atacante",
    "dorsal": 5,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Tsepo Masilela",
    "nacionalidad": "Sudafrica",
    "posicion": "Defensa",
    "dorsal": 18,
    "temporadaPrim": 2012,
    "temporadaSeg": 2012,
    "grupo": "B"
  },
  {
    "nombre": "Vicente Guaita",
    "nacionalidad": "Espana",
    "posicion": "Portero",
    "dorsal": 13,
    "temporadaPrim": 2015,
    "temporadaSeg": 2018,
    "grupo": "A"
  },
  {
    "nombre": "Victor Mollejo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 26,
    "temporadaPrim": 2021,
    "temporadaSeg": 2021,
    "grupo": "B"
  },
  {
    "nombre": "Victor Rodriguez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 18,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "A"
  },
  {
    "nombre": "Victor Sanchez",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 17,
    "temporadaPrim": 2011,
    "temporadaSeg": 2011,
    "grupo": "B"
  },
  {
    "nombre": "Vitolo",
    "nacionalidad": "Espana",
    "posicion": "Atacante",
    "dorsal": 8,
    "temporadaPrim": 2022,
    "temporadaSeg": 2022,
    "grupo": "A"
  },
  {
    "nombre": "Wanderson",
    "nacionalidad": "Brasil",
    "posicion": "Atacante",
    "dorsal": 30,
    "temporadaPrim": 2016,
    "temporadaSeg": 2016,
    "grupo": "B"
  },
  {
    "nombre": "Xabi Etxeita",
    "nacionalidad": "Espana",
    "posicion": "Defensa",
    "dorsal": 4,
    "temporadaPrim": 2020,
    "temporadaSeg": 2021,
    "grupo": "A"
  },
  {
    "nombre": "Xavi Torres",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 25,
    "temporadaPrim": 2013,
    "temporadaSeg": 2013,
    "grupo": "B"
  },
  {
    "nombre": "Yellu Santiago",
    "nacionalidad": "Espana",
    "posicion": "Centrocampista",
    "dorsal": 20,
    "temporadaPrim": 2024,
    "temporadaSeg": 2025,
    "grupo": "A"
  }
];
