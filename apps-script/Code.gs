/**
 * The Arrival 2026 — attendance register.
 * Paste into Extensions → Apps Script of a Google Sheet,
 * Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 * Put the /exec URL into SHEET_ENDPOINT in index.html.
 */

const SHEET_NAME = 'Registrations';

function doPost(e) {
  const p = (e && e.parameter) || {};

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Timestamp', 'Certificate No', 'Name', 'Church', 'Device']);
      sh.setFrozenRows(1);
    }
    const cut = (v, n) => String(v || '').slice(0, n).replace(/^[=+\-@]/, "'$&");  // no formula injection
    sh.appendRow([new Date(), cut(p.cert, 20), cut(p.name, 60), cut(p.church, 80), cut(p.ua, 120)]);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

function doGet() { return json_({ ok: true, service: 'the-arrival-2026' }); }

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
