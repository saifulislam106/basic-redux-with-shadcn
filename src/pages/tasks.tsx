import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TasksCard from "@/modules/tasks/tasksCard";
import { TasksModal } from "@/modules/tasks/tasksModal";
import {  filterPriority, taskSelect } from "@/redux/feature/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


function Tasks() {
  const tasks = useAppSelector(taskSelect);
  const dispatch = useAppDispatch()
  

  return (
    <div className="container mx-auto ">
      <div className="mt-12">

     <div className="flex justify-between items-center">
      <h2 className="text-2xl font-medium">Tasks</h2>
      <Tabs className="ml-auto mr-4" defaultValue="all">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger onClick={()=>dispatch(filterPriority("all"))} value="all">All</TabsTrigger>
        <TabsTrigger onClick={()=>dispatch(filterPriority("high"))} value="high">High</TabsTrigger>
        <TabsTrigger onClick={()=>dispatch(filterPriority("medium"))} value="medium">Medium</TabsTrigger>
        <TabsTrigger onClick={()=>dispatch(filterPriority("low"))} value="low">Low</TabsTrigger>
      </TabsList>
      </Tabs>

      <TasksModal/>
     </div>
      </div>
      {
    tasks.map((task) => <TasksCard task={task} key={task.id}></TasksCard>)
  }
    </div>
  );
}

export default Tasks;
