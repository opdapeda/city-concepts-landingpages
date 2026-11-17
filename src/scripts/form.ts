// Kontaktformulare (Anfrage + Rückruf): Umschalter, Tracking-Parameter, Validierung (docs/tracking.md)
const params = new URLSearchParams(location.search);

// --- Umschalter Anfrage / Rückruf (ARIA-Tabs, Pfeiltasten) ---
const tabs = [...document.querySelectorAll<HTMLButtonElement>('.form-tabs [role="tab"]')];
const selectTab = (tab: HTMLButtonElement, focus = false) => {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')!)!.hidden = !on;
  });
  if (focus) tab.focus();
};
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (e) => {
    const k = e.key;
    if (k !== 'ArrowRight' && k !== 'ArrowLeft' && k !== 'Home' && k !== 'End') return;
    e.preventDefault();
    const next = k === 'Home' ? 0 : k === 'End' ? tabs.length - 1 : (i + (k === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next], true);
  });
});
// Direktlink: …?formular=rueckruf oder #rueckruf öffnet den Rückruf-Tab
if (params.get('formular') === 'rueckruf' || location.hash === '#rueckruf') {
  const t = document.getElementById('tab-rueckruf') as HTMLButtonElement | null;
  if (t) selectTab(t);
}

document.querySelectorAll<HTMLFormElement>('form.form').forEach(setupForm);

function setupForm(form: HTMLFormElement) {
  const kind = form.id === 'rueckruf-form' ? 'rueckruf' : 'kontakt';

  ['utm_source', 'utm_medium', 'utm_campaign', 'gclid'].forEach((k) => {
    const el = form.elements.namedItem(k) as HTMLInputElement | null;
    if (el && params.get(k)) el.value = params.get(k)!;
  });

  const errors = form.querySelector<HTMLElement>('.form__errors')!;

  // „Etwas anderes“ blendet ein Freitextfeld für ein eigenes Thema ein (nur Anfrage-Formular)
  const other = form.querySelector<HTMLInputElement>('#f-other');
  const otherField = form.querySelector<HTMLElement>('#f-other-field');
  const otherText = form.querySelector<HTMLInputElement>('#f-other-text');
  if (other && otherField && otherText) {
    other.addEventListener('change', () => {
      otherField.hidden = !other.checked;
      if (other.checked) otherText.focus();
      else otherText.value = '';
    });
  }

  // Wunschtag im Rückruf-Formular: nicht in der Vergangenheit
  const datum = form.querySelector<HTMLInputElement>('input[type="date"]');
  if (datum) {
    const d = new Date();
    datum.min = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  // Fehlermeldung je Feld: Text (nicht nur Farbe), per aria-describedby mit dem Feld verknüpft
  type El = HTMLElement & { id: string };
  const clearError = (f: El) => {
    f.removeAttribute('aria-invalid');
    const id = `${f.id}-err`;
    document.getElementById(id)?.remove();
    const rest = (f.getAttribute('aria-describedby') || '').split(' ').filter((t) => t && t !== id);
    if (rest.length) f.setAttribute('aria-describedby', rest.join(' '));
    else f.removeAttribute('aria-describedby');
  };
  const showError = (f: El, text: string) => {
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
  const labelText = (f: El) => (form.querySelector(`label[for="${f.id}"]`) || form.querySelector(`#${f.id}-l`))!.textContent!.replace('*', '').trim();

  // Pflichtfelder: normale Inputs plus die Zeit-Radiogruppe (Rückruf)
  const radioGroup = form.querySelector<El>('[role="radiogroup"]');
  const radios = radioGroup ? [...radioGroup.querySelectorAll<HTMLInputElement>('input[type="radio"]')] : [];
  const isWeekend = (v: string) => { const day = new Date(`${v}T12:00:00`).getDay(); return day === 0 || day === 6; };

  const messageFor = (f: El) => {
    const i = f as HTMLInputElement;
    if (i.type === 'checkbox') return 'Fehler: Bitte stimmen Sie der Datenschutzerklärung zu.';
    if (f === radioGroup) return 'Fehler: Bitte wählen Sie ein Zeitfenster aus.';
    if (i.type === 'email' && i.value.trim()) return 'Fehler: Bitte geben Sie eine gültige E-Mail-Adresse an.';
    if (i.type === 'tel' && i.value.trim()) return 'Fehler: Bitte geben Sie eine gültige Telefonnummer an.';
    if (i.type === 'date' && i.value) return i.validity.rangeUnderflow ? 'Fehler: Bitte wählen Sie ein Datum ab heute.' : 'Fehler: Bitte wählen Sie einen Werktag (Montag bis Freitag).';
    return `Fehler: Bitte füllen Sie das Feld „${labelText(f)}“ aus.`;
  };
  const isBad = (f: El) => {
    const i = f as HTMLInputElement;
    if (f === radioGroup) return !radios.some((r) => r.checked);
    if (i.type === 'checkbox') return !i.checked;
    if (!i.checkValidity() || !i.value.trim()) return true;
    if (i.type === 'tel') return !/^[+()\d][\d\s()\/.\-+]{5,}$/.test(i.value.trim());
    if (i.type === 'date') return isWeekend(i.value);
    return false;
  };

  const required: El[] = [...form.querySelectorAll<HTMLInputElement>('[required]')];
  if (radioGroup) required.push(radioGroup);
  required.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

  // Beim Korrigieren verschwindet die Meldung des jeweiligen Feldes
  form.querySelectorAll<HTMLInputElement>('[required]').forEach((f) => f.addEventListener(f.type === 'checkbox' || f.type === 'date' ? 'change' : 'input', () => clearError(f)));
  radios.forEach((r) => r.addEventListener('change', () => clearError(radioGroup!)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = required.filter(isBad);
    required.forEach(clearError);
    if (bad.length) {
      bad.forEach((f) => showError(f, messageFor(f)));
      const names = bad.map((f) => ((f as HTMLInputElement).type === 'checkbox' ? 'Datenschutz-Zustimmung' : labelText(f)));
      errors.hidden = false;
      errors.textContent = `Bitte prüfen Sie: ${names.join(', ')}.`;
      (bad[0] === radioGroup ? radios[0] : bad[0]).focus();
      return;
    }
    errors.hidden = true;
    // Ereignis vor der Weiterleitung; die Dankeseite ist zusätzlich das Matomo-Ziel
    track('form-submit', kind);
    // TODO: Versandweg offen (docs/entscheidungen.md). Bis dahin wird nichts gesendet.
    window.location.href = kind === 'rueckruf' ? '/danke/?formular=rueckruf' : '/danke/';
  });
}

function track(action: string, position: string) {
  const w = window as unknown as { _paq?: unknown[][] };
  (w._paq = w._paq || []).push(['trackEvent', 'Landingpage', action, position]);
}
