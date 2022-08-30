import { siteSettings } from "../config/config";
import { beersLastChanged } from "../utilities/utilities";
import useGuestAles from "../data/queryHooks/useGuestAles";
function Settings() {
  let beerschanged = null;
  const guestAles = useGuestAles();
  if (guestAles.status === "success") {
    const guestAlesData = guestAles.data;
    beerschanged = beersLastChanged(guestAlesData);
  } else {
  }
  return (
    <div>
      <pre>{JSON.stringify(siteSettings, null, 2)}</pre>
      Guest Beers {beerschanged};
    </div>
  );
}

export default Settings;
