import styles from "./styles.module.css";

import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

export function MainForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          labelText="Task"
        ></DefaultInput>
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles></Cycles>
      </div>

      <div className={styles.formRow}>
        <DefaultButton
          icon={<PlayCircleIcon></PlayCircleIcon>}
          color="green"
        ></DefaultButton>
      </div>
    </form>
  );
}
