import { getSpecialAleData } from "../getData/getSpecialAleData";
import { useQuery } from "react-query";
export default function useSpecialAle() {
  return useQuery(["SpecialAles"], getSpecialAleData);
}
