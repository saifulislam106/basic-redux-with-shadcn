import UserCard from "@/modules/users/userCard";
import UserModal from "@/modules/users/userModal";
import { selectUser } from "@/redux/feature/user/userSilce";
import { useAppSelector } from "@/redux/hook";

function Users() {

    const users = useAppSelector(selectUser)


  return (
    <div className="container mx-auto ">
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">Users</h2>
          <UserModal/>
        </div>
      </div>
      {users.map((user) => (
        <UserCard user={user} key={user.id}></UserCard>
      ))}
    </div>
  );
}

export default Users;
