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

  // Fehlermeldung je Feld: Text (nicht nur Farbe), per aria-describedby mit dem Feld verknüpft
  const clearError = (f: HTMLInputElement) => {
    f.removeAttribute('aria-invalid');
    const id = `${f.id}-err`;
    document.getElementById(id)?.remove();
    const rest = (f.getAttribute('aria-describedby') || '').split(' ').filter((t) => t && t !== id);
    if (rest.length) f.setAttribute('aria-describedby', rest.join(' '));
    else f.removeAttribute('aria-describedby');
  };
  const showError = (f: HTMLInputElement, text: string) => {
    const id = `${f.id}-err`;
    const msg = document.createElement('p');
    msg.id = id;
    msg.className = 'field__error small';
    msg.textContent = text;
    // Bei der Checkbox steht die Meldung unter dem ganzen Zeilenelement
    (f.closest('.field--check') || f).after(msg);
    f.setAttribute('aria-invalid', 'true');
    f.setAttribute('aria-describedby', [...(f.getAttribute('aria-describedby') || '').split(' ').filter(Boolean), id].join(' '));
  };
  const labelOf = (f: HTMLInputElement) => form.querySelector(`label[for="${f.id}"]`)!.textContent!.replace('*', '').trim();
  const messageFor = (f: HTMLInputElement) => {
    if (f.type === 'checkbox') return 'Fehler: Bitte stimmen Sie der Datenschutzerklärung zu.';
    if (f.value.trim() && f.type === 'email') return 'Fehler: Bitte geben Sie eine gültige E-Mail-Adresse an.';
    return `Fehler: Bitte füllen Sie das Feld „${labelOf(f)}“ aus.`;
  };
  // Beim Korrigieren verschwindet die Meldung des jeweiligen Feldes
  form.querySelectorAll<HTMLInputElement>('[required]').forEach((f) => f.addEventListener(f.type === 'checkbox' ? 'change' : 'input', () => clearError(f)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll<HTMLInputElement>('[required]')];
    const bad = fields.filter((f) => (f.type === 'checkbox' ? !f.checked : !f.checkValidity() || !f.value.trim()));
    fields.forEach(clearError);
    if (bad.length) {
      bad.forEach((f) => showError(f, messageFor(f)));
      const names = bad.map((f) => (f.type === 'checkbox' ? 'Datenschutz-Zustimmung' : labelOf(f)));
      errors.hidden = false;
      errors.textContent = `Bitte prüfen Sie: ${names.join(', ')}.`;
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
