import { blob } from "node:stream/consumers";
import { Job } from "../jobs/jobTypes";

const BLOCKED_DOMAINS = [
  "recruit.net",
  "expertini.com",
  "jobrapido.com",
  "bebee.com",
  "jobleads.com",
  "iitjobs.com",
  "shine.com",
  "monster.com",
];

export default function filterSources(jobs:Job[]):Job[]{
    return jobs.filter((job)=>{
        try{
            const url = new URL(job.applyLink)
            const hostname = url.hostname.toLowerCase();

            return !BLOCKED_DOMAINS.some((domain)=>
            hostname === domain || hostname.endsWith(`.${domain}`)
            );
        }catch{
            return true
        }
    })
}

