import { getEventDetailsData } from "../getData/getEventDetailsData";
import { useQuery } from "react-query";
export default function useEventDetails(id) {
  return useQuery(["eventDetails", id], getEventDetailsData);
}
