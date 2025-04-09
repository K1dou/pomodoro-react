import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export function Menu() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const storedTheme =
      (localStorage.getItem("theme") as "dark" | "light") || "dark";
    return storedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon></SunIcon>,
    light: <MoonIcon></MoonIcon>,
  };

  function handleThemeChange(event: React.MouseEvent) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to="/"
        aria-label="Ir para a página inicial"
        title="Ir para a página inicial"
      >
        <HouseIcon></HouseIcon>
      </Link>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a página de histórico"
        title="Ir para a página de histórico"
      >
        <HistoryIcon></HistoryIcon>
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a página de configurações"
        title="Ir para a página de configurações"
      >
        <SettingsIcon></SettingsIcon>
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Tema claro"
        title="Tema claro"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
