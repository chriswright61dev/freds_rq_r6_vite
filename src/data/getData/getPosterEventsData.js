import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getPosterEventsData() {
  // console.log(makeURL("events_poster"));
  return getData(makeURL("events_poster"));
}
