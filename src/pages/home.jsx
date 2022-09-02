// data and config
import useVenue from "../data/queryHooks/useVenue";
import { siteSettings } from "../config/config";
// utils
// import themeSelect from "../utilities/theme";
//modules
import Venue from "../modules/venue/Venue/Venue";
import VenueAbout from "../modules/venue/VenueAbout/VenueAbout";
import VenueOpeningTimes from "../modules/venue/VenueOpeningTimes/VenueOpeningTimes";
import BeerNews from "../modules/news/BeerNews";
import OfferNews from "../modules/news/OfferNews";
import GuestAles from "../modules/drinks/GuestAles/GuestAles";
import DrinksDraughtOffers from "../modules/drinks/DrinksDraughtOffers/DrinksDraughtOffers";
import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
import DatedEventsOtherVenues from "../modules/events/DatedEventsOtherVenues/DatedEventsOtherVenues";
import DatedEvents from "../modules/events/DatedEvents/DatedEvents";
import SportsEvents from "../modules/events/SportsEvents/SportsEvents";
// components
import PageTop from "../components/PageTop/Pagetop";
import LinkBox from "../components/textBoxes/LinkBox";

function Home({ headerReady }) {
  const venue = useVenue();
  if (venue.status === "success" && headerReady) {
    // const themeName = themeSelect();
    return (
      <div className={`container  ${siteSettings.animate}`}>
        <PageTop />
        <div className="info_column">
          <Venue />
          <VenueAbout />
          <LinkBox
            text={`Show ${siteSettings.name} Location`}
            link="/aboutus"
          />
        </div>
        <div className="info_column">
          <VenueOpeningTimes />
          {siteSettings.enableFrontPageOfferNews ? <OfferNews /> : null}
        </div>

        <div className="info_column">
          {siteSettings.enableFrontPageLPCBeerOffers ? (
            <DrinksDraughtOffers />
          ) : null}
          {siteSettings.enableFrontPageGuestAles ? <GuestAles /> : null}
          {siteSettings.enableDrinksMenuBlock ? (
            <LinkBox
              text={`Drinks served at ${siteSettings.name}`}
              link="/drinks"
            />
          ) : null}
        </div>
        <div className="info_column">
          {siteSettings.enableFrontPageWhatsOnLink ? (
            <LinkBox text={`Whats on at ${siteSettings.name}`} link="/events" />
          ) : null}

          {siteSettings.enableFrontPagePosterEvents ? <PosterEvents /> : null}
          {siteSettings.enableFrontPageDatedEvents ? <DatedEvents /> : null}
          {siteSettings.enableFrontPageRegularEvents ? <RegularEvents /> : null}
          {siteSettings.enableFrontPageOtherVenueEvents ? (
            <DatedEventsOtherVenues />
          ) : null}
          {siteSettings.enableFrontPageSportsEvents ? <SportsEvents /> : null}

          {siteSettings.enableFrontPageJobsLink ? (
            <LinkBox
              text="Jobs with the Levenshulme Pub Company"
              link="/jobs"
            />
          ) : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default Home;
