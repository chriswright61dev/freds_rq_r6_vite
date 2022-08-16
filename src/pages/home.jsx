import useVenue from "../data/queryHooks/useVenue";
import Venue from "../modules/Venue/Venue/Venue";
import VenueAbout from "../modules/Venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/Venue/VenueOpeningTimes/VenueOpeningTimes";
function Home() {
  const venue = useVenue();
  if (venue.status === "success") {
    return (
      <div className="container">
        <div className="info_column">
          <Venue />
        </div>
        <div className="info_column">
          <VenueAbout />
        </div>
        <div className="info_column">
          <VenueOpeningTimes />
        </div>
        <div className="info_column">'col4'</div>
      </div>
    );
  } else {
    return "no data";
  }
}

export default Home;
