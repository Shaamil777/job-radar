import { sheets } from "./sheetsClient";
import { Job } from "../jobs/jobTypes";

export async function appendJobs(
    spreadsheetId:string,
    jobs:Job[]
){
    const rows = jobs.map((job)=>[
        new Date().toISOString().split("T")[0],
        job.title,
        job.company,
        job.location,
        job.source,
        job.applyLink
    ]);

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range:"sheet1!A:F",
        valueInputOption:"USER_ENTERED",
        requestBody:{
            values:rows
        }
    })
}