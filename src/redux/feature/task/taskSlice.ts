import { RootState } from "@/redux/store";
import { ITask } from "@/types/taskTypes";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "low" | "medium";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "asf",
      title: "basic redux",
      description: "redux tools most usefull in js labery",
      dueDate: "25-01-01",
      isCompleted: true,
      priroty: "High",
    },
    {
      id: "asfd",
      title: "Shascn",
      description: "Shadcn is most useable style framework",
      dueDate: "25-01-01",
      isCompleted: true,
      priroty: "medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const taskSelect = (state: RootState) => {
  return state.todo.tasks;
};
export const filterSelect = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
