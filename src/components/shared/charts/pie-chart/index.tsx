"use client";
import { getPercentage } from "@/src/utils/calculate-percentage";
import { useEffect, useState } from "react";
import {
  Cell,
  Pie,
  ResponsiveContainer,
  Sector,
  PieChart as PiChart,
} from "recharts";
import { chartColorVariants, ChartInput } from "../types";

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.group} ({value})
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

export function PieChart(props: ChartInput) {
  const [activeIndex, setActiveState] = useState<number>(0);

  const [pieRadius, setPieRadius] = useState({
    innerRadius: 55,
    outerRadius: 63,
  });

  const color = [...chartColorVariants].reverse();

  const handleResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
      setPieRadius({
        innerRadius: 110,
        outerRadius: 126,
      });
    } else {
      setPieRadius({ innerRadius: 55, outerRadius: 63 });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("reset", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveState(index);
  };

  const { data, dashboardType, showPercentage } = props;
  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      <div className="flex-1 h-80" onMouseLeave={() => setActiveState(0)}>
        <ResponsiveContainer width="100%" height="100%">
          <PiChart width={600} height={600}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={pieRadius.innerRadius}
              outerRadius={pieRadius.outerRadius}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={color[index]} />
              ))}
            </Pie>
          </PiChart>
        </ResponsiveContainer>
      </div>
      <div
        className="flex-1 flex items-center flex-col items-center justify-center gap-2"
        onMouseLeave={() => setActiveState(0)}
      >
        {data.map((d: any, index) => {
          return (
            <div
              key={index}
              className={`w-full group bg-light-grey hover:bg-yellow hover:text-white rounded-xl cursor-pointer`}
              onMouseEnter={() => setActiveState(index)}
            >
              <div className="p-3 flex gap-1 items-center">
                <div className={`w-1/4 border-l-2 border-purple`}>
                  <p className="font-bold text-sm text black p-1">
                    {showPercentage
                      ? getPercentage(data, d.value, "value", 2)
                      : d.value}
                  </p>
                </div>
                <div className="w-1/2 flex justify-start">
                  <p className="font-medium text-sm text-black group-hover:text-white">
                    {d.group}
                  </p>
                </div>
                {dashboardType !== "project" && (
                  <div className="w-1/4 flex justify-end">
                    <div className="bg-white items-center justify-center flex w-8 h-8 rounded">
                      <p className="font-medium text-sm text-black">
                        {d.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
