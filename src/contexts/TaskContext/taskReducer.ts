import { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionModel, TaskActionTypes } from "./taskActions";

export function taskReducer(state:TaskStateModel,action: TaskActionModel){

    switch(action.type){
        case TaskActionTypes.START_TASK:{
            
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60;

            return{
                ...state,
                activeTask:newTask,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                task:[...state.tasks,newTask],
            };
        }
        case TaskActionTypes.INTERRUPT_TASK:{

            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: formatSecondsToMinutes(0),
                tasks: state.tasks.map((task) => {
                    if (state.activeTask && state.activeTask.id === task.id) {
                        return {
                            ...task,
                            interruptDate: Date.now(),
                        };
                    }
                    return task;
             }),
            };
        }
        case TaskActionTypes.RESET_STATE:{
            
            return state;
        }

        case TaskActionTypes.COUNT_DOWN:{
            return {
                ...state,
                secondsRemaining: action.payload.secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(action.payload.secondsRemaining),
            };
        }




    }

    return state;
}