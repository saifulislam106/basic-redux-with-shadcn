
import { RootState } from "@/redux/store";
import { ITask } from "@/types/taskTypes";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "low" | "medium";
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priroty">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const initialState: InitialState = {
  tasks: [
    {
      id: "asf",
      title: "basic redux",
      description: "redux tools most usefull in js labery",
      dueDate: "25-01-01",
      isCompleted: true,
      priroty: "high",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterPriority: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const taskSelect = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "high") {
    return state.todo.tasks.filter((task) => (task.priroty === "high"));
  }else if(filter === "medium"){
    return state.todo.tasks.filter((task) => (task.priroty === "medium"));
  }
  else if(filter === "low"){
    return state.todo.tasks.filter((task) => (task.priroty === "low"));
  }else{
    return state.todo.tasks
  }

};
export const filterSelect = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, filterPriority } =
  taskSlice.actions;

export default taskSlice.reducer;
