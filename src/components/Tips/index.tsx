import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {

    const { state } = useTaskContext();
    const nextClycle = getNextCycle(state.currentCycle);
    const nextClycleType = getNextCycleType(nextClycle);

    //Tips
    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Descanso longo</span>,
    }
    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
        shortBreakTime: <span>Próximo descanso é de {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Próximo descanso sera longo</span>,
    }


    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextClycleType]}
        </>

    )

}