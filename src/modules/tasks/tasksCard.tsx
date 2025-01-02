import { MdDelete } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
function TasksCard() {
    return (
        <div className="flex justify-between bg-lime-50 shadow-md p-4 rounded-md w-1/2">
            <div className="flex gap-3 items-center">
            <div className="w-5 h-5 rounded-full bg-green-600 text-green-600">
                0
            </div>
            <p>This is tasks about redux</p>
            </div>
        <div className="flex gap-2 text-xl">
            <MdDelete/>
            <GoArrowUpRight/>
        </div>

        </div>
    );
}

export default TasksCard;

