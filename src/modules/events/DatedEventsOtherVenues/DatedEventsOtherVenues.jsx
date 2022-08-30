import useOtherVenueEvents from "../../../data/queryHooks/useOtherVenueEvents";
import EventCard from "../../../components/EventCard/EventCard";
import "./DatedEventsOtherVenues.css";
function DatedEventsOtherVenues() {
  const otherVenueEvents = useOtherVenueEvents();

  if (otherVenueEvents.status === "success") {
    const eventsData = otherVenueEvents.data;

    if (eventsData.length === 0) {
      return null;
      // return "other venues event - none";
    } else {
      return (
        <div className="dated_events">
          {eventsData.map((anEvent) => {
            return (
              <EventCard
                link="events"
                key={anEvent.id}
                id={anEvent.id}
                name={anEvent.event_name}
                date={anEvent.event_date_long}
                description={anEvent.event_description}
                admission={anEvent.event_admission}
                imageURL={anEvent.event_poster}
              />
            );
          })}
        </div>
      );
    }
  } else {
    return null;
  }
}

export default DatedEventsOtherVenues;
