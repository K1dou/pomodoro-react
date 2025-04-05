import Container from "./components/container";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <>
      <Container>
        <Heading>L</Heading>
      </Container>
      <Container>
        <Heading>O</Heading>
      </Container>
    </>
  );
}
