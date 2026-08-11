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

// Filmų slideris — strėlytės (naudoja ir pradžios, ir filmo puslapis)
window.initSlider = function () {
    const slider = document.getElementById('films-slider');
    const prev = document.getElementById('films-prev');
    const next = document.getElementById('films-next');
    if (!slider || !prev || !next) return;

    const step = () => {
        const card = slider.querySelector('.movie');
        const gap = parseFloat(getComputedStyle(slider).gap) || 28;
        return card ? card.getBoundingClientRect().width + gap : 320;
    };

    prev.addEventListener('click', () => slider.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => slider.scrollBy({ left: step(), behavior: 'smooth' }));

    const syncArrows = () => {
        prev.disabled = slider.scrollLeft <= 2;
        next.disabled = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 2;
    };
    slider.addEventListener('scroll', syncArrows, { passive: true });
    window.addEventListener('resize', syncArrows);
    syncArrows();
};

window.initSlider();
