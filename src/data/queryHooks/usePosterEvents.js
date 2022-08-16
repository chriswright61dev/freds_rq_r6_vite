import { getPosterEventsData } from "../getData/getPosterEventsData";
import { useQuery } from "react-query";
export default function usePosterEvents() {
  return useQuery(["posterEvents"], getPosterEventsData);
}
