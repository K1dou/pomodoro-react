import styles from "./styles.module.css";

import { TrashIcon } from "lucide-react";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import MainTemplate from "../../templates/MainTemplate";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStats";

export default function History() {

  const { state } = useTaskContext();
  console.log("State no History:", state);

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton icon={<TrashIcon></TrashIcon>} color="red"
              aria-label="Delete all history"
              title="Delete all history"
            ></DefaultButton>
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefas</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>


            <tbody>
              {state.tasks.map(task => {

                const taskTypeDictionary = {
                  workTime: "Foco",
                  shortBreakTime: "Descanso curto",
                  longBreakTime: "Descanso longo"
                }
                return (

                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>

                  </tr>

                );
              })}
            </tbody>
          </table>

        </div>
      </Container>

    </MainTemplate>
  );
}
