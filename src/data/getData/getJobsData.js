import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getJobsData() {
  // console.log(makeURL("jobs"));
  return getData(makeURL("jobs"));
}
