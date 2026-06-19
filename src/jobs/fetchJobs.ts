import axios from "axios";
import { env } from "../config/env";
import { Job } from "./jobTypes";

export async function fetchJobs(query:string):Promise<Job[]>{
  try {
    const response = await axios.get(
        "https://jsearch.p.rapidapi.com/search",
        {
            params:{
                query,
                page:"1",
                num_pages:"1",
            },
            headers:{
                "X-RapidAPI-Key":env.jsearchApiKey,
                "X-RapidApi-Host":"jsearch.p.rapidapi.com",
            },
        }
    );

    const jobs:Job[]=response.data.data.map((job:any)=>({
        title:job.job_title,
        company:job.employer_name,
        location:job.job_city || "Remote",
        applyLink:job.job_apply_link,
        source:job.job_publisher,
        descrition:job.job_description
    }))
    return jobs
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}