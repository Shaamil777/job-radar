import { fetchJobs } from "./jobs/fetchJobs";
import {queries} from "./jobs/queries";
import { Job } from "./jobs/jobTypes";
import {removeDuplicates} from "./filters/duplicateFilter"
import { filterJobs } from "./filters/jobFilter";
import { env } from "./config/env";
import { appendJobs } from "./sheets/appendJobs";
import { getExistingJobLinks } from "./sheets/getExistingJobs";

async function main(){
    const allJobs:Job[]= []
    for(let query of queries){
        console.log(`Searching ${query}`);
        const jobs = await fetchJobs(query);
        console.log(`Found ${jobs.length} jobs\n`);

        allJobs.push(...jobs)
        
    }
    console.log(`Total Jobs Collected ${allJobs.length}`)

    const uniqueJobs = removeDuplicates(allJobs)

    console.log(`After Deduplication: ${uniqueJobs.length}`);

    const filteredJobs = filterJobs(uniqueJobs)

    console.log(`After Filtering: ${filteredJobs.length}`);

    const existingLinks = await getExistingJobLinks(env.googleSheetId);

    console.log(`Existing jobs in sheet: ${existingLinks.size}`);

    const newJobs = filteredJobs.filter(
        (job)=> !existingLinks.has(job.applyLink)
    )

    console.log( `New jobs to insert: ${newJobs.length}`)

    await appendJobs(env.googleSheetId,newJobs.slice(0,15))

    console.log("Added to Google Sheet");
}

main().catch((error)=>{
    console.error("Error in main:",error)
    process.exit(1)
})