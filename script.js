// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky nav style
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.hero-inner, .about-card, .two-col > div, .media-card, .rig, .shop-inner, .contact-form'
).forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Signup form (placeholder — wire to your provider later)
const signup = document.getElementById('signup-form');
const note = document.getElementById('signup-note');
if (signup) {
  signup.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = signup.querySelector('input[type="email"]');
    if (!input.value || !input.checkValidity()) {
      note.textContent = 'Drop a real email and we\'ll get you on the list.';
      note.style.color = '#d97a2c';
      return;
    }
    note.textContent = 'You\'re on the list. Watch your inbox at base camp.';
    note.style.color = '#9ec48b';
    input.value = '';
  });
}

// Contact form (placeholder)
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.currentTarget.querySelector('button');
  const original = btn.textContent;
  btn.textContent = 'Message Sent — Thanks!';
  btn.disabled = true;
  e.currentTarget.reset();
  setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3500);
});
