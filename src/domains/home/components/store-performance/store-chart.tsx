'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';
import { ChartConfig, ChartContainer } from 'components/ui/chart';

const chartData = [{ browser: 'safari', visitors: 70, fill: '#00996B' }];

const chartConfig = {
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function StoreChart() {
  return (
    <div className="col-span-1">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square">
        <RadialBarChart
          data={chartData}
          startAngle={200}
          endAngle={450}
          innerRadius={72}
          outerRadius={90}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-border-lightest last:fill-background-lightest"
            polarRadius={[76, 71]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-textAndIcon-dark text-titleLarge"
                      >
                        {`${chartData[0].visitors.toLocaleString()}%`}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
