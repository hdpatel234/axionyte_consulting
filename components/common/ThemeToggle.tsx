"use client";

import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
}

export default function ThemeToggle({
  className = "",
  showText = false,
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const savedTheme = localStorage.getItem("axionyte-theme");
      const htmlTheme = document.documentElement.getAttribute("data-theme");
      const currentTheme: "light" | "dark" =
        savedTheme === "dark" || htmlTheme === "dark" ? "dark" : "light";

      setTheme(currentTheme);
      document.documentElement.setAttribute("data-theme", currentTheme);
    }, 0);

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<"light" | "dark">;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      }
    };

    window.addEventListener("themechange", handleThemeChange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("axionyte-theme", nextTheme);

    window.dispatchEvent(
      new CustomEvent("themechange", { detail: nextTheme })
    );
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={`theme-toggle-btn ${className}`}
        aria-label="Toggle theme"
        disabled
      >
        <span className="theme-toggle-icon">
          <i className="fa-solid fa-circle-half-stroke" />
        </span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${isDark ? "is-dark" : "is-light"} ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-icon">
        {isDark ? (
          <i className="fa-solid fa-sun" />
        ) : (
          <i className="fa-solid fa-moon" />
        )}
      </span>
      {showText && (
        <span className="theme-toggle-text">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
