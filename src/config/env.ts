import dotenv from "dotenv"

dotenv.config()

export const env = {
    jsearchApiKey: process.env.JSEARCH_API_KEY || "",
}