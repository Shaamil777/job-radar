import dotenv from "dotenv"

dotenv.config()

export const env = {
    jsearchApiKey: process.env.JSEARCH_API_KEY || "",
    googleSheetId: process.env.GOOGLE_SHEET_ID || ""
}