import styles from "./styles.module.css";

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { Tips } from "../Tips";

export function MainForm() {

  const { state, dispatch } = useTaskContext();
  const [taskname, setTaskName] = useState("");
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  //ciclos
  const nextClycle = getNextCycle(state.currentCycle);
  const nextClycleType = getNextCycleType(nextClycle);


  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dissmiss();

    if (!taskname) return;

    const taskName = taskname.trim();

    if (taskName.length < 2) {
      showMessage.warn("A task deve ter pelo menos 3 caracteres.");
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })

    showMessage.sucess("Tarefa iniciada!");

  }

  function handleInterruptTask() {
    showMessage.dissmiss();
    showMessage.error("Tarefa interrompida!");
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK })
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          labelText="Task"
          onChange={(e) => setTaskName(e.target.value)}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        ></DefaultInput>
      </div>

      <div className={styles.formRow}>
        <Tips></Tips>
      </div>

      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles></Cycles>
        </div>
      )}

      <div className={styles.formRow}>
        {!state.activeTask ? (
          <DefaultButton
            title="iniciar tarefa"
            aria-label="Iniciar tarefa"
            type="submit"
            icon={<PlayCircleIcon></PlayCircleIcon>}
            key="ButaoEnviar"
          ></DefaultButton>
        ) : (
          <DefaultButton
            onClick={handleInterruptTask}
            title="Parar tarefa"
            aria-label="Parar tarefa"
            type="button"
            icon={<StopCircleIcon></StopCircleIcon>}
            color="red"
            key="ButaoParar"
          ></DefaultButton>
        )}
      </div>
    </form>
  );
}
