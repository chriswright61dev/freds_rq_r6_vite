import { getOldEventsData } from "../getData/getOldEventsData";
import { useQuery } from "react-query";
export default function useOldEvents() {
  return useQuery(["oldEvents"], getOldEventsData);
}
