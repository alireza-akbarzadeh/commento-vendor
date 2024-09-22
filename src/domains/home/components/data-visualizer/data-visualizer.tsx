import { Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "components";
import { kFormatter } from "lib/utils";
import { TabsVisualizer } from "./tabs-visualizer";

export const DataVisualizer = () => {
  const chartData = [
    { month: "فروردین", desktop: 186000, mobile: 80000 },
    { month: "اردیبهشت", desktop: 3050000, mobile: 200000 },
    { month: "خرداد", desktop: 237000, mobile: 1200000 },
    { month: "تیر", desktop: 73000, mobile: 1900000 },
    { month: "مرداد", desktop: 209000, mobile: 13000000 },
    { month: "شهریور", desktop: 214000, mobile: 14000000 },
    { month: "مهر", desktop: 1860000, mobile: 16000000 },
    { month: "آبان", desktop: 1800000, mobile: 11000000 },
    { month: "آذر", desktop: 1260000, mobile: 15000000 },
    { month: "دی", desktop: 195000, mobile: 12500000 },
    { month: "بهمن", desktop: 2700000, mobile: 17000000 },
    { month: "اسفند", desktop: 1860000, mobile: 19000000 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#000000",
    },
    mobile: {
      label: "Mobile",
      color: "#D0E3F5",
    },
  } satisfies ChartConfig;

  return (
    <div className="col-span-12 rounded-XL border border-border-lighter bg-background-lightest p-6 md:col-span-9">
      <TabsVisualizer />
      <ChartContainer config={chartConfig} className="h-[220px] w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value}
          />
          <YAxis
            yAxisId="left"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={({ x, y, payload }) => {
              return (
                <text
                  x={x}
                  y={y}
                  style={{
                    fill: "#6A6E73",
                    fontSize: "12px",
                    fontWeight: 500,
                    fontFamily: "Vazirmatn-Regular",
                  }}
                >
                  {payload.value > 0 ? kFormatter(payload.value) : null}
                </text>
              );
            }}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
            yAxisId="left"
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
            yAxisId="left"
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
