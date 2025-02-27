import Card from "./Card";
import Navbar from "./Navbar";
import GraphCard from "./Graphcard";
import Header from "./Header";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-[#EAEAEA] min-h-screen">
      {/* <Navbar /> */}
      <div className="p-5">
        <Header />
        <div className="flex flex-col md:flex-row mx-5 px-6 py-6 gap-6 ">
          <div className="flex flex-col gap-4 w-full md:w-[25%]">
            <Card
              title="Total Families"
              number="1,234"
              icon={<AiOutlineHeart />}
            />
            <Card title="Total Students" number="57" icon={<AiOutlineUser />} />
            <Card
              title="Current Treasury"
              number="$12,345"
              icon={<FaDollarSign />}
            />
          </div>

          <div className="w-full md:w-[75%]">
            <GraphCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
