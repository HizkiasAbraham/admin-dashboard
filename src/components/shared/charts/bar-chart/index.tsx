import {
  BarChart as Bchart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chartColorVariants, ChartInput } from '../types';

export function BarChart(props: ChartInput) {
  const { data, dataKeys, height } = props;
  return (
    <div className={`w-full h-${height || '80'}`}>
      <ResponsiveContainer width="100%" height="100%">
        <Bchart
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
          <Tooltip />
          {dataKeys?.map((dataKey, index) => (
            <Bar
              key={index}
              dataKey={dataKey}
              fill={chartColorVariants[index]}
              background={{ fill: '#F8F8F8' }}
            />
          ))}
        </Bchart>
      </ResponsiveContainer>
    </div>
  );
}
