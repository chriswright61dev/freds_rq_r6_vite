import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getRegularEventsData() {
  // console.log(makeURL("events_regular"));
  return getData(makeURL("events_regular"));
}
