import { MdDelete } from "react-icons/md";
import { ITask } from "@/types/taskTypes";
import { cn } from "@/lib/utils";
import { CheckboxDemo } from "./checkboxDemo";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/feature/task/taskSlice";
import { selectUser } from "@/redux/feature/user/userSilce";

interface IProps {
  task: ITask;
}

function TasksCard({ task }: IProps) {
  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUser);

  const assignUser = users.find((user) => user.id === task.assignTo);

  return (
    <div className="flex justify-between items-center shadow-md p-4 rounded-md w-1/2 mt-12 ">
      <div className="flex gap-3 items-center">
        <div
          className={cn("size-3 rounded-full", {
            "bg-green-500": task.priroty === "low",
            "bg-yellow-500": task.priroty === "medium",
            "bg-red-500": task.priroty === "high",
          })}
        ></div>
        <div>
          <p className="text-2xl font-bold">{task.title}</p>
          <p className="text-sm">Assign by {assignUser ? assignUser.name : "No One"}</p>
          <p>{task.description}</p>
        </div>
      </div>
      <div className="flex gap-2 text-xl">
        <MdDelete
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-400"
        />
        <div onClick={() => dispatch(toggleCompleteState(task.id))}>
          <CheckboxDemo></CheckboxDemo>
        </div>
      </div>
    </div>
  );
}

export default TasksCard;
