// Header-Schatten, Scroll-Animationen, Parallax, Sticky-CTA, Tracking
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const w = window as unknown as { _paq?: unknown[][] };
const push = (...args: unknown[]) => (w._paq = w._paq || []).push(args);

// Header mit Schatten ab Scrollbeginn
const header = document.querySelector<HTMLElement>('.site-header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Einblenden beim Scrollen
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
}

// Leichte Parallax der Hero-Karten
if (!reduce) {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  let ticking = false;
  const update = () => {
    const y = Math.min(window.scrollY, 900);
    cards.forEach((c) => c.style.setProperty('--py', `${(-y * Number(c.dataset.parallax)).toFixed(1)}px`));
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
}

// Sticky-CTA (Mobile) ausblenden, solange der Kontaktbereich sichtbar ist
const sticky = document.querySelector<HTMLElement>('.sticky-cta');
const kontakt = document.getElementById('kontakt');
if (sticky && kontakt && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => sticky.classList.toggle('is-hidden', e.isIntersecting), { threshold: 0.1 }).observe(kontakt);
}

// Tracking: CTA-Klicks mit Position, Telefon, E-Mail (Matomo-Events, siehe docs/tracking.md)
document.addEventListener('click', (ev) => {
  const a = (ev.target as Element).closest<HTMLAnchorElement>('a');
  if (!a) return;
  const pos = a.dataset.trackPos;
  if (pos) push('trackEvent', 'CTA', 'click', pos);
  if (a.href.startsWith('tel:')) push('trackEvent', 'Kontakt', 'telefon', pos ?? 'link');
  if (a.href.startsWith('mailto:')) push('trackEvent', 'Kontakt', 'email', pos ?? 'link');
});
