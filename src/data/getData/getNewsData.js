import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getNewsData() {
  // console.log(makeURL("news"));
  return getData(makeURL("news"));
}
