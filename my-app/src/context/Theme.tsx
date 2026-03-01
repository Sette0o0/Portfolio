import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    const initialTheme: Theme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    document.body.setAttribute("data-bs-theme", initialTheme);
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const newTheme: Theme = theme === "light" ? "dark" : "light";

    document.body.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}