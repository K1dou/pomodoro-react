import styles from "./styles.module.css";

export function GenericHtml({ children }: { children: React.ReactNode }) {
  return <div className={styles.genericHtml}>{children}</div>;
}
