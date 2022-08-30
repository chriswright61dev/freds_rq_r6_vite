import { Link } from "react-router-dom";
import "./Navigation.css";
import { siteSettings } from "../../config/config";

function Navigation() {
  return (
    <nav className="nav_links">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        {siteSettings.enableDrinksNavMenu ? (
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navigation;
