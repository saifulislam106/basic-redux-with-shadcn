export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priroty: "high" | "low" | "medium";
  assignTo: string | null;
}

export interface IUser {
  id: string;
  name: string;
}
