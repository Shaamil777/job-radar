import { google } from "googleapis";

export const auth = new google.auth.GoogleAuth({
    keyFile:"credentials/service-account.json",
    scopes:["https://www.googleapis.com/auth/spreadsheets"]
});

export const sheets = google.sheets({
    version:"v4",
    auth,
})