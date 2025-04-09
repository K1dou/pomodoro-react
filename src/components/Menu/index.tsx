import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";

import { useEffect, useState } from "react";
import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css";

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
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Ir para a página inicial"
        title="Ir para a página inicial"
      >
        <HouseIcon></HouseIcon>
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history"
        aria-label="Ir para a página de histórico"
        title="Ir para a página de histórico"
      >
        <HistoryIcon></HistoryIcon>
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings"
        aria-label="Ir para a página de configurações"
        title="Ir para a página de configurações"
      >
        <SettingsIcon></SettingsIcon>
      </RouterLink>
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
