import { siteSettings } from "../config/config";

function Settings() {
  return (
    <div>
      <pre>{JSON.stringify(siteSettings, null, 2)}</pre>
    </div>
  );
}

export default Settings;
