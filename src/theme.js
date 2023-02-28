// theme.js

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("sun");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkMode) {
        setTheme("moon");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "moon" ? "sun" : "moon";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("sun");
    document.documentElement.classList.toggle("moon");
  };

  return [theme, toggleTheme];
};

export default useTheme;
