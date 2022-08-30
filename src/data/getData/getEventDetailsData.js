getEventDetailsData.js;

import { getData } from "../getData";

import makeQueryURLnoSiteAbbrev from "../makeQueryURLnoSiteAbbrev";
export function getEventDetailsData(queryKey) {
  const id = queryKey.queryKey[1];
  console.log(
    "events query url",
    makeQueryURLnoSiteAbbrev("event/?event_id=", id)
  );
  return getData(makeQueryURLnoSiteAbbrev("event/?event_id=", id));
}
