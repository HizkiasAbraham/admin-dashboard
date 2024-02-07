import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { chartColorVariants, ChartInput } from '../types';

export function StackedBarChart(props: ChartInput) {
  const { data, dataKeys } = props;
  const color = [...chartColorVariants].reverse();
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Tooltip />
          {dataKeys?.map((datakey, index) => (
            <Bar
              key={index}
              dataKey={datakey}
              stackId="a"
              fill={color[index]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
