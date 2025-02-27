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
    <div className="bg-[#E3D2C3] shadow-lg rounded-xl p-6   hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-[#2DAA9E] text-xl font-semibold text-center mb-4">
        Fund Growth Over Time
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
          <YAxis tick={{ fill: "#6B7280" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#66D2CE"
            strokeWidth={3}
            dot={{ stroke: "#66D2CE", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-center text-gray-700 font-semibold text-lg mt-4">
        Months
      </div>
    </div>
  );
};

export default GraphCard;
