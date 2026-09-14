const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    statusEl.textContent = 'Wird gesendet …';
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.page = location.href;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Senden fehlgeschlagen');
      statusEl.textContent = 'Danke! Deine Rückrufanfrage wurde gesendet. Wir melden uns bei dir.';
      form.reset();
    } catch (err) {
      statusEl.textContent = 'Das hat gerade nicht geklappt. Bitte versuche es später noch einmal.';
    }
  });
}
