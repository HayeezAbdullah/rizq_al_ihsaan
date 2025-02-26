import Card from "./Card";
import Navbar from "./Navbar";
import GraphCard from "./GraphCard";

const App = () => {
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      <Navbar />
      <div className="flex mx-5  px-8 py-6">
        <div className="flex flex-col gap-4 w-[25%]">
          <Card title="Total Families" number="1,234" />
          <Card title="Total Students" number="57" />
          <Card title="Current Treasury" number="$12,345" />
        </div>

        <div className="w-[75%] mx-5 my-2">
          <GraphCard />
        </div>
      </div>
    </div>
  );
};

export default App;
