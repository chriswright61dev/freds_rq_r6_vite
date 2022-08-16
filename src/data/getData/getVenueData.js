import { getData } from "../getData";

export async function getVenueData() {
  const venueurl = "https://levenshulmelife.com/drupal9/api_venue_freds/";
  const venuedata = getData(venueurl);
  console.log("venuedata", venuedata);
}
