import OldEvents from "../modules/events/OldEvents/OldEvents";

import PageTop from "../components/PageTop/Pagetop";
function EventsOld() {
  return (
    <div className="container">
      <PageTop />
      <h2>These are OLD events - here for your reference</h2>
      <OldEvents />
    </div>
  );
}

export default EventsOld;
