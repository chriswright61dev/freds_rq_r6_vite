import { useState, useEffect } from "react";
import "./ThemeButton.css";
export default function ThemeButton() {
  // state to hold theme
  const [theme, settheme] = useState("dark");

  // function to add theme setting to local storage
  const storeUserSetPreference = (pref) => {
    localStorage.setItem("theme", pref);
  };

  // function to get theme setting from local storage
  const getUserSetPreference = () => {
    return localStorage.getItem("theme");
  };
  // use effect to set theme on body
  useEffect(() => {
    // check local storage
    const userSetPreference = getUserSetPreference();
    if (userSetPreference) {
      settheme(userSetPreference);
    }
    // add theme to doc body
    document.body.dataset.theme = theme;
  }, [theme]);

  //   button toggle handler
  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    settheme(newTheme);
    storeUserSetPreference(newTheme);
  };

  return (
    <>
      <button className="themeBtn" onClick={handleToggle}>
        {theme === "light" ? (
          <span>Choose Dark Mode</span>
        ) : (
          <span>Choose Light Mode</span>
        )}
      </button>
    </>
  );
}
