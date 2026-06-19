import { Job } from "../jobs/jobTypes"

const REJECT_KEYYWORDS=[
   "senior",
  "sr.",
  "sr ",
  "lead",
  "team lead",
  "technical lead",
  "tech lead",
  "manager",
  "engineering manager",
  "architect",
  "solution architect",
  "principal",
  "director",
  "staff engineer",
  "head of",
  "vp",
  "vice president",
  "chief",
  "cto",
  "founding engineer",

  "5+ years",
  "6+ years",
  "7+ years",
  "8+ years",
  "9+ years",
  "10+ years",

  "experienced",
  "expert",
  "specialist",
  "consultant",

  "sde 2",
  "sde ii",
  "sde 3",
  "sde iii",

  "mid-level",
  "mid level",
  "mid senior",
  "senior developer",
  "senior engineer",
  "senior software engineer",
  "senior frontend developer",
  "senior backend developer",
  "senior full stack developer",

  "backend lead",
  "frontend lead",
  "full stack lead",
  "engineering lead",

  "java architect",
  "cloud architect",
  "enterprise architect",
  "solutions architect"
]


export function filterJobs(jobs:Job[]):Job[]{
    return jobs.filter((job)=>{
        const text = `${job.title} ${job.description || ""}`.toLowerCase();

        return !REJECT_KEYYWORDS.some((keywords)=>
        text.includes(keywords)
        );
    });
}