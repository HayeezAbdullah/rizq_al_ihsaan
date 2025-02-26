import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="h-16 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src="./logo.png" alt="Logo" className="h-20 w-auto" />
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-700 text-lg font-medium">Menu</button>
        <button className="text-gray-700 text-lg font-medium">Support</button>
        <button className="text-gray-700 text-lg font-medium">Sort</button>

        <button className="text-gray-700 text-2xl">
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
