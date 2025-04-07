export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  complete: number | null;
  interruptDate: number | null;
  type: "work" | "shortBreakTime" | "longBreakTime";
};
