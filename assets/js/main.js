// Mobilus meniu
const header = document.querySelector('.site-header');
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');

toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open);
});

nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    }
});

// Miestų filtras — filmai ir tvarkaraštis
const pills = document.querySelectorAll('.pill');
const movies = document.querySelectorAll('.movie');
const rows = document.querySelectorAll('.schedule tbody tr');
const emptyMsg = document.getElementById('movies-empty');

pills.forEach((pill) => {
    pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');

        const city = pill.dataset.city;
        let visible = 0;

        movies.forEach((movie) => {
            const show = city === 'visi' || movie.dataset.cities.split(' ').includes(city);
            movie.hidden = !show;
            if (show) visible++;
        });

        rows.forEach((row) => {
            row.hidden = !(city === 'visi' || row.dataset.city === city);
        });

        emptyMsg.hidden = visible > 0;
    });
});
