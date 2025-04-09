import styles from "./styles.module.css"

import { TrashIcon } from "lucide-react";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function History() {
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
              {Array.from({ length: 20 }).map(() => {
                return (

                  <tr key={Math.random()}>
                    <td>Estudar</td>
                    <td>25min</td>
                    <td>20/04/2025 08:00</td>
                    <td>Completa</td>
                    <td>Foco</td>
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
