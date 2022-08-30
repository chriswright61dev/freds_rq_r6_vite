import { getNewsData } from "../getData/getNewsData";
import { useQuery } from "react-query";
export default function useNews() {
  return useQuery(["news"], getNewsData);
}
