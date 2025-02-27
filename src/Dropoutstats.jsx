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
  { name: "2019", value: 30 },
  { name: "2020", value: 28 },
  { name: "2021", value: 25 },
  { name: "2022", value: 20 },
  { name: "2023", value: 15 },
  { name: "2024", value: 12 },
];

const Dropoutstats = () => {
  return (
    <div className="bg-[#E3D2C3] border shadow-lg rounded-xl p-6   hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-[#2DAA9E] text-xl font-semibold text-center mb-4">
        Dropout Stats
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
            stroke="#497D74"
            strokeWidth={3}
            dot={{ stroke: "#497D74", strokeWidth: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-center text-gray-700 font-semibold text-lg">
        Years
      </div>
    </div>
  );
};

export default Dropoutstats;
