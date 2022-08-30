import { DateFormat } from "../../../utilities/utilities.js";
import "./EventYear.css";
function EventYear({ date }) {
  const theDateData = DateFormat(date);

  return <h5 className="event_card_year">{theDateData.year}</h5>;
}

export default EventYear;
