# The Arrival · Ecumenical Christmas 2026

Static site for the CSI All Saints' Church, Triplicane Youth Fellowship ecumenical Christmas celebration
(Sun 6 Dec 2026, 5:30 PM). Live at https://arjithpraison7.github.io/the-arrival/ (GitHub Pages, push to `main`).

- `index.html`: everything (style, markup, script). Settings block at the top of the script:
  `EVENT_START`, `SHEET_ENDPOINT`.
- `images/invite-ticket*.jpg`: boarding-pass invite with the QR code to this site.
- `print/`: final print PDF of the invite (210 × 103.7 mm, lossless 600 dpi, same file as the print-shop copy).
- Certificate of participation is drawn in the browser (canvas → PNG / A4 PDF via jsPDF).
  Form asks only name + church; always open.

## Recording attendance in a Google Sheet
1. New Google Sheet → Extensions → Apps Script → paste `apps-script/Code.gs`.
2. Deploy → New deployment → Web app → Execute as **Me**, access **Anyone** → copy the `/exec` URL.
3. Put the URL in `SHEET_ENDPOINT` in `index.html`, commit, push.
Rows land in the "Registrations" tab (timestamp, certificate no., name, church).
