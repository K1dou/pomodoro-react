import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export default function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = [...Array(state.currentCycle)];

  const cycleDescription = {
    workTime: "Foco",
    shortBreakTime: "Descanso curto",
    longBreakTime: "Descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextClycle = getNextCycle(index);
          const nextClycleType = getNextCycleType(nextClycle);
          return (
            <span
              className={`${styles.cycleDot} ${styles[nextClycleType]}`}
              aria-label={`Indicador de ciclo de  ${cycleDescription[nextClycleType]}`}
              title={`Indicador de ciclo de  ${cycleDescription[nextClycleType]}`}
              key={`${nextClycleType}-${index}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
