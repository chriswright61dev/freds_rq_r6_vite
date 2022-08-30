import { getOtherVenueEventsData } from "../getData/getOtherVenueEventsData";
import { useQuery } from "react-query";
export default function useOtherVenueEvents() {
  return useQuery(["otherVenueEvents"], getOtherVenueEventsData);
}
