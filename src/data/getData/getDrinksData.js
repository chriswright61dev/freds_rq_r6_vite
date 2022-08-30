import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getDrinksData() {
  // console.log(makeURL("drinks"));
  return getData(makeURL("drinks"));
}
