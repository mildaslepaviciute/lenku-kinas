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

// Versijų perjungiklis
// partneriai: v1 — juosta po skaičių, v2 — blokas prieš footer, v3 — juosta virš navbaro
// skaiciai:   v1 — kortelės, v2 — gradiento juosta
// fonas:      v1 — rausvas popierius, v2 — neutrali pilka, v3 — greige
const switcherBtns = document.querySelectorAll('.switcher button');
const VARIANTS = ['v1', 'v2', 'v3', 'v4'];

function setVariant(group, variant) {
    VARIANTS.forEach((v) => document.body.classList.remove(group + '-' + v));
    document.body.classList.add(group + '-' + variant);
    switcherBtns.forEach((b) => {
        if (b.dataset.group === group) b.classList.toggle('is-active', b.dataset.variant === variant);
    });
    try { localStorage.setItem('variant-' + group, variant); } catch (e) {}
}

switcherBtns.forEach((btn) => {
    btn.addEventListener('click', () => setVariant(btn.dataset.group, btn.dataset.variant));
});

try { localStorage.removeItem('variant-sriftas'); } catch (e) {}

['partneriai', 'skaiciai', 'fonas'].forEach((group) => {
    try {
        const saved = localStorage.getItem('variant-' + group);
        if (VARIANTS.includes(saved) && document.querySelector('.switcher button[data-group="' + group + '"][data-variant="' + saved + '"]')) {
            setVariant(group, saved);
        }
    } catch (e) {}
});
