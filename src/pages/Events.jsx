import PosterEvents from "../modules/events/PosterEvents/PosterEvents";

function Events() {
  return (
    <div className="container">
      <div className="info_column">
        'just the Poster Events'
        <PosterEvents />
      </div>
      <div className="info_column">'Dated Events'</div>
      <div className="info_column">'Regular Events' </div>
      <div className="info_column">'Sports Events'</div>
    </div>
  );
}

export default Events;
