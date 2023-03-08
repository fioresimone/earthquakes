import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../store";

const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export default function Timeline() {
  const data = useData((state) => state.data);

  const barsData = data.features
    .map((el) => {
      return {
        date: el.properties.time,
        mag: el.properties.mag > 0 ? el.properties.mag : 0,
        place: el.properties.place,
        depth: el.geometry.coordinates[2],
      };
    })
    .reverse();

  return (
    <ResponsiveContainer height={"85%"}>
      <BarChart
        data={barsData}
        margin={{
          top: 0,
          right: 20,
          left: -30,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0 0" stroke="0" />
        <XAxis
          dataKey="date"
          domain={[barsData[0].time, barsData.at(-1).time]}
          type="number"
          tick={false}
        />
        <YAxis
          domain={[0, Math.max(...barsData.map((el) => el.mag))]}
          fontSize={12}
          tick={true}
        />
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip />}
        />

        <Bar dataKey="mag" fill="var(--light-accent)" barSize={20} />
        <Brush
          dataKey="date"
          height={12}
          stroke="rgba(255,255,255,0.2)"
          fill="#262626"
          tickFormatter={brush}
          startIndex={Math.round(barsData.length * 0.9)}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-light-black text-light-accent text-xs p-2 w-64">
        <p>{payload[0].payload.place}</p>
        <p>
          Date:{" "}
          {new Intl.DateTimeFormat("default", options).format(
            new Date(payload[0].payload.date),
          )}
        </p>
        <p>
          Mag:
          <span className="float-right">
            {payload[0].payload.mag.toFixed(2)}
          </span>
        </p>
        <p>
          Depth:
          <span className="float-right">
            {payload[0].payload.depth.toFixed(2)}
          </span>
        </p>
      </div>
    );
  }

  return null;
};

const brush = (e) => {
  return new Intl.DateTimeFormat("default", options).format(new Date(e));
};
