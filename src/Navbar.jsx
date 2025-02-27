import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="h-11 px-6 mt-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="./logo.png" alt="Logo" className="h-20 w-auto" />
      </div>

      <div className="flex items-center">
        <button className="text-gray-700 text-3xl">
          <AiOutlineSetting />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
