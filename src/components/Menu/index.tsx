import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HouseIcon></HouseIcon>
      </a>
      <a className={styles.menuLink} href="#">
        <HistoryIcon></HistoryIcon>
      </a>
      <a className={styles.menuLink} href="#">
        <SettingsIcon></SettingsIcon>
      </a>
      <a className={styles.menuLink} href="#">
        <SunIcon></SunIcon>
      </a>
    </nav>
  );
}
