// Kontaktformular: Tracking-Parameter übernehmen, Validierung (docs/tracking.md)
const form = document.getElementById('kontakt-form') as HTMLFormElement | null;

if (form) {
  const params = new URLSearchParams(location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'gclid'].forEach((k) => {
    const el = form.elements.namedItem(k) as HTMLInputElement | null;
    if (el && params.get(k)) el.value = params.get(k)!;
  });

  const errors = document.getElementById('form-errors')!;
  const other = document.getElementById('f-other') as HTMLInputElement;
  const otherField = document.getElementById('f-other-field')!;
  const otherText = document.getElementById('f-other-text') as HTMLInputElement;

  // „Etwas anderes“ blendet ein Freitextfeld für ein eigenes Thema ein
  other.addEventListener('change', () => {
    otherField.hidden = !other.checked;
    if (other.checked) otherText.focus();
    else otherText.value = '';
  });

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
