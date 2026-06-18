import { fetchJobs } from "./jobs/fetchJobs";

async function main(){
    const jobs = await fetchJobs("React Developer India");

    console.log(`Found ${jobs.length} jobs\n`)

     console.log(jobs.slice(0, 5));
}

main()