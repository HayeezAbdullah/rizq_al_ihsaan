import Card from "./Card";
import Navbar from "./Navbar";
import GraphCard from "./GraphCard"; // Import the new GraphCard component

const App = () => {
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      <Navbar />

      <div className="flex gap-6 px-8 py-6">
        <div className="flex flex-col gap-4 w-1/3">
          <Card title="Total Users" number="1,234" />
          <Card title="Active Locations" number="57" />
          <Card title="Revenue" number="$12,345" />
        </div>

        <div className="w-2/3">
          <GraphCard />
        </div>
      </div>
    </div>
  );
};

export default App;
