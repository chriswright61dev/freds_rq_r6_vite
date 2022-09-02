import EventsDetails from "../modules/events/EventDetails/EventDetails";

import PageTop from "../components/PageTop/Pagetop";
function Event() {
  return (
    <div className="container">
      <PageTop />
      <div className="detail_column">
        <EventsDetails />
      </div>
      <div className="info_column"></div>
      <div className="info_column"> </div>
    </div>
  );
}

export default Event;
