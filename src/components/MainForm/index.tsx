import styles from "./styles.module.css";

import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { FormEvent, useState } from "react";

export function MainForm() {
  const [taskname, setTaskName] = useState("");

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    throw new Error("Function not implemented.");
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          labelText="Task"
          value={taskname}
          onChange={(e) => setTaskName(e.target.value)}
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
