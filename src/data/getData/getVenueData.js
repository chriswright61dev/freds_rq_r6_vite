import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getVenueData() {
  return getData(makeURL("venue"));
}
