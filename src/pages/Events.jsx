import PosterEvents from "../modules/events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/events/RegularEvents/RegularEvents";
// import DatedEvents from "../modules/events/DatedEvents/DatedEvents";
import SportsEvents from "../modules/events/SportsEvents/SportsEvents";
function Events() {
  return (
    <div className="container">
      <div className="info_column">
        <PosterEvents />
      </div>
      <div className="info_column">
        <RegularEvents />
      </div>
      <div className="info_column"> {/* <DatedEvents />{" "} */}</div>
      <div className="info_column">
        {" "}
        <SportsEvents />
      </div>
    </div>
  );
}

export default Events;
