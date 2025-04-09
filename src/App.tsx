import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import Home from "./pages/Home";

import { MessagesContainer } from "./components/MessagesContainer";
import "./styles/global.css";
import "./styles/theme.css";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";

export default function App() {
  return (
    <TaskContextProvider>

      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about-pomodoro" element={<AboutPomodoro></AboutPomodoro>}></Route>


            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </MessagesContainer>

    </TaskContextProvider >
  );
}
