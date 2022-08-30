import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getVenueData() {
  // console.log(makeURL("venue"));
  return getData(makeURL("venue"));
}
