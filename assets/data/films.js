// Lenkų kino festivalio repertuaro duomenų feed'as.
// Modelis: meta{...}, programs[{id,title,description,authors?[]}],
// films[{id,title,originalTitle,program,author,year,duration,genre,director,country,ageRating,
//        image,badges[],url,description,trailer,crew{director,screenwriter,cast[]},awards[],festivals[],
//        screenings[{date,time,city,venue,ticketUrl,free,note}]}]
// Tas pats objektas gali būti serviruojamas kaip JSON iš CMS/API — žr. assets/data/films.json
window.FILMS_FEED = {
  "meta": {
    "festival": "Lenkų kino festivalis 2026",
    "updated": "2026-08-06",
    "totalFilms": 51
  },
  "programs": [
    {
      "id": "konkursine",
      "title": "Konkursinė programa",
      "description": "Naujausi lenkų kino kūriniai, varžosi dėl festivalio publikos apdovanojimo."
    },
    {
      "id": "vaikams",
      "title": "Programa vaikams",
      "description": "Filmai jaunajai auditorijai, dubliuoti lietuviškai."
    },
    {
      "id": "specialieji",
      "title": "Specialieji seansai",
      "description": "Festivalio atidarymo ir uždarymo seansai."
    },
    {
      "id": "retrospektyva",
      "title": "Retrospektyvinės programos",
      "description": "Keturių lenkų kino meistrų kūrybos retrospektyvos.",
      "authors": [
        {
          "id": "zielinski",
          "name": "Marek Zieliński"
        },
        {
          "id": "sobczak",
          "name": "Agnieszka Sobczak"
        },
        {
          "id": "grabowski",
          "name": "Tomasz Grabowski"
        },
        {
          "id": "lipinska",
          "name": "Ewa Lipińska"
        }
      ]
    }
  ],
  "films": [
    {
      "id": "czerwone-maki",
      "title": "Raudonos aguonos",
      "originalTitle": "Czerwone maki",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 117,
      "genre": "Karo drama",
      "director": "Krzysztof Łukaszewicz",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": "assets/img/film-czerwone-maki.jpg",
      "badges": [
        "Premjera"
      ],
      "url": "filmas.html?id=czerwone-maki",
      "description": "„Raudonos aguonos“ (2024) — karo drama apie šeimą, kurią netikėtai pasiveja ilgai slėpta praeitis. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Krzysztof Łukaszewicz",
        "screenwriter": "Zofia Malinowska",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [
        "Gdynės lenkų kino festivalis — geriausias scenarijus (2024)",
        "Lenkijos kino apdovanojimas „Erelis“ — geriausia režisūra (2024)"
      ],
      "festivals": [
        "Gdynės lenkų kino festivalis",
        "Karlovy Varų tarptautinis kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "16:00",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "18:00",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "chlopi",
      "title": "Kaimiečiai",
      "originalTitle": "Chłopi",
      "program": "konkursine",
      "author": null,
      "year": 2023,
      "duration": 110,
      "genre": "Animacinis, drama",
      "director": "DK Welchman, Hugh Welchman",
      "country": "Lenkija, Lietuva, Serbija",
      "ageRating": "N-13",
      "image": "assets/img/film-chlopi.png",
      "badges": [],
      "url": "filmas.html?id=chlopi",
      "description": "„Kaimiečiai“ (2023) — animacinis apie mažo miestelio bendruomenę, priverstą rinktis tarp tiesos ir ramybės. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "DK Welchman, Hugh Welchman",
        "screenwriter": "Krzysztof Bednarek",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [
        "Tarptautinis Varšuvos kino festivalis",
        "Talino „Tumšās naktis“ kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "17:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "18:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "20:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "pokoj-ciszy",
      "title": "Tylos kambarys",
      "originalTitle": "Pokój ciszy",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 104,
      "genre": "Drama",
      "director": "Paweł Domagała",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [
        "Premjera"
      ],
      "url": "filmas.html?id=pokoj-ciszy",
      "description": "„Tylos kambarys“ (2025) — drama apie dviejų kartų susidūrimą viename name. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Paweł Domagała",
        "screenwriter": "Julia Wiśniewska",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [],
      "festivals": [
        "Karlovy Varų tarptautinis kino festivalis",
        "Krokuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "16:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "18:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "18:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "19:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        }
      ]
    },
    {
      "id": "wiatr-polnocy",
      "title": "Šiaurės vėjas",
      "originalTitle": "Wiatr północy",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 98,
      "genre": "Trileris",
      "director": "Magdalena Czerwińska",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=wiatr-polnocy",
      "description": "„Šiaurės vėjas“ (2025) — trileris apie moterį, po dvidešimties metų grįžtančią į gimtąjį miestą. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Magdalena Czerwińska",
        "screenwriter": "Adam Pawlak",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [
        "Talino „Tumšās naktis“ kino festivalis",
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“"
      ],
      "screenings": [
        {
          "date": "2026-10-23",
          "time": "18:30",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "ostatni-tramwaj",
      "title": "Paskutinis tramvajus",
      "originalTitle": "Ostatni tramwaj",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 112,
      "genre": "Drama",
      "director": "Jakub Michalski",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=ostatni-tramwaj",
      "description": "„Paskutinis tramvajus“ (2024) — drama apie draugystę, kuri išbandoma vieną lemtingą naktį. Filmas, po kurio seanso norisi dar ilgai tylėti.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Jakub Michalski",
        "screenwriter": "Beata Sikora",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [
        "Tarptautinis Varšuvos kino festivalis — didysis prizas (2024)"
      ],
      "festivals": [
        "Krokuvos kino festivalis",
        "Gdynės lenkų kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "16:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "18:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "19:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "lato-na-mazurach",
      "title": "Vasara Mozūrijoje",
      "originalTitle": "Lato na Mazurach",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 95,
      "genre": "Romantinė komedija",
      "director": "Anna Kowalczyk",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=lato-na-mazurach",
      "description": "„Vasara Mozūrijoje“ (2025) — romantinė komedija apie žmogų, bandantį pradėti gyvenimą iš naujo svetimame mieste. Aktorių ansamblio darbas čia vertas atskiro paminėjimo.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Anna Kowalczyk",
        "screenwriter": "Mateusz Król",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“",
        "Tarptautinis Varšuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "17:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-23",
          "time": "18:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "szklane-domy",
      "title": "Stiklo namai",
      "originalTitle": "Szklane domy",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 121,
      "genre": "Psichologinė drama",
      "director": "Piotr Adamczyk",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [
        "Susitikimas su kūrėjais"
      ],
      "url": "filmas.html?id=szklane-domy",
      "description": "„Stiklo namai“ (2024) — psichologinė drama apie meilę, gimusią pačiu netinkamiausiu metu. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Piotr Adamczyk",
        "screenwriter": "Hanna Ostrowska",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [],
      "festivals": [
        "Gdynės lenkų kino festivalis",
        "Karlovy Varų tarptautinis kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "16:00",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": "Po seanso — susitikimas su filmo kūrėjais (Q&A)."
        },
        {
          "date": "2026-10-21",
          "time": "18:00",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "czarny-ogrod",
      "title": "Juodasis sodas",
      "originalTitle": "Czarny ogród",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 108,
      "genre": "Mistinė drama",
      "director": "Karolina Nowak",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=czarny-ogrod",
      "description": "„Juodasis sodas“ (2025) — mistinė drama apie paslaptį, kurią saugo trys šeimos kartos. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Karolina Nowak",
        "screenwriter": "Rafał Czajka",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [
        "Tarptautinis Varšuvos kino festivalis",
        "Talino „Tumšās naktis“ kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-19",
          "time": "17:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "18:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "20:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "dziewiate-pietro",
      "title": "Devintas aukštas",
      "originalTitle": "Dziewiąte piętro",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 99,
      "genre": "Trileris",
      "director": "Marcin Wrona",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=dziewiate-pietro",
      "description": "„Devintas aukštas“ (2024) — trileris apie jauno žmogaus kelią tarp svajonių ir pareigos. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Marcin Wrona",
        "screenwriter": "Dorota Zawadzka",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [
        "Lenkijos kino apdovanojimas „Erelis“ — geriausia režisūra (2024)",
        "Tarptautinis Varšuvos kino festivalis — didysis prizas (2024)"
      ],
      "festivals": [
        "Karlovy Varų tarptautinis kino festivalis",
        "Krokuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "16:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-21",
          "time": "18:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "18:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "19:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "listy-matki",
      "title": "Motinos laiškai",
      "originalTitle": "Listy matki",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 116,
      "genre": "Biografinė drama",
      "director": "Joanna Kos-Krauze",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [
        "Premjera"
      ],
      "url": "filmas.html?id=listy-matki",
      "description": "„Motinos laiškai“ (2025) — biografinė drama apie bendruomenę, kurią suvienija netikėta netektis. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Joanna Kos-Krauze",
        "screenwriter": "Szymon Lis",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [
        "Talino „Tumšās naktis“ kino festivalis",
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“"
      ],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "20:30",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "18:30",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "srebrna-rzeka",
      "title": "Sidabrinė upė",
      "originalTitle": "Srebrna rzeka",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 102,
      "genre": "Drama",
      "director": "Łukasz Palkowski",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=srebrna-rzeka",
      "description": "„Sidabrinė upė“ (2024) — drama apie tylų maištą prieš nusistovėjusią tvarką. Filmas, po kurio seanso norisi dar ilgai tylėti.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Łukasz Palkowski",
        "screenwriter": "Zofia Malinowska",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [],
      "festivals": [
        "Krokuvos kino festivalis",
        "Gdynės lenkų kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "16:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "18:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "19:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "nocna-zmiana",
      "title": "Naktinė pamaina",
      "originalTitle": "Nocna zmiana",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 93,
      "genre": "Kriminalinė drama",
      "director": "Bartosz Konopka",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=nocna-zmiana",
      "description": "„Naktinė pamaina“ (2025) — kriminalinė drama apie atmintį ir tai, ką pasirenkame pamiršti. Aktorių ansamblio darbas čia vertas atskiro paminėjimo.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Bartosz Konopka",
        "screenwriter": "Krzysztof Bednarek",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“",
        "Tarptautinis Varšuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "20:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-15",
          "time": "20:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "17:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "18:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "wesele-na-slasku",
      "title": "Vestuvės Silezijoje",
      "originalTitle": "Wesele na Śląsku",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 107,
      "genre": "Komedija",
      "director": "Wojciech Smarzowski",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=wesele-na-slasku",
      "description": "„Vestuvės Silezijoje“ (2024) — komedija apie šeimą, kurią netikėtai pasiveja ilgai slėpta praeitis. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Wojciech Smarzowski",
        "screenwriter": "Julia Wiśniewska",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [
        "Gdynės lenkų kino festivalis — geriausias scenarijus (2024)"
      ],
      "festivals": [
        "Gdynės lenkų kino festivalis",
        "Karlovy Varų tarptautinis kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "16:00",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-23",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "pusty-peron",
      "title": "Tuščias perronas",
      "originalTitle": "Pusty peron",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 89,
      "genre": "Drama",
      "director": "Aleksandra Terpińska",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=pusty-peron",
      "description": "„Tuščias perronas“ (2025) — drama apie mažo miestelio bendruomenę, priverstą rinktis tarp tiesos ir ramybės. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Aleksandra Terpińska",
        "screenwriter": "Adam Pawlak",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [
        "Tarptautinis Varšuvos kino festivalis",
        "Talino „Tumšās naktis“ kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "20:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-21",
          "time": "17:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "18:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "zimowe-swiatlo",
      "title": "Žiemos šviesa",
      "originalTitle": "Zimowe światło",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 111,
      "genre": "Drama",
      "director": "Michał Rosa",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [
        "Susitikimas su kūrėjais"
      ],
      "url": "filmas.html?id=zimowe-swiatlo",
      "description": "„Žiemos šviesa“ (2024) — drama apie dviejų kartų susidūrimą viename name. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Michał Rosa",
        "screenwriter": "Beata Sikora",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [],
      "festivals": [
        "Karlovy Varų tarptautinis kino festivalis",
        "Krokuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "16:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": "Po seanso — susitikimas su filmo kūrėjais (Q&A)."
        },
        {
          "date": "2026-10-23",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "19:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "droga-ptakow",
      "title": "Paukščių takas",
      "originalTitle": "Droga ptaków",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 124,
      "genre": "Istorinė drama",
      "director": "Filip Bajon",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=droga-ptakow",
      "description": "„Paukščių takas“ (2025) — istorinė drama apie moterį, po dvidešimties metų grįžtančią į gimtąjį miestą. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Filip Bajon",
        "screenwriter": "Mateusz Król",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [
        "Talino „Tumšās naktis“ kino festivalis",
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“"
      ],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "20:30",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "18:30",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "kwiaty-z-betonu",
      "title": "Betono gėlės",
      "originalTitle": "Kwiaty z betonu",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 97,
      "genre": "Socialinė drama",
      "director": "Kinga Dębska",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=kwiaty-z-betonu",
      "description": "„Betono gėlės“ (2024) — socialinė drama apie draugystę, kuri išbandoma vieną lemtingą naktį. Filmas, po kurio seanso norisi dar ilgai tylėti.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Kinga Dębska",
        "screenwriter": "Hanna Ostrowska",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [
        "Tarptautinis Varšuvos kino festivalis — didysis prizas (2024)",
        "Gdynės lenkų kino festivalis — geriausias scenarijus (2024)"
      ],
      "festivals": [
        "Krokuvos kino festivalis",
        "Gdynės lenkų kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "19:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "16:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "18:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "fala-radiowa",
      "title": "Radijo banga",
      "originalTitle": "Fala radiowa",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 101,
      "genre": "Muzikinė drama",
      "director": "Leszek Dawid",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=fala-radiowa",
      "description": "„Radijo banga“ (2025) — muzikinė drama apie žmogų, bandantį pradėti gyvenimą iš naujo svetimame mieste. Aktorių ansamblio darbas čia vertas atskiro paminėjimo.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Leszek Dawid",
        "screenwriter": "Rafał Czajka",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“",
        "Tarptautinis Varšuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "20:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-17",
          "time": "20:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "17:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "18:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "obce-miasto",
      "title": "Svetimas miestas",
      "originalTitle": "Obce miasto",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 109,
      "genre": "Trileris",
      "director": "Agnieszka Smoczyńska",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=obce-miasto",
      "description": "„Svetimas miestas“ (2024) — trileris apie meilę, gimusią pačiu netinkamiausiu metu. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Agnieszka Smoczyńska",
        "screenwriter": "Dorota Zawadzka",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [],
      "festivals": [
        "Gdynės lenkų kino festivalis",
        "Karlovy Varų tarptautinis kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-20",
          "time": "16:00",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "18:00",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "papierowe-statki",
      "title": "Popieriniai laivai",
      "originalTitle": "Papierowe statki",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 92,
      "genre": "Drama",
      "director": "Tomasz Wasilewski",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [
        "Premjera"
      ],
      "url": "filmas.html?id=papierowe-statki",
      "description": "„Popieriniai laivai“ (2025) — drama apie paslaptį, kurią saugo trys šeimos kartos. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Tomasz Wasilewski",
        "screenwriter": "Szymon Lis",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [
        "Tarptautinis Varšuvos kino festivalis",
        "Talino „Tumšās naktis“ kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "20:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-23",
          "time": "17:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "18:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "jesienna-sonata",
      "title": "Rudens sonata",
      "originalTitle": "Jesienna sonata",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 105,
      "genre": "Drama",
      "director": "Małgorzata Szumowska",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=jesienna-sonata",
      "description": "„Rudens sonata“ (2024) — drama apie jauno žmogaus kelią tarp svajonių ir pareigos. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Małgorzata Szumowska",
        "screenwriter": "Zofia Malinowska",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [
        "Lenkijos kino apdovanojimas „Erelis“ — geriausia režisūra (2024)"
      ],
      "festivals": [
        "Karlovy Varų tarptautinis kino festivalis",
        "Krokuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "19:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "16:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "18:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "18:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "linia-ognia",
      "title": "Ugnies linija",
      "originalTitle": "Linia ognia",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 118,
      "genre": "Karo drama",
      "director": "Jan Komasa",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=linia-ognia",
      "description": "„Ugnies linija“ (2025) — karo drama apie bendruomenę, kurią suvienija netikėta netektis. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Jan Komasa",
        "screenwriter": "Krzysztof Bednarek",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [
        "Talino „Tumšās naktis“ kino festivalis",
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“"
      ],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "18:30",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "bialy-las",
      "title": "Baltas miškas",
      "originalTitle": "Biały las",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 96,
      "genre": "Mistinis trileris",
      "director": "Bodo Kox",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=bialy-las",
      "description": "„Baltas miškas“ (2024) — mistinis trileris apie tylų maištą prieš nusistovėjusią tvarką. Filmas, po kurio seanso norisi dar ilgai tylėti.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Bodo Kox",
        "screenwriter": "Julia Wiśniewska",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [],
      "festivals": [
        "Krokuvos kino festivalis",
        "Gdynės lenkų kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "19:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-21",
          "time": "16:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "18:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "siedem-siostr",
      "title": "Septynios seserys",
      "originalTitle": "Siedem sióstr",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 113,
      "genre": "Šeimos drama",
      "director": "Urszula Antoniak",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=siedem-siostr",
      "description": "„Septynios seserys“ (2025) — šeimos drama apie atmintį ir tai, ką pasirenkame pamiršti. Aktorių ansamblio darbas čia vertas atskiro paminėjimo.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Urszula Antoniak",
        "screenwriter": "Adam Pawlak",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“",
        "Tarptautinis Varšuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "17:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "18:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        }
      ]
    },
    {
      "id": "ekspres-o-polnocy",
      "title": "Vidurnakčio ekspresas",
      "originalTitle": "Ekspres o północy",
      "program": "konkursine",
      "author": null,
      "year": 2024,
      "duration": 100,
      "genre": "Kriminalinis",
      "director": "Maciej Pieprzyca",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=ekspres-o-polnocy",
      "description": "„Vidurnakčio ekspresas“ (2024) — kriminalinis apie šeimą, kurią netikėtai pasiveja ilgai slėpta praeitis. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Maciej Pieprzyca",
        "screenwriter": "Beata Sikora",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [
        "Gdynės lenkų kino festivalis — geriausias scenarijus (2024)",
        "Lenkijos kino apdovanojimas „Erelis“ — geriausia režisūra (2024)"
      ],
      "festivals": [
        "Gdynės lenkų kino festivalis",
        "Karlovy Varų tarptautinis kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-22",
          "time": "16:00",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "18:00",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "zakurzone-lustra",
      "title": "Dulkėti veidrodžiai",
      "originalTitle": "Zakurzone lustra",
      "program": "konkursine",
      "author": null,
      "year": 2025,
      "duration": 106,
      "genre": "Psichologinė drama",
      "director": "Grzegorz Zariczny",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=zakurzone-lustra",
      "description": "„Dulkėti veidrodžiai“ (2025) — psichologinė drama apie mažo miestelio bendruomenę, priverstą rinktis tarp tiesos ir ramybės. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Grzegorz Zariczny",
        "screenwriter": "Mateusz Król",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [
        "Tarptautinis Varšuvos kino festivalis",
        "Talino „Tumšās naktis“ kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "18:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "20:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "17:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "smoczek-franciszek",
      "title": "Drakoniukas Františekas",
      "originalTitle": "Smoczek Franciszek",
      "program": "vaikams",
      "author": null,
      "year": 2025,
      "duration": 78,
      "genre": "Animacinis",
      "director": "Zofia Dąbrowska",
      "country": "Lenkija",
      "ageRating": "V",
      "image": null,
      "badges": [
        "Dubliuota lietuviškai"
      ],
      "url": "filmas.html?id=smoczek-franciszek",
      "description": "„Drakoniukas Františekas“ (2025) — animacinis apie dviejų kartų susidūrimą viename name. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta. Filmas rodomas dubliuotas lietuviškai, rekomenduojamas visai šeimai.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Zofia Dąbrowska",
        "screenwriter": "Hanna Ostrowska",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [],
      "festivals": [
        "Karlovy Varų tarptautinis kino festivalis",
        "Krokuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "19:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "16:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "18:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "18:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        }
      ]
    },
    {
      "id": "szkola-w-kosmosie",
      "title": "Kosmoso mokykla",
      "originalTitle": "Szkoła w kosmosie",
      "program": "vaikams",
      "author": null,
      "year": 2024,
      "duration": 85,
      "genre": "Nuotykių",
      "director": "Rafał Skalski",
      "country": "Lenkija",
      "ageRating": "V",
      "image": null,
      "badges": [
        "Dubliuota lietuviškai"
      ],
      "url": "filmas.html?id=szkola-w-kosmosie",
      "description": "„Kosmoso mokykla“ (2024) — nuotykių apie moterį, po dvidešimties metų grįžtančią į gimtąjį miestą. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę. Filmas rodomas dubliuotas lietuviškai, rekomenduojamas visai šeimai.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Rafał Skalski",
        "screenwriter": "Rafał Czajka",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [
        "Talino „Tumšās naktis“ kino festivalis",
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“"
      ],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "18:30",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "20:30",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "wilczy-bilet",
      "title": "Vilko bilietas",
      "originalTitle": "Wilczy bilet",
      "program": "vaikams",
      "author": null,
      "year": 2025,
      "duration": 90,
      "genre": "Šeimos nuotykių",
      "director": "Katarzyna Rosłaniec",
      "country": "Lenkija",
      "ageRating": "V",
      "image": null,
      "badges": [
        "Dubliuota lietuviškai"
      ],
      "url": "filmas.html?id=wilczy-bilet",
      "description": "„Vilko bilietas“ (2025) — šeimos nuotykių apie draugystę, kuri išbandoma vieną lemtingą naktį. Filmas, po kurio seanso norisi dar ilgai tylėti. Filmas rodomas dubliuotas lietuviškai, rekomenduojamas visai šeimai.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Katarzyna Rosłaniec",
        "screenwriter": "Dorota Zawadzka",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [],
      "festivals": [
        "Krokuvos kino festivalis",
        "Gdynės lenkų kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "19:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-23",
          "time": "16:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "18:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "wielka-podroz",
      "title": "Didžioji kelionė",
      "originalTitle": "Wielka podróż",
      "program": "specialieji",
      "author": null,
      "year": 2026,
      "duration": 102,
      "genre": "Drama",
      "director": "Andrzej Barański",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [
        "Atidarymo filmas"
      ],
      "url": "filmas.html?id=wielka-podroz",
      "description": "„Didžioji kelionė“ (2026) — drama apie žmogų, bandantį pradėti gyvenimą iš naujo svetimame mieste. Aktorių ansamblio darbas čia vertas atskiro paminėjimo.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Andrzej Barański",
        "screenwriter": "Szymon Lis",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [
        "Vilniaus tarptautinis kino festivalis „Kino pavasaris“",
        "Tarptautinis Varšuvos kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "18:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": true,
          "note": "Festivalio atidarymo ceremonija ir pokalbis su filmo kūrėjais po seanso."
        },
        {
          "date": "2026-10-20",
          "time": "20:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": true,
          "note": "Festivalio atidarymo ceremonija ir pokalbis su filmo kūrėjais po seanso."
        },
        {
          "date": "2026-10-21",
          "time": "20:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": true,
          "note": "Festivalio atidarymo ceremonija ir pokalbis su filmo kūrėjais po seanso."
        },
        {
          "date": "2026-10-26",
          "time": "17:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": "Festivalio atidarymo ceremonija ir pokalbis su filmo kūrėjais po seanso."
        }
      ]
    },
    {
      "id": "ostatni-kadr",
      "title": "Paskutinis kadras",
      "originalTitle": "Ostatni kadr",
      "program": "specialieji",
      "author": null,
      "year": 2025,
      "duration": 95,
      "genre": "Dokumentinis",
      "director": "Maria Zmarz-Koczanowicz",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [
        "Uždarymo filmas"
      ],
      "url": "filmas.html?id=ostatni-kadr",
      "description": "„Paskutinis kadras“ (2025) — dokumentinis apie meilę, gimusią pačiu netinkamiausiu metu. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Maria Zmarz-Koczanowicz",
        "screenwriter": "Zofia Malinowska",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [],
      "festivals": [
        "Gdynės lenkų kino festivalis",
        "Karlovy Varų tarptautinis kino festivalis"
      ],
      "screenings": [
        {
          "date": "2026-10-24",
          "time": "16:00",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": true,
          "note": "Festivalio uždarymo ceremonija ir apdovanojimų įteikimas."
        },
        {
          "date": "2026-10-29",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": true,
          "note": "Festivalio uždarymo ceremonija ir apdovanojimų įteikimas."
        }
      ]
    },
    {
      "id": "kamienne-niebo",
      "title": "Akmeninis dangus",
      "originalTitle": "Kamienne niebo",
      "program": "retrospektyva",
      "author": "zielinski",
      "year": 1971,
      "duration": 98,
      "genre": "Drama",
      "director": "Marek Zieliński",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=kamienne-niebo",
      "description": "„Akmeninis dangus“ (1971) — drama apie paslaptį, kurią saugo trys šeimos kartos. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Marek Zieliński",
        "screenwriter": "Krzysztof Bednarek",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "18:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-21",
          "time": "20:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "17:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "dworzec",
      "title": "Traukinių stotis",
      "originalTitle": "Dworzec",
      "program": "retrospektyva",
      "author": "zielinski",
      "year": 1974,
      "duration": 86,
      "genre": "Drama",
      "director": "Marek Zieliński",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=dworzec",
      "description": "„Traukinių stotis“ (1974) — drama apie jauno žmogaus kelią tarp svajonių ir pareigos. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Marek Zieliński",
        "screenwriter": "Julia Wiśniewska",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "19:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "16:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "dzieci-wrzesnia",
      "title": "Rugsėjo vaikai",
      "originalTitle": "Dzieci września",
      "program": "retrospektyva",
      "author": "zielinski",
      "year": 1978,
      "duration": 104,
      "genre": "Karo drama",
      "director": "Marek Zieliński",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=dzieci-wrzesnia",
      "description": "„Rugsėjo vaikai“ (1978) — karo drama apie bendruomenę, kurią suvienija netikėta netektis. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Marek Zieliński",
        "screenwriter": "Adam Pawlak",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "18:30",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "20:30",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "cichy-brzeg",
      "title": "Tylusis krantas",
      "originalTitle": "Cichy brzeg",
      "program": "retrospektyva",
      "author": "zielinski",
      "year": 1983,
      "duration": 95,
      "genre": "Psichologinė drama",
      "director": "Marek Zieliński",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=cichy-brzeg",
      "description": "„Tylusis krantas“ (1983) — psichologinė drama apie tylų maištą prieš nusistovėjusią tvarką. Filmas, po kurio seanso norisi dar ilgai tylėti. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Marek Zieliński",
        "screenwriter": "Beata Sikora",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "18:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "19:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "16:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "miedziane-miasto",
      "title": "Vario miestas",
      "originalTitle": "Miedziane miasto",
      "program": "retrospektyva",
      "author": "zielinski",
      "year": 1989,
      "duration": 110,
      "genre": "Socialinė drama",
      "director": "Marek Zieliński",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=miedziane-miasto",
      "description": "„Vario miestas“ (1989) — socialinė drama apie atmintį ir tai, ką pasirenkame pamiršti. Aktorių ansamblio darbas čia vertas atskiro paminėjimo. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Marek Zieliński",
        "screenwriter": "Mateusz Król",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "18:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "20:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-23",
          "time": "20:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "17:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "listy-z-krakowa",
      "title": "Laiškai iš Krokuvos",
      "originalTitle": "Listy z Krakowa",
      "program": "retrospektyva",
      "author": "sobczak",
      "year": 1979,
      "duration": 92,
      "genre": "Drama",
      "director": "Agnieszka Sobczak",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=listy-z-krakowa",
      "description": "„Laiškai iš Krokuvos“ (1979) — drama apie šeimą, kurią netikėtai pasiveja ilgai slėpta praeitis. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Agnieszka Sobczak",
        "screenwriter": "Hanna Ostrowska",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "18:00",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "16:00",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "biala-sukienka",
      "title": "Balta suknelė",
      "originalTitle": "Biała sukienka",
      "program": "retrospektyva",
      "author": "sobczak",
      "year": 1984,
      "duration": 88,
      "genre": "Melodrama",
      "director": "Agnieszka Sobczak",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=biala-sukienka",
      "description": "„Balta suknelė“ (1984) — melodrama apie mažo miestelio bendruomenę, priverstą rinktis tarp tiesos ir ramybės. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Agnieszka Sobczak",
        "screenwriter": "Rafał Czajka",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "18:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-23",
          "time": "20:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "17:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "czwarty-pokoj",
      "title": "Ketvirtas kambarys",
      "originalTitle": "Czwarty pokój",
      "program": "retrospektyva",
      "author": "sobczak",
      "year": 1987,
      "duration": 101,
      "genre": "Psichologinė drama",
      "director": "Agnieszka Sobczak",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=czwarty-pokoj",
      "description": "„Ketvirtas kambarys“ (1987) — psichologinė drama apie dviejų kartų susidūrimą viename name. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Agnieszka Sobczak",
        "screenwriter": "Dorota Zawadzka",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "18:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-16",
          "time": "18:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-21",
          "time": "19:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "16:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "gra-cieni",
      "title": "Šešėlių žaidimas",
      "originalTitle": "Gra cieni",
      "program": "retrospektyva",
      "author": "sobczak",
      "year": 1991,
      "duration": 97,
      "genre": "Trileris",
      "director": "Agnieszka Sobczak",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=gra-cieni",
      "description": "„Šešėlių žaidimas“ (1991) — trileris apie moterį, po dvidešimties metų grįžtančią į gimtąjį miestą. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Agnieszka Sobczak",
        "screenwriter": "Szymon Lis",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-19",
          "time": "18:30",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "wieczorna-piesn",
      "title": "Vakaro daina",
      "originalTitle": "Wieczorna pieśń",
      "program": "retrospektyva",
      "author": "sobczak",
      "year": 1996,
      "duration": 93,
      "genre": "Drama",
      "director": "Agnieszka Sobczak",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=wieczorna-piesn",
      "description": "„Vakaro daina“ (1996) — drama apie draugystę, kuri išbandoma vieną lemtingą naktį. Filmas, po kurio seanso norisi dar ilgai tylėti. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Agnieszka Sobczak",
        "screenwriter": "Zofia Malinowska",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "18:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "19:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "16:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "kolejowy-romans",
      "title": "Geležinkelio romansas",
      "originalTitle": "Kolejowy romans",
      "program": "retrospektyva",
      "author": "grabowski",
      "year": 1968,
      "duration": 84,
      "genre": "Komedija",
      "director": "Tomasz Grabowski",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=kolejowy-romans",
      "description": "„Geležinkelio romansas“ (1968) — komedija apie žmogų, bandantį pradėti gyvenimą iš naujo svetimame mieste. Aktorių ansamblio darbas čia vertas atskiro paminėjimo. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Tomasz Grabowski",
        "screenwriter": "Krzysztof Bednarek",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "17:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "18:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "20:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "szary-wroclaw",
      "title": "Pilkasis Vroclavas",
      "originalTitle": "Szary Wrocław",
      "program": "retrospektyva",
      "author": "grabowski",
      "year": 1972,
      "duration": 99,
      "genre": "Drama",
      "director": "Tomasz Grabowski",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=szary-wroclaw",
      "description": "„Pilkasis Vroclavas“ (1972) — drama apie meilę, gimusią pačiu netinkamiausiu metu. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Tomasz Grabowski",
        "screenwriter": "Julia Wiśniewska",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "18:00",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "16:00",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "sezon-polowan",
      "title": "Medžioklės sezonas",
      "originalTitle": "Sezon polowań",
      "program": "retrospektyva",
      "author": "grabowski",
      "year": 1977,
      "duration": 106,
      "genre": "Politinė drama",
      "director": "Tomasz Grabowski",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=sezon-polowan",
      "description": "„Medžioklės sezonas“ (1977) — politinė drama apie paslaptį, kurią saugo trys šeimos kartos. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Tomasz Grabowski",
        "screenwriter": "Adam Pawlak",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-15",
          "time": "17:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "18:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "20:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "cisza-sniegu",
      "title": "Sniego tyla",
      "originalTitle": "Cisza śniegu",
      "program": "retrospektyva",
      "author": "grabowski",
      "year": 1982,
      "duration": 91,
      "genre": "Drama",
      "director": "Tomasz Grabowski",
      "country": "Lenkija",
      "ageRating": "N-7",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=cisza-sniegu",
      "description": "„Sniego tyla“ (1982) — drama apie jauno žmogaus kelią tarp svajonių ir pareigos. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Tomasz Grabowski",
        "screenwriter": "Beata Sikora",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "18:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-18",
          "time": "18:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-23",
          "time": "19:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-28",
          "time": "16:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "ostatnia-wieczerza",
      "title": "Paskutinė vakarienė",
      "originalTitle": "Ostatnia wieczerza",
      "program": "retrospektyva",
      "author": "grabowski",
      "year": 1988,
      "duration": 103,
      "genre": "Drama",
      "director": "Tomasz Grabowski",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=ostatnia-wieczerza",
      "description": "„Paskutinė vakarienė“ (1988) — drama apie bendruomenę, kurią suvienija netikėta netektis. Tikslus laikmečio portretas, kuriame kiekviena detalė turi reikšmę. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Tomasz Grabowski",
        "screenwriter": "Mateusz Król",
        "cast": [
          "Mateusz Kościukiewicz",
          "Zofia Wichłacz",
          "Andrzej Seweryn"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-21",
          "time": "18:30",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "20:30",
          "city": "Klaipėda",
          "venue": "Klaipėdos kultūros fabrikas",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "oczy-morza",
      "title": "Jūros akys",
      "originalTitle": "Oczy morza",
      "program": "retrospektyva",
      "author": "lipinska",
      "year": 1975,
      "duration": 89,
      "genre": "Poetinė drama",
      "director": "Ewa Lipińska",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=oczy-morza",
      "description": "„Jūros akys“ (1975) — poetinė drama apie tylų maištą prieš nusistovėjusią tvarką. Filmas, po kurio seanso norisi dar ilgai tylėti. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Ewa Lipińska",
        "screenwriter": "Hanna Ostrowska",
        "cast": [
          "Karolina Gruszka",
          "Dawid Ogrodnik",
          "Kinga Preis"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-18",
          "time": "18:00",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-24",
          "time": "19:00",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-29",
          "time": "16:00",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "bursztynowy-szlak",
      "title": "Gintaro kelias",
      "originalTitle": "Bursztynowy szlak",
      "program": "retrospektyva",
      "author": "lipinska",
      "year": 1980,
      "duration": 96,
      "genre": "Nuotykių drama",
      "director": "Ewa Lipińska",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=bursztynowy-szlak",
      "description": "„Gintaro kelias“ (1980) — nuotykių drama apie atmintį ir tai, ką pasirenkame pamiršti. Aktorių ansamblio darbas čia vertas atskiro paminėjimo. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Ewa Lipińska",
        "screenwriter": "Rafał Czajka",
        "cast": [
          "Eryk Kulm",
          "Michalina Łabacz",
          "Arkadiusz Jakubik"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-16",
          "time": "17:30",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-21",
          "time": "18:30",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-26",
          "time": "20:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "20:30",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "stroze-nocy",
      "title": "Nakties sargai",
      "originalTitle": "Stróże nocy",
      "program": "retrospektyva",
      "author": "lipinska",
      "year": 1985,
      "duration": 100,
      "genre": "Kriminalinė drama",
      "director": "Ewa Lipińska",
      "country": "Lenkija",
      "ageRating": "N-16",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=stroze-nocy",
      "description": "„Nakties sargai“ (1985) — kriminalinė drama apie šeimą, kurią netikėtai pasiveja ilgai slėpta praeitis. Kritikų vadinamas vienu ryškiausių pastarojo meto lenkų kino balsų. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Ewa Lipińska",
        "screenwriter": "Dorota Zawadzka",
        "cast": [
          "Maja Ostaszewska",
          "Piotr Głowacki",
          "Aleksandra Konieczna"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "16:00",
          "city": "Alytus",
          "venue": "Kino teatras „Dainava“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Multikino Vilnius",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "strona-lustra",
      "title": "Veidrodžio pusė",
      "originalTitle": "Strona lustra",
      "program": "retrospektyva",
      "author": "lipinska",
      "year": 1990,
      "duration": 94,
      "genre": "Psichologinė drama",
      "director": "Ewa Lipińska",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=strona-lustra",
      "description": "„Veidrodžio pusė“ (1990) — psichologinė drama apie mažo miestelio bendruomenę, priverstą rinktis tarp tiesos ir ramybės. Subtilus pasakojimas, balansuojantis tarp dramos ir šviesios ironijos. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Ewa Lipińska",
        "screenwriter": "Szymon Lis",
        "cast": [
          "Tomasz Kot",
          "Magdalena Boczarska",
          "Bartłomiej Topa"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-17",
          "time": "17:30",
          "city": "Mažeikiai",
          "venue": "Mažeikių kultūros centras",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-22",
          "time": "18:30",
          "city": "Kaunas",
          "venue": "Kino teatras „Romuva“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-27",
          "time": "20:30",
          "city": "Marijampolė",
          "venue": "Kino teatras „Spindulys“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    },
    {
      "id": "targ-rozany",
      "title": "Rožių turgus",
      "originalTitle": "Targ różany",
      "program": "retrospektyva",
      "author": "lipinska",
      "year": 1998,
      "duration": 102,
      "genre": "Tragikomedija",
      "director": "Ewa Lipińska",
      "country": "Lenkija",
      "ageRating": "N-13",
      "image": null,
      "badges": [],
      "url": "filmas.html?id=targ-rozany",
      "description": "„Rožių turgus“ (1998) — tragikomedija apie dviejų kartų susidūrimą viename name. Vizualiai įtaigus kūrinys, kuriame svarbiausia — tai, kas lieka neišsakyta. Seansuose rodoma restauruota kopija — reta proga pamatyti kūrinį didžiajame ekrane.",
      "trailer": "https://www.youtube.com/embed/ZpALdfikr5o",
      "crew": {
        "director": "Ewa Lipińska",
        "screenwriter": "Zofia Malinowska",
        "cast": [
          "Agata Buzek",
          "Jacek Braciak",
          "Sandra Drzymalska"
        ]
      },
      "awards": [],
      "festivals": [],
      "screenings": [
        {
          "date": "2026-10-14",
          "time": "16:00",
          "city": "Šalčininkai",
          "venue": "Šalčininkų kultūros centras",
          "ticketUrl": "#",
          "free": true,
          "note": null
        },
        {
          "date": "2026-10-19",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-20",
          "time": "18:00",
          "city": "Vilnius",
          "venue": "Kino centras „Skalvija“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        },
        {
          "date": "2026-10-25",
          "time": "19:00",
          "city": "Panevėžys",
          "venue": "Kino centras „Garsas“",
          "ticketUrl": "#",
          "free": false,
          "note": null
        }
      ]
    }
  ]
};

// Kino teatrų / savivaldybių logotipai (assets/img/); dark: true — baltas logo ant tamsios plytelės
window.VENUE_LOGOS = {
    'Multikino Vilnius': { src: 'partner-multikino.png' },
    'Kino centras „Skalvija“': { src: 'partner-skalvija.png' },
    'Kino teatras „Romuva“': { src: 'venue-romuva.png', dark: true },
    'Klaipėdos kultūros fabrikas': { src: 'venue-fabrikas.jpg' },
    'Kino centras „Garsas“': { src: 'venue-garsas.jpg' },
    'Kino teatras „Spindulys“': { src: 'venue-spindulys.png' },
    'Kino teatras „Dainava“': { src: 'venue-dainava.png' },
    'Šalčininkų kultūros centras': { src: 'venue-salcininkai.png' },
    'Mažeikių kultūros centras': { src: 'venue-mkc.png' }
};
