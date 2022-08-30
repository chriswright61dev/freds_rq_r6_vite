import useEvents from "../../../data/queryHooks/useEvents";
console.log("use events");
import "./DatedEvents.css";
function DatedEvents() {
  const events = useEvents();
  console.log("events", events);
  if (events.status === "success") {
    const eventsData = events.data;

    if (eventsData.length === 0) {
      return "no events";
    } else {
      return "has events";
    }
  } else {
    return "no data";
  }
}

export default DatedEvents;
