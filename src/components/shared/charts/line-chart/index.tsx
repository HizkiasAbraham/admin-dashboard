"use client";
import { usd } from "@/src/utils/format-numbers";
import {
  ResponsiveContainer,
  LineChart as LChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
} from "recharts";
import { chartColorVariants, ChartInput } from "../types";

export function LineChart(props: ChartInput) {
  const { data, dataKeys, height, yAxisFormatter, dataItemFormatter } = props;
  return (
    <div className={`w-full h-${height || "80"}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={12}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            axisLine={false}
          />
          <YAxis
            axisLine={false}
            domain={[0, "auto"]}
            tickFormatter={yAxisFormatter}
          />

          <Tooltip formatter={dataItemFormatter} />

          {dataKeys?.map((dataKey, index) => (
            <Line
              type={"natural"}
              key={index}
              stroke={chartColorVariants[index]}
              strokeWidth={3}
              dataKey={dataKey}
            />
          ))}
        </LChart>
      </ResponsiveContainer>
    </div>
  );
}
