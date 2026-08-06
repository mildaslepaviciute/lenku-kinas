// Repertuaro atvaizdavimas iš FILMS_FEED (assets/data/films.js)
(function () {
    const feed = window.FILMS_FEED;
    const listEl = document.getElementById('film-list');
    const programFilterEl = document.getElementById('program-filter');
    const authorFilterEl = document.getElementById('author-filter');

    const state = { program: 'visi', author: 'visi' };

    const retro = feed.programs.find((p) => p.id === 'retrospektyva');

    function filmsOf(programId, authorId) {
        return feed.films.filter((f) =>
            f.program === programId && (!authorId || authorId === 'visi' || f.author === authorId)
        );
    }

    // --- Filtrai ---

    function pill(label, count, active, onClick) {
        const btn = document.createElement('button');
        btn.className = 'pill' + (active ? ' is-active' : '');
        btn.innerHTML = label + (count != null ? ' <span class="pill-count">' + count + '</span>' : '');
        btn.addEventListener('click', onClick);
        return btn;
    }

    function renderFilters() {
        programFilterEl.innerHTML = '';
        programFilterEl.appendChild(pill('Visi filmai', feed.films.length, state.program === 'visi', () => {
            state.program = 'visi';
            state.author = 'visi';
            update();
        }));
        feed.programs.forEach((p) => {
            programFilterEl.appendChild(pill(p.title, filmsOf(p.id).length, state.program === p.id, () => {
                state.program = p.id;
                state.author = 'visi';
                update();
            }));
        });

        // Antras lygis — retrospektyvų režisieriai
        authorFilterEl.hidden = state.program !== 'retrospektyva';
        Array.from(authorFilterEl.querySelectorAll('.pill')).forEach((el) => el.remove());
        if (!authorFilterEl.hidden) {
            authorFilterEl.appendChild(pill('Visi režisieriai', null, state.author === 'visi', () => {
                state.author = 'visi';
                update();
            }));
            retro.authors.forEach((a) => {
                authorFilterEl.appendChild(pill(a.name, filmsOf('retrospektyva', a.id).length, state.author === a.id, () => {
                    state.author = a.id;
                    update();
                }));
            });
        }
    }

    // --- Kortelės ---

    const TONES = 5;
    let toneSeq = 0;

    function card(film) {
        const a = document.createElement('a');
        a.className = 'movie';
        a.href = film.url || '#';

        const media = document.createElement('figure');
        media.className = 'movie-media';
        if (film.image) {
            const img = document.createElement('img');
            img.src = film.image;
            img.alt = 'Kadras iš filmo „' + film.title + '“';
            img.loading = 'lazy';
            media.appendChild(img);
        } else {
            media.classList.add('movie-media--ph', 'tone-' + (toneSeq++ % TONES + 1));
            const ph = document.createElement('span');
            ph.className = 'ph-title';
            ph.textContent = film.originalTitle;
            const phYear = document.createElement('span');
            phYear.className = 'ph-year';
            phYear.textContent = film.year;
            media.append(ph, phYear);
        }

        if (film.badges.length) {
            const badges = document.createElement('span');
            badges.className = 'movie-badges';
            film.badges.forEach((b) => {
                const chip = document.createElement('span');
                chip.className = 'badge';
                chip.textContent = b;
                badges.appendChild(chip);
            });
            media.appendChild(badges);
        }

        const tag = document.createElement('figcaption');
        tag.className = 'movie-tag';
        tag.textContent = film.genre;
        media.appendChild(tag);

        const body = document.createElement('div');
        body.className = 'movie-body';
        body.innerHTML =
            '<h3>' + film.title + ' <span>(' + film.originalTitle + ')</span></h3>' +
            '<p class="movie-meta">' + film.year + ' · ' + film.duration + ' min. · rež. ' + film.director + '</p>' +
            '<span class="movie-more">Plačiau</span>';

        a.append(media, body);
        return a;
    }

    function grid(films) {
        const g = document.createElement('div');
        g.className = 'movies movies-repertoire';
        films.forEach((f) => g.appendChild(card(f)));
        return g;
    }

    function groupHead(title, description, count, sub) {
        const head = document.createElement('div');
        head.className = sub ? 'group-head group-head--sub' : 'group-head';
        head.innerHTML =
            '<h2>' + title + ' <span class="group-count">' + count + '</span></h2>' +
            (description ? '<p>' + description + '</p>' : '');
        return head;
    }

    // --- Sąrašas ---

    function renderList() {
        listEl.innerHTML = '';
        toneSeq = 0;

        const grouped = state.program === 'visi';
        const programs = grouped ? feed.programs : feed.programs.filter((p) => p.id === state.program);

        programs.forEach((p) => {
            if (p.id === 'retrospektyva') {
                const authors = state.author === 'visi' ? retro.authors : retro.authors.filter((a) => a.id === state.author);
                if (grouped || state.author === 'visi') {
                    listEl.appendChild(groupHead(p.title, p.description, filmsOf(p.id, state.author).length));
                    authors.forEach((a) => {
                        const films = filmsOf(p.id, a.id);
                        listEl.appendChild(groupHead(a.name, null, films.length, true));
                        listEl.appendChild(grid(films));
                    });
                } else {
                    const a = authors[0];
                    listEl.appendChild(groupHead(p.title + ' — ' + a.name, p.description, filmsOf(p.id, a.id).length));
                    listEl.appendChild(grid(filmsOf(p.id, a.id)));
                }
            } else {
                const films = filmsOf(p.id);
                listEl.appendChild(groupHead(p.title, p.description, films.length));
                listEl.appendChild(grid(films));
            }
        });
    }

    function update() {
        renderFilters();
        renderList();
    }

    update();
})();
