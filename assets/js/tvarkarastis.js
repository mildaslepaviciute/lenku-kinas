// Tvarkaraštis — seansų sąrašas iš FILMS_FEED su miesto ir datos filtrais
(function () {
    const feed = window.FILMS_FEED;
    const listEl = document.getElementById('schedule-list');
    const cityFilterEl = document.getElementById('city-filter');
    const dateClear = document.getElementById('date-clear');
    const pickerEl = document.getElementById('datepicker');
    const dateToggle = document.getElementById('date-toggle');
    const dateToggleText = document.getElementById('date-toggle-text');
    const datePopover = document.getElementById('date-popover');

    const CITIES = ['Vilnius', 'Kaunas', 'Klaipėda', 'Panevėžys', 'Marijampolė', 'Alytus', 'Šalčininkai', 'Mažeikiai'];

    // Kino teatrų / savivaldybių logotipai (assets/img/); dark: true — baltas logo ant tamsios plytelės
    const VENUE_LOGOS = {
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

    // Suplokštinam: kiekvienas seansas + filmo nuoroda
    const screenings = [];
    feed.films.forEach((film) => {
        film.screenings.forEach((s) => screenings.push({ film: film, s: s }));
    });
    screenings.sort((a, b) => (a.s.date + a.s.time).localeCompare(b.s.date + b.s.time));

    // Festivalio dienos — tik jos pasirenkamos kalendoriuje
    const FESTIVAL_DATES = Array.from(new Set(screenings.map((i) => i.s.date))).sort();

    const state = { city: 'visi', date: '' };

    const MONTHS = ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio',
        'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio'];
    const MONTHS_NOM = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis',
        'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
    const WEEKDAYS = ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis',
        'ketvirtadienis', 'penktadienis', 'šeštadienis'];
    const WEEKDAYS_SHORT = ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št', 'Sk'];

    function fmtDate(iso) {
        const d = new Date(iso + 'T12:00:00');
        return MONTHS[d.getMonth()] + ' ' + d.getDate() + ' d., ' + WEEKDAYS[d.getDay()];
    }

    function esc(str) {
        return String(str).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    function matches(item) {
        return (state.city === 'visi' || item.s.city === state.city) &&
               (!state.date || item.s.date === state.date);
    }

    // --- Filtrai ---

    function pill(label, count, active, onClick) {
        const btn = document.createElement('button');
        btn.className = 'pill' + (active ? ' is-active' : '');
        btn.innerHTML = label + (count != null ? ' <span class="pill-count">' + count + '</span>' : '');
        btn.addEventListener('click', onClick);
        return btn;
    }

    function countFor(city) {
        return screenings.filter((i) =>
            (city === 'visi' || i.s.city === city) && (!state.date || i.s.date === state.date)
        ).length;
    }

    function renderFilters() {
        cityFilterEl.innerHTML = '';
        const cityLabel = document.createElement('span');
        cityLabel.className = 'subfilter-label';
        cityLabel.textContent = 'Miestas:';
        cityFilterEl.appendChild(cityLabel);
        const group = document.createElement('div');
        group.className = 'pill-group';
        cityFilterEl.appendChild(group);
        group.appendChild(pill('Visi', countFor('visi'), state.city === 'visi', () => {
            state.city = 'visi';
            update();
        }));
        CITIES.forEach((c) => {
            group.appendChild(pill(c, countFor(c), state.city === c, () => {
                state.city = c;
                update();
            }));
        });
        dateClear.hidden = !state.date;
    }

    // --- Sąrašas ---

    function row(item) {
        const film = item.film;
        const s = item.s;
        const div = document.createElement('div');
        div.className = 'screening screening--schedule';

        const cta = s.free
            ? '<span class="free-label">Įėjimas nemokamas</span>'
            : '<a class="btn btn-solid btn-small" href="' + esc(s.ticketUrl) + '">Pirkti bilietą</a>';

        div.innerHTML =
            '<span class="screening-time">' + esc(s.time) + '</span>' +
            '<span class="screening-film">' +
            '<a href="' + esc(film.url) + '">' + esc(film.title) + '</a>' +
            '<small>' + film.year + ' · ' + esc(film.genre) + ' · ' + film.duration + ' min.</small>' +
            (s.note ? '<em class="screening-note">' + esc(s.note) + '</em>' : '') +
            '</span>' +
            '<span class="screening-place">' +
            (function () {
                const logo = VENUE_LOGOS[s.venue];
                if (!logo) return '<span class="venue-logo-slot"></span>';
                return '<span class="venue-logo-slot' + (logo.dark ? ' venue-logo-slot--dark' : '') + '">' +
                    '<img class="venue-logo" src="assets/img/' + logo.src + '" alt="' + esc(s.venue) + '" loading="lazy">' +
                    '</span>';
            })() +
            '<span class="screening-place-text"><strong>' + esc(s.city) + '</strong>' + esc(s.venue) + '</span>' +
            '</span>' +
            cta;
        return div;
    }

    function renderList() {
        listEl.innerHTML = '';
        const visible = screenings.filter(matches);

        if (!visible.length) {
            listEl.innerHTML = '<p class="movies-empty">Pagal pasirinktus kriterijus seansų nėra — pabandykite kitą datą ar miestą.</p>';
            return;
        }

        let currentDate = null;
        let dayList = null;
        visible.forEach((item) => {
            if (item.s.date !== currentDate) {
                currentDate = item.s.date;
                const head = document.createElement('div');
                head.className = 'group-head group-head--sub sched-day';
                head.innerHTML = '<h2>' + fmtDate(currentDate) + '</h2>';
                listEl.appendChild(head);
                dayList = document.createElement('div');
                dayList.className = 'screenings';
                listEl.appendChild(dayList);
            }
            dayList.appendChild(row(item));
        });
    }

    function update() {
        renderFilters();
        renderCalendar();
        renderToggle();
        renderList();
    }

    // --- Custom datos pasirinkimas ---

    function fmtShort(iso) {
        const d = new Date(iso + 'T12:00:00');
        const m = MONTHS[d.getMonth()];
        return m.charAt(0).toUpperCase() + m.slice(1) + ' ' + d.getDate() + ' d.';
    }

    function renderToggle() {
        dateToggleText.textContent = state.date ? fmtShort(state.date) : 'Pasirinkti datą';
        dateToggle.classList.toggle('has-value', !!state.date);
    }

    function renderCalendar() {
        datePopover.innerHTML = '';
        const dateSet = new Set(FESTIVAL_DATES);

        // Mėnesiai, kuriuose vyksta festivalis
        const months = Array.from(new Set(FESTIVAL_DATES.map((d) => d.slice(0, 7)))).sort();

        months.forEach((ym) => {
            const year = +ym.slice(0, 4);
            const month = +ym.slice(5, 7) - 1;
            const first = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const lead = (first.getDay() + 6) % 7; // savaitė nuo pirmadienio

            const monthEl = document.createElement('div');
            monthEl.className = 'datepicker-month';

            const title = document.createElement('p');
            title.className = 'datepicker-title';
            title.textContent = year + ' m. ' + MONTHS_NOM[month].toLowerCase();
            monthEl.appendChild(title);

            const grid = document.createElement('div');
            grid.className = 'datepicker-grid';

            WEEKDAYS_SHORT.forEach((w) => {
                const el = document.createElement('span');
                el.className = 'datepicker-wd';
                el.textContent = w;
                grid.appendChild(el);
            });

            for (let i = 0; i < lead; i++) {
                grid.appendChild(document.createElement('span'));
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const iso = ym + '-' + String(day).padStart(2, '0');
                if (dateSet.has(iso)) {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'datepicker-day' + (state.date === iso ? ' is-selected' : '');
                    btn.textContent = day;
                    btn.dataset.date = iso;
                    btn.setAttribute('aria-pressed', state.date === iso ? 'true' : 'false');
                    btn.setAttribute('aria-label', fmtDate(iso));
                    btn.addEventListener('click', () => {
                        state.date = state.date === iso ? '' : iso;
                        closePicker();
                        update();
                    });
                    grid.appendChild(btn);
                } else {
                    const el = document.createElement('span');
                    el.className = 'datepicker-day is-off';
                    el.textContent = day;
                    el.setAttribute('aria-hidden', 'true');
                    grid.appendChild(el);
                }
            }

            monthEl.appendChild(grid);
            datePopover.appendChild(monthEl);
        });

        const hint = document.createElement('p');
        hint.className = 'datepicker-hint';
        hint.textContent = 'Galima rinktis tik festivalio dienas';
        datePopover.appendChild(hint);
    }

    function openPicker() {
        datePopover.hidden = false;
        dateToggle.setAttribute('aria-expanded', 'true');
        const target = datePopover.querySelector('.datepicker-day.is-selected') ||
            datePopover.querySelector('button.datepicker-day');
        if (target) target.focus();
    }

    function closePicker(refocus) {
        if (datePopover.hidden) return;
        datePopover.hidden = true;
        dateToggle.setAttribute('aria-expanded', 'false');
        if (refocus) dateToggle.focus();
    }

    dateToggle.addEventListener('click', () => {
        datePopover.hidden ? openPicker() : closePicker();
    });

    // Rodyklėmis vaikštoma tik po pasirenkamas dienas, Escape uždaro
    datePopover.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePicker(true);
            return;
        }
        const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
        if (!step || !document.activeElement.dataset || !document.activeElement.dataset.date) return;
        e.preventDefault();
        const days = Array.from(datePopover.querySelectorAll('button.datepicker-day'));
        const idx = FESTIVAL_DATES.indexOf(document.activeElement.dataset.date);
        const next = Math.min(Math.max(idx + step, 0), days.length - 1);
        if (days[next]) days[next].focus();
    });

    document.addEventListener('click', (e) => {
        if (!pickerEl.contains(e.target)) closePicker();
    });

    dateClear.addEventListener('click', () => {
        state.date = '';
        update();
    });

    update();
})();
