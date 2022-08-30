import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getSpecialAleData() {
  // console.log(makeURL("drinks_special_ale"));
  return getData(makeURL("drinks_special_ale"));
}
