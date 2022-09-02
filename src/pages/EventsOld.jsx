// import themeSelect from "../utilities/theme";
import OldEvents from "../modules/events/OldEvents/OldEvents";

import PageTop from "../components/PageTop/Pagetop";
function EventsOld() {
  // const themeName = themeSelect();
  return (
    // <div className={themeName}>
    <div className="container">
      <PageTop />
      <h2>These are OLD events - here for your reference</h2>
      <OldEvents />
    </div>
    // </div>
  );
}

export default EventsOld;
