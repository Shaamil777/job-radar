import { google } from "googleapis";

const credentials = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT!
);

export const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets"
  ],
});

export const sheets = google.sheets({
  version: "v4",
  auth,
});