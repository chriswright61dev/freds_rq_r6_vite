import { siteSettings } from "../config/config";

function makeURL(urlPart) {
  return (
    siteSettings.baseurl +
    siteSettings.urlprefix +
    urlPart +
    siteSettings.siteabbrv
  );
}

export default makeURL;
("https://levenshulmelife.com/drupal9/  api_ drinks _freds/");
