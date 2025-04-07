import { PlayCircleIcon } from "lucide-react";
import Container from "./components/Container";
import { CountDown } from "./components/CountDown";
import Cycles from "./components/Cycles";
import DefaultButton from "./components/DefaultButton";
import DefaultInput from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <CountDown></CountDown>
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput
              id="meuInput"
              type="text"
              placeholder="Digite algo"
              labelText="Task"
            ></DefaultInput>
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles></Cycles>
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<PlayCircleIcon></PlayCircleIcon>}
              color="green"
            ></DefaultButton>
          </div>
        </form>
      </Container>
    </>
  );
}
