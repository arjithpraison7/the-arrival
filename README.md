# The Arrival · Ecumenical Christmas 2026

Static site for the CSI All Saints' Church, Triplicane Youth Fellowship ecumenical Christmas celebration
(Sun 6 Dec 2026, 5:30 PM). Live at https://arjithpraison7.github.io/the-arrival/ (GitHub Pages, push to `main`).

- `index.html`: everything (style, markup, script). Settings block at the top of the script:
  `EVENT_START`, `FORM_OPENS`, `FORM_CLOSES`, `CODE_SHA256`, `SHEET_ENDPOINT`.
- `images/invite-ticket*.jpg`: boarding-pass invite with the QR code to this site.
- Certificate of participation is drawn in the browser (canvas → PNG / A4 PDF via jsPDF).
  The form unlocks at `FORM_OPENS` and needs the event code announced at the venue.
  `?preview` opens the form early for testing.

## Event code
Change it: `echo -n NEWCODE | sha256sum` → paste into `CODE_SHA256`, and set the same code in `apps-script/Code.gs`.

## Recording attendance in a Google Sheet
1. New Google Sheet → Extensions → Apps Script → paste `apps-script/Code.gs`, set `EVENT_CODE`.
2. Deploy → New deployment → Web app → Execute as **Me**, access **Anyone** → copy the `/exec` URL.
3. Put the URL in `SHEET_ENDPOINT` in `index.html`, commit, push.
Rows land in the "Registrations" tab (timestamp, certificate no., name, church, phone, email).
