// Projekt-Overlays: öffnen/schließen, Bildgalerie, Tracking
const w = window as unknown as { _paq?: unknown[][] };
const push = (...args: unknown[]) => (w._paq = w._paq || []).push(args);
const root = document.documentElement;
let opener: HTMLElement | null = null;

document.querySelectorAll<HTMLButtonElement>('[data-open-projekt]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.openProjekt!;
    const dlg = document.getElementById(`projekt-${id}`) as HTMLDialogElement | null;
    if (!dlg) return;
    opener = btn;
    dlg.showModal();
    root.classList.add('dlg-lock');
    dlg.querySelector<HTMLElement>('.pdlg__panel')?.scrollTo(0, 0);
    push('trackEvent', 'Projekt', 'oeffnen', id);
  });
});

document.querySelectorAll<HTMLDialogElement>('dialog.pdlg').forEach((dlg) => {
  dlg.addEventListener('close', () => {
    root.classList.remove('dlg-lock');
    opener?.focus({ preventScroll: true });
  });
  // Klick auf den abgedunkelten Hintergrund (außerhalb des Panels) schließt
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', () => dlg.close()));

  const slides = [...dlg.querySelectorAll<HTMLElement>('[data-slide]')];
  const thumbs = [...dlg.querySelectorAll<HTMLButtonElement>('[data-thumb]')];
  thumbs.forEach((t) => t.addEventListener('click', () => {
    const i = Number(t.dataset.thumb);
    slides.forEach((s, n) => { s.hidden = n !== i; });
    thumbs.forEach((b, n) => (n === i ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current')));
  }));
});
