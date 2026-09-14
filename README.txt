HAQQ PUBLIC WEBSITE – NEUES, SEPARATES PROJEKT
==============================================

WICHTIG:
Diese Website ist bewusst ein NEUES Projekt. Deine bisherige Vercel-Seite wird nicht verändert.

DATEIEN
- index.html
- styles.css
- script.js
- assets/haqq-logo.png
- assets/favicon-64.png
- api/contact.js
- impressum.html
- datenschutz.html
- SOCIAL-MEDIA-PLAN.md

EMPFOHLENER DEPLOY
1. Neues GitHub-Repository erstellen, z.B. "haqq-public".
2. Nur den Inhalt dieses Ordners dort hochladen.
3. In Vercel: Add New -> Project -> Repo "haqq-public" importieren.
4. Framework: Other.
5. Deploy.
6. Erst wenn die neue Seite fertig getestet ist, eine eigene neue Domain/Subdomain verbinden.

KONTAKTFORMULAR AKTIVIEREN
Die Seite enthält ein echtes API-Formular. Zum Versand werden E-Mails über Resend verschickt.
In Vercel beim NEUEN Projekt unter Settings -> Environment Variables setzen:
- RESEND_API_KEY = dein Resend API Key
- CONTACT_TO_EMAIL = die E-Mail, auf der Anfragen ankommen sollen
Optional:
- CONTACT_FROM_EMAIL = z.B. HAQQ Website <kontakt@deinedomain.de>
  (eigene Absenderdomain muss beim E-Mail-Dienst verifiziert sein)

Danach neu deployen.

RECHTLICH
- impressum.html enthält Platzhalter und MUSS vor öffentlicher geschäftlicher Nutzung ausgefüllt werden.
- datenschutz.html ist nur eine technische Vorlage und MUSS an die echten Dienste/Datenflüsse angepasst werden.
- Reale Spielernamen/Fotos/Leistungsdaten auf einer öffentlichen Werbeseite nur mit passender Rechtsgrundlage/Einwilligung verwenden. Bei Minderjährigen besonders vorsichtig sein.

FLVW/WDFV
Die Website behauptet bewusst NICHT, dass HAQQ offiziell vom FLVW/DFB zertifiziert oder freigegeben ist.
Regeln können je nach Wettbewerb, Saison und Fußballkreis abweichen.

Demo-Spielernamen auf der Website sind fiktiv.
