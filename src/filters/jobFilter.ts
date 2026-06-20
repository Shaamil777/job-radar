import { Job } from "../jobs/jobTypes";

const REJECT_KEYWORDS = [
  // Seniority
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

  // Experience
  "3+ years",
  "4+ years",
  "5+ years",
  "6+ years",
  "7+ years",
  "8+ years",
  "9+ years",
  "10+ years",

  // Other senior indicators
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

  // Unwanted tech stack
  "python",
  "django",
  "flask",

  "java",
  "spring",
  "spring boot",
  "springboot",

  "angular",
  "angularjs",

  ".net",
  "dotnet",
  "asp.net",

  "php",
  "laravel",
  "wordpress",

  "ruby",
  "ruby on rails",

  "golang",

  "android",
  "ios",
  "swift",
  "kotlin",

  "salesforce",
  "sap",
  "oracle",

  "data scientist",
  "machine learning",
  "ai engineer",

  "qa engineer",
  "test engineer",
  "automation tester",
  "manual tester"
];

export function filterJobs(jobs: Job[]): Job[] {
  return jobs.filter((job) => {
    const text =
      `${job.title} ${job.description || ""}`.toLowerCase();

    return !REJECT_KEYWORDS.some((keyword) =>
      text.includes(keyword)
    );
  });
}