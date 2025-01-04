import { MdDelete } from "react-icons/md";
import { ITask } from "@/types/taskTypes";
import { cn } from "@/lib/utils";
import { CheckboxDemo } from "./checkboxDemo";

interface IProps {
  task: ITask;
}

function TasksCard({ task }: IProps) {
  return (
    <div className="flex justify-between items-center shadow-md p-4 rounded-md w-1/2 mt-12 ">
      <div className="flex gap-3 items-center">
        <div
          className={cn("size-3 rounded-full", {
            "bg-green-500": task.priroty === "Low",
            "bg-yellow-500": task.priroty === "medium",
            "bg-red-500": task.priroty === "High",
          })}
        ></div>
        <div>
          <p className="text-2xl font-bold">{task.title}</p>
          <p>{task.description}</p>
        </div>
      </div>
      <div className="flex gap-2 text-xl">
        <MdDelete className="text-red-400" />
          <CheckboxDemo/>
      </div>
    </div>
  );
}

export default TasksCard;
