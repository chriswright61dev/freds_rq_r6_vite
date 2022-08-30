import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getGuestAlesData() {
  // console.log(makeURL("drinks_guest_ales"));
  return getData(makeURL("drinks_guest_ales"));
}
