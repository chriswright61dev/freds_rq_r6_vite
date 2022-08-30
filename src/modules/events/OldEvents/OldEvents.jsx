import useOldEvents from "../../../data/queryHooks/useOldEvents";
import EventCard from "../../../components/EventCard/EventCard";
import "./oldEvents.css";
function OldEvents() {
  const oldEvents = useOldEvents();

  if (oldEvents.status === "success") {
    const oldEventsData = oldEvents.data;
    console.log("oldEventsData", oldEventsData);
    if (oldEventsData.length === 0) {
      return null;
    } else {
      return (
        <div className="old_events">
          {oldEventsData.map((oldEvent) => {
            // api has changed - do this in case old data from old api
            const imageurl = oldEvent.event_poster
              ? oldEvent.event_poster
              : oldEvent.event_poster_220_medium;
            return (
              <EventCard
                oldEvent={true}
                link="events"
                key={oldEvent.id}
                id={oldEvent.id}
                name={oldEvent.event_name}
                date={oldEvent.event_date_long}
                description={oldEvent.event_description}
                admission={oldEvent.event_admission}
                imageURL={imageurl}

                // imageURL={oldEvent.event_poster}
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

export default OldEvents;
