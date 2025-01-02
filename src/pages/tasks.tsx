import TasksCard from "@/modules/tasks/tasksCard";
import { filterSelect, taskSelect } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


function Tasks() {
    const tasks = useAppSelector(taskSelect)
    const filter = useAppSelector(filterSelect)
    console.log(tasks,filter);

    return (
        <div className="container mx-auto">
            This is tasks
            <TasksCard></TasksCard>
        </div>
    );
}

export default Tasks;