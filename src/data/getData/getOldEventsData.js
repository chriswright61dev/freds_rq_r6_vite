import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getOldEventsData() {
  console.log("events_old", makeURL("events_old"));
  return getData(makeURL("events_old"));
}
