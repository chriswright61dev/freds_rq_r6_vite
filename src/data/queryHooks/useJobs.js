import { getJobsData } from "../getData/getJobsData";
import { useQuery } from "react-query";
export default function useJobs() {
  return useQuery(["jobs"], getJobsData);
}
