import useVenue from "../data/queryHooks/useVenue";

function Home() {
  const venue = useVenue();
  if (venue.status === "success") {
    return (
      <div className="container">
        <div className="info_column">'col1'</div>
        <div className="info_column">'col2'</div>
        <div className="info_column">'col3'</div>
        <div className="info_column">'col4'</div>
      </div>
    );
  } else {
    return "no data";
  }
}

export default Home;
