import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getEventsData() {
  // console.log(makeURL("events"));
  return getData(makeURL("events"));
}
