import { useState } from "react";
import "./ThemeButton.css";
export default function ThemeButton() {
  const [theme, settheme] = useState("dark");

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    settheme(newTheme);
    // add theme to doc body
    document.body.dataset.theme = theme;
  };
  return (
    <>
      <button className="themeBtn" onClick={handleToggle}>
        {theme === "light" ? <span>dark</span> : <span>light</span>}
      </button>
    </>
  );
}
