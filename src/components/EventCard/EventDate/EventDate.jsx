import { DateFormat } from "../../../utilities/utilities.js";
import "./EventDate.css";
function EventDate({ date }) {
  const theDateData = DateFormat(date);

  return (
    <h5 className="event_card_date">
      {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month} at{" "}
      {theDateData.hour}
      {theDateData.mins}
      {theDateData.ampm}
    </h5>
  );
}

export default EventDate;
