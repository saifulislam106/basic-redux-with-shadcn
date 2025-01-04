import TasksCard from "@/modules/tasks/tasksCard";
import { TasksModal } from "@/modules/tasks/tasksModal";
import {  taskSelect } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

function Tasks() {
  const tasks = useAppSelector(taskSelect);
  

  return (
    <div className="container mx-auto ">
      <div className="mt-12">
      <TasksModal/>
      </div>
      {
    tasks.map((task) => <TasksCard task={task} key={task.id}></TasksCard>)
  }
    </div>
  );
}

export default Tasks;
