export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, club, interest, message, privacy, page } = req.body || {};
  if (!name || !email || !club || !interest || !message || !privacy) {
    return res.status(400).json({ error: 'Bitte alle Pflichtfelder ausfüllen.' });
  }
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'HAQQ Website <HAQQ Website <kontakt@saruzugo.de>';
  if (!apiKey || !to) {
    return res.status(503).json({ error: 'Kontaktformular ist noch nicht eingerichtet.' });
  }
  const html = `
    <h2>Neue HAQQ-Anfrage</h2>
    <p><b>Name:</b> ${esc(name)}</p>
    <p><b>E-Mail:</b> ${esc(email)}</p>
    <p><b>Verein/Team:</b> ${esc(club)}</p>
    <p><b>Interesse:</b> ${esc(interest)}</p>
    <p><b>Nachricht:</b><br>${esc(message).replace(/\n/g,'<br>')}</p>
    <p><small>Quelle: ${esc(page || '')}</small></p>`;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `HAQQ Anfrage – ${interest}`, html })
  });
  if (!response.ok) {
    const body = await response.text();
    return res.status(502).json({ error: 'E-Mail konnte nicht gesendet werden.', detail: body });
  }
  return res.status(200).json({ ok: true });
}
function esc(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
