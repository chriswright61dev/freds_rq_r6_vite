import useVenue from "../../../data/queryHooks/useVenue";

import "./VenueAbout.css";
function VenueAbout() {
  const venue = useVenue();
  if (venue.status === "success") {
    const venueData = venue.data[0];
    return venueData.venue_about;
  } else {
    return null;
  }
}

export default VenueAbout;
