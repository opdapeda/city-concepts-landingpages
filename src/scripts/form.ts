// Kontaktformular: Tracking-Parameter übernehmen, 2 Schritte, Validierung (docs/tracking.md)
const form = document.getElementById('kontakt-form') as HTMLFormElement | null;

if (form) {
  const params = new URLSearchParams(location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'gclid'].forEach((k) => {
    const el = form.elements.namedItem(k) as HTMLInputElement | null;
    if (el && params.get(k)) el.value = params.get(k)!;
  });

  const step1 = document.getElementById('step-1')!;
  const step2 = document.getElementById('step-2')!;
  const label = document.getElementById('step-label')!;
  const errors = document.getElementById('form-errors')!;

  function show(step: 1 | 2) {
    step1.hidden = step !== 1;
    step2.hidden = step !== 2;
    label.textContent = `Schritt ${step} von 2`;
    (step === 1 ? step1 : step2).querySelector<HTMLElement>('input, button')?.focus();
  }
  document.getElementById('next')!.addEventListener('click', () => show(2));
  document.getElementById('back')!.addEventListener('click', () => show(1));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll<HTMLInputElement>('[required]')];
    const bad = fields.filter((f) => (f.type === 'checkbox' ? !f.checked : !f.checkValidity() || !f.value.trim()));
    fields.forEach((f) => f.removeAttribute('aria-invalid'));
    if (bad.length) {
      bad.forEach((f) => f.setAttribute('aria-invalid', 'true'));
      const names = bad.map((f) => (f.type === 'checkbox' ? 'Datenschutz-Zustimmung' : form.querySelector(`label[for="${f.id}"]`)!.textContent!.replace('*', '').trim()));
      errors.hidden = false;
      errors.textContent = `Bitte prüfen Sie: ${names.join(', ')}.`;
      errors.focus();
      bad[0].focus();
      return;
    }
    errors.hidden = true;
    // Ereignis vor der Weiterleitung; die Dankeseite ist zusätzlich das Matomo-Ziel
    track('form-submit', 'kontakt');
    // TODO: Versandweg offen (docs/entscheidungen.md). Bis dahin wird nichts gesendet.
    window.location.href = '/danke/';
  });
}

function track(action: string, position: string) {
  const w = window as unknown as { _paq?: unknown[][] };
  (w._paq = w._paq || []).push(['trackEvent', 'Landingpage', action, position]);
}
