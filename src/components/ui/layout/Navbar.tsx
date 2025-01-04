import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between">
      <h3 className="font-bold text-3xl">
        Redux<span className="text-gray-500">Shadcn</span>
      </h3>
      <div className=" flex gap-4 ">
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}

export default Navbar;
