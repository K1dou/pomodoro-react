import styles from "./styles.module.css";

import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { FormEvent, useState } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const [taskname, setTaskName] = useState("");

  const nextClycle = getNextCycle(state.currentCycle);
  const nextClycleType = getNextCycleType(nextClycle);

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!taskname) return;

    const taskName = taskname.trim();

    if (taskName.length < 3) {
      alert("A task deve ter pelo menos 3 caracteres.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      complete: null,
      interruptDate: null,
      duration: state.config[nextClycleType],
      type: nextClycleType,
    };
    const secondsRemaining = newTask.duration * 60;

    setState((prev) => {
      return {
        ...prev,
        config: {
          ...prev.config,
        },
        activeTask: newTask,
        currentCycle: nextClycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prev.tasks, newTask],
      };
    });
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

      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles></Cycles>
        </div>
      )}

      <div className={styles.formRow}>
        <DefaultButton
          icon={<PlayCircleIcon></PlayCircleIcon>}
          color="green"
        ></DefaultButton>
      </div>
    </form>
  );
}
