import usePosterEvents from "../../../data/queryHooks/usePosterEvents";
import "./PosterEvents.css";
import PosterEvent from "./PosterEvent/PosterEvent";
function PosterEvents() {
  const posterEvents = usePosterEvents();
  if (posterEvents.status === "success") {
    const peData = posterEvents.data;
    if (peData.length === 0) {
      return "no posters";
    } else {
      return "have posters event data";
    }
  } else {
    return "no event data";
  }
}

export default PosterEvents;
