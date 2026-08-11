// Filmo vidinis puslapis — turinys iš FILMS_FEED pagal ?id=
(function () {
    const feed = window.FILMS_FEED;
    const root = document.getElementById('film-page');
    const id = new URLSearchParams(location.search).get('id');
    const film = feed.films.find((f) => f.id === id) || null;

    function esc(s) {
        return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    if (!film) {
        root.innerHTML =
            '<section class="page-hero"><div class="wrap">' +
            '<h1>Filmas nerastas</h1>' +
            '<p class="lead">Toks filmas programoje nerastas — grįžkite į repertuarą ir pasirinkite iš sąrašo.</p>' +
            '<p><a class="btn btn-solid" href="repertuaras.html">Į repertuarą</a></p>' +
            '</div></section>';
        return;
    }

    document.title = film.title + ' — Lenkų kino festivalis 2026';

    const program = feed.programs.find((p) => p.id === film.program);
    const author = film.author && program.authors ? program.authors.find((a) => a.id === film.author) : null;

    const MONTHS = ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio',
        'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio'];
    const WEEKDAYS = ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis',
        'ketvirtadienis', 'penktadienis', 'šeštadienis'];

    function fmtDate(iso) {
        const d = new Date(iso + 'T12:00:00');
        return MONTHS[d.getMonth()] + ' ' + d.getDate() + ' d., ' + WEEKDAYS[d.getDay()];
    }

    // --- Hero ---

    const tone = (film.id.length + film.year) % 5 + 1;
    const poster = film.image
        ? '<img src="' + esc(film.image) + '" alt="Kadras iš filmo „' + esc(film.title) + '“">'
        : '<div class="film-poster-ph tone-' + tone + '"><span class="ph-title">' + esc(film.originalTitle) + '</span>' +
          '<span class="ph-year">' + film.year + '</span></div>';

    const badges = film.badges.map((b) => '<span class="badge">' + esc(b) + '</span>').join('');

    const heroHtml =
        '<section class="film-hero">' +
        '<div class="wrap film-hero_grid">' +
        '<div class="film-hero_copy">' +
        '<p class="eyebrow"><a href="repertuaras.html">Repertuaras</a> / ' + esc(program.title) +
        (author ? ' — ' + esc(author.name) : '') + '</p>' +
        '<h1>' + esc(film.title) + '</h1>' +
        '<p class="film-orig">' + esc(film.originalTitle) + '</p>' +
        (badges ? '<p class="film-badges">' + badges + '</p>' : '') +
        '<dl class="film-meta">' +
        '<div><dt>Metai</dt><dd>' + film.year + '</dd></div>' +
        '<div><dt>Šalis</dt><dd>' + esc(film.country) + '</dd></div>' +
        '<div><dt>Trukmė</dt><dd>' + film.duration + ' min.</dd></div>' +
        '<div><dt>Žanras</dt><dd>' + esc(film.genre) + '</dd></div>' +
        '<div><dt>Režisierius</dt><dd>' + esc(film.director) + '</dd></div>' +
        '<div><dt>Amžiaus cenzas</dt><dd>' + esc(film.ageRating) + '</dd></div>' +
        '</dl>' +
        '<a class="btn btn-solid" href="#seansai">Peržiūrėti filmo seansus</a>' +
        '</div>' +
        '<div class="film-poster">' + poster + '</div>' +
        '</div>' +
        '</section>';

    // --- Daugiau informacijos ---

    const trailer = film.trailer
        ? '<div class="film-trailer"><iframe src="' + esc(film.trailer) + '" title="Anonsas" loading="lazy" allowfullscreen></iframe></div>'
        : '<div class="film-trailer film-trailer--ph tone-4"><span class="play" aria-hidden="true"></span><span>Anonsas — netrukus</span></div>';

    const aside =
        '<aside class="film-aside">' +
        '<div class="aside-block"><h3>Kūrybinė komanda</h3><dl class="film-meta film-meta--col">' +
        '<div><dt>Režisierius</dt><dd>' + esc(film.crew.director) + '</dd></div>' +
        '<div><dt>Scenarijus</dt><dd>' + esc(film.crew.screenwriter) + '</dd></div>' +
        '<div><dt>Vaidina</dt><dd>' + film.crew.cast.map(esc).join(', ') + '</dd></div>' +
        '</dl></div>' +
        (film.awards.length
            ? '<div class="aside-block"><h3>Apdovanojimai</h3><ul>' +
              film.awards.map((a) => '<li>' + esc(a) + '</li>').join('') + '</ul></div>'
            : '') +
        (film.festivals.length
            ? '<div class="aside-block"><h3>Festivaliai</h3><ul>' +
              film.festivals.map((f) => '<li>' + esc(f) + '</li>').join('') + '</ul></div>'
            : '') +
        '</aside>';

    const infoHtml =
        '<section class="section film-info">' +
        '<div class="wrap film-info_grid">' +
        '<div class="film-info_main">' +
        '<div class="group-head"><h2>Apie filmą</h2></div>' +
        '<p class="film-description">' + esc(film.description) + '</p>' +
        trailer +
        '</div>' +
        aside +
        '</div>' +
        '</section>';

    // --- Artimiausi seansai — tokia pati kortelė kaip tvarkaraštyje ---

    const VENUE_LOGOS = window.VENUE_LOGOS || {};

    function venueSlot(venue) {
        const logo = VENUE_LOGOS[venue];
        if (!logo) return '<span class="venue-logo-slot"></span>';
        return '<span class="venue-logo-slot' + (logo.dark ? ' venue-logo-slot--dark' : '') + '">' +
            '<img class="venue-logo" src="assets/img/' + logo.src + '" alt="' + esc(venue) + '" loading="lazy">' +
            '</span>';
    }

    const rows = film.screenings.map((s) => {
        const cta = s.free
            ? '<span class="free-label">Įėjimas nemokamas</span>'
            : '<a class="btn btn-solid btn-small" href="' + esc(s.ticketUrl) + '">Pirkti bilietą</a>';
        return '<div class="screening screening--schedule">' +
            '<span class="screening-time">' + esc(s.time) + '</span>' +
            '<span class="screening-film">' +
            '<span class="screening-date">' + fmtDate(s.date) + '</span>' +
            (s.note ? '<em class="screening-note">' + esc(s.note) + '</em>' : '') +
            '</span>' +
            '<span class="screening-place">' + venueSlot(s.venue) +
            '<span class="screening-place-text"><strong>' + esc(s.city) + '</strong>' + esc(s.venue) + '</span>' +
            '</span>' +
            cta +
            '</div>';
    }).join('');

    const screeningsHtml =
        '<section class="section section-alt" id="seansai">' +
        '<div class="wrap">' +
        '<div class="section-head"><h2>Artimiausi seansai</h2></div>' +
        '<div class="screenings">' + rows + '</div>' +
        '</div>' +
        '</section>';

    root.innerHTML = heroHtml + infoHtml + screeningsHtml;
})();
