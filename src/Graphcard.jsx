import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 250 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 300 },
  { name: "May", value: 400 },
  { name: "Jun", value: 350 },
];

const GraphCard = () => {
  return (
    <div className="bg-white shadow-md w-full h-[300px] rounded-lg p-6">
      <h2 className="text-gray-700 font-semibold text-lg">User Growth</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphCard;
