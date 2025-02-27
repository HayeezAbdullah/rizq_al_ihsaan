import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Widows", value: 15 },
  { name: "Families in Poverty", value: 8 },
  { name: "Unemployed", value: 12 },
  { name: "Severe Health Issues", value: 5 },
  { name: "Regular Families", value: 60 },
];

const COLORS = ["#2DAA9E", "#F4A261", "#66D2CE", "#A786DF", "#6B7280"];

const Familystats = () => {
  return (
    <div className="bg-[#E3D2C3] border shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-[#2DAA9E] text-xl font-semibold text-center mb-4">
        Family Types Analysis
      </h2>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Familystats;
