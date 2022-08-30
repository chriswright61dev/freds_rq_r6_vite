import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getFoodsData() {
  // console.log(makeURL("food"));
  return getData(makeURL("food"));
}
