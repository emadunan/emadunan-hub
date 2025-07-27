"use client"

import { useEffect, useState } from "react";
import styles from "./ThemeToggler.module.css";
import { MdOutlineLightMode } from "react-icons/md"
	import { FiMoon } from "react-icons/fi"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = stored || (prefersDark ? "dark" : "light");
    setTheme(current);
    document.documentElement.setAttribute("data-theme", current);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <MdOutlineLightMode size={22}/>
      ) : (
        <FiMoon size={22}/>
      )}
    </button>
  );
}
