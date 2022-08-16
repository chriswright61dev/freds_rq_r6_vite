import useVenue from "../data/queryHooks/useVenue";

function Home() {
  const venue = useVenue();
  if (venue.status === "success") {
    return <div>we have data - home page</div>;
  } else {
    return "no data";
  }
}

export default Home;
