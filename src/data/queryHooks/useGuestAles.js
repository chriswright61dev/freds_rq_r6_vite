import { getGuestAlesData } from "../getData/getGuestAlesData";
import { useQuery } from "react-query";
export default function useGuestAles() {
  return useQuery(["guestAles"], getGuestAlesData);
}
