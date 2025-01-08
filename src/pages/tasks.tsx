import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TasksCard from "@/modules/tasks/tasksCard";
import { TasksModal } from "@/modules/tasks/tasksModal";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types/taskTypes";
// import {  filterPriority, taskSelect } from "@/redux/feature/task/taskSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";

function Tasks() {
  const { data, isLoading } = useGetTasksQuery(undefined ,{
    pollingInterval:60000,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    
  });

  if(isLoading){
    return <p>loading ...</p>
  }
  // console.log(data,isError,isLoading);
  // const tasks = useAppSelector(taskSelect);
  // const dispatch = useAppDispatch()

  return (
    <div className="container mx-auto ">
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">Tasks</h2>
          <Tabs className="ml-auto mr-4" defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="high">High</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="low">Low</TabsTrigger>
            </TabsList>
          </Tabs>

          <TasksModal />
        </div>
      </div>
      {
    !isLoading && data.tasks.map((task:ITask) => <TasksCard task={task} key={task.id}></TasksCard>)
  }
    </div>
  );
}

export default Tasks;
