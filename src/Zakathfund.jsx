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
  { name: "Mar", value: 550 },
  { name: "Apr", value: 500 },
  { name: "May", value: 700 },
  { name: "Jun", value: 750 },
];

const Zakathfund = () => {
  return (
    <div className="bg-[#E3D2C3] border shadow-lg rounded-xl p-6   hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-[#2DAA9E] text-xl font-semibold text-center mb-4">
        Zakath Fund
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
            stroke="#2DAA9E"
            strokeWidth={5}
            dot={{ stroke: "#2DAA9E", strokeWidth: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-center text-gray-700 font-semibold text-lg ">
        Years
      </div>
    </div>
  );
};

export default Zakathfund;
