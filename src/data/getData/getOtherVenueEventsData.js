import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getOtherVenueEventsData() {
  // console.log(makeURL("events_other_venue"));
  return getData(makeURL("events_other_venue"));
}
