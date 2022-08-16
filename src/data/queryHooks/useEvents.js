import { getEventsData } from "../getData/getEventsData";
import { useQuery } from "react-query";
export default function useEvents() {
  return useQuery(["events"], getEventsData);
}
