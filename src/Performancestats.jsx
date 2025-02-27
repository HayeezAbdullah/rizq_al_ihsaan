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
  { name: "2024", al: 12, ol: 15 },
  { name: "2023", al: 18, ol: 20 },
  { name: "2022", al: 25, ol: 28 },
  { name: "2021", al: 30, ol: 35 },
  { name: "2020", al: 40, ol: 45 },
  { name: "2019", al: 50, ol: 48 },
];

const Performancestats = () => {
  return (
    <div className="bg-[#E3D2C3] border shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-[#2DAA9E] text-xl font-semibold text-center mb-4">
        Performance Stats
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
          <YAxis tick={{ fill: "#6B7280" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="al"
            stroke="#ED6363"
            strokeWidth={3}
            dot={{ stroke: "#ED6363", strokeWidth: 5 }}
            name="A/L Performance (2A and more)"
          />
          <Line
            type="monotone"
            dataKey="ol"
            stroke="#001A6E"
            strokeWidth={3}
            dot={{ stroke: "#001A6E", strokeWidth: 5 }}
            name="O/L Performance (5A and more)"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-center text-gray-700 font-semibold text-lg">
        Years
      </div>
    </div>
  );
};

export default Performancestats;
