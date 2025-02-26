import Card from "./Card";
import Navbar from "./Navbar";
import GraphCard from "./Graphcard";
import Header from "./Header";

const App = () => {
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      <Navbar />
      <Header />
      <div className="flex flex-col md:flex-row mx-5 px-6 py-6 gap-6 ">
        <div className="flex flex-col gap-4 w-full md:w-[25%]">
          <Card title="Total Families" number="1,234" />
          <Card title="Total Students" number="57" />
          <Card title="Current Treasury" number="$12,345" />
        </div>

        <div className="w-full md:w-[75%]">
          <GraphCard />
        </div>
      </div>
    </div>
  );
};

export default App;
