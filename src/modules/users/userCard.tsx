// import { removeUser } from "@/redux/feature/user/userSilce";
// import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types/taskTypes";
import { MdDelete } from "react-icons/md";

interface IProps{
    user:IUser
}
function UserCard({user}:IProps) {
    // const dispatch = useAppDispatch()
  return (
    <div className="flex justify-between items-center shadow-md p-4 rounded-md w-1/2 mt-12 ">
      <div className="flex gap-3 items-center">
      
        <div>
          <p className="text-2xl font-bold">{user.name}</p>
        </div>
      </div>
      <div className="flex gap-2 text-xl">
        <MdDelete
          // onClick={() => dispatch(removeUser(user.id))}
          className="text-red-400"
        />
        
      </div>
    </div>
  );
}

export default UserCard;
