import { siteSettings } from "../config/config";
import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
import DatedEvents from "../modules/events/DatedEvents/DatedEvents";
import SportsEvents from "../modules/events/SportsEvents/SportsEvents";
import LinkBox from "../components/textBoxes/LinkBox";
import PageTop from "../components/PageTop/Pagetop";
function Events() {
  return (
    <div className="container">
      <PageTop />
      <div className="info_column">
        <PosterEvents />
      </div>
      <div className="info_column">
        <DatedEvents />
      </div>
      <div className="info_column">
        <RegularEvents />

        {siteSettings.enableOldEventsLink ? (
          <LinkBox
            text={`Old Events at ${siteSettings.name}`}
            link="/eventsold"
          />
        ) : null}
      </div>
      <div className="info_column">
        <SportsEvents />
      </div>
    </div>
  );
}

export default Events;
