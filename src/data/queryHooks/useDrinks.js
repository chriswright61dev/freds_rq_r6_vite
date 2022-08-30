import { getDrinksData } from "../getData/getDrinksData";
import { useQuery } from "react-query";
export default function useDrinks() {
  return useQuery(["drinks"], getDrinksData);
}
