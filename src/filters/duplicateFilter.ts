import { Job } from "../jobs/jobTypes";

export function removeDuplicates(jobs:Job[]):Job[]{
    const seen = new Set<string>()

    return jobs.filter((job)=>{
        const key = `${job.company}-${job.title}-${job.applyLink}`;
        if(seen.has(key)){
            return false
        }
        seen.add(key)
        return true
    })
}