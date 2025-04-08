import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import Home from "./pages/Home";

import { MessagesContainer } from "./components/MessagesContainer";
import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
