import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { OpenIcon, ViewIcon, ExportIcon, RemoveIcon } from "@/components/Icons";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 45 },
  { month: "February", desktop: 90 },
  { month: "March", desktop: 65 },
  { month: "April", desktop: 50 },
  { month: "May", desktop: 60 },
  { month: "June", desktop: 100 },
  { month: "July", desktop: 55 },
  { month: "August", desktop: 90 },
  { month: "September", desktop: 30 },
  { month: "October", desktop: 70 },
  { month: "November", desktop: 47 },
  { month: "December", desktop: 169 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

const generateGradient = (month) => {
  const gradients = {
    March: ["#33C600", "#CDF4FF"],
    June: ["#B8B7FF", "#6C5DD3"],
    October: ["#FF4CE2", "#FFB7F5"],
  };
  return gradients[month] || ["#E6E8F0", "#E6E8F0"];
};

const CustomBar = ({ x, y, width, height, month }) => {
  const gradientId = `gradient-${month}`;
  const [startColor, endColor] = generateGradient(month);

  return (
    <g>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="100%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`url(#${gradientId})`}
        rx={8}
        ry={8}
      />
    </g>
  );
};

export function RevenueCard() {
  const [open, setOpen] = useState(true);
  return (
    <Card className="rounded-lg w-full shadow-none h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="flex justify-between items-center border-b border-border px-4 py-6">
          <CardTitle className="text-lg font-bold text-blue-950">Revenue</CardTitle>
          <div className="relative">
            <button onClick={() => setOpen(!open)}>
              <OpenIcon />
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-2 w-40 py-3 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <div className="flex flex-col gap-y-2">
                <button className="flex items-center gap-2 px-4 py-1 hover:bg-gray-50 w-full text-left text-sm font-normal">
                  <ViewIcon />
                  <span className="text-slate-400 hover:text-slate-500">View</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-1 hover:bg-gray-50 w-full text-left text-sm font-normal">
                  <ExportIcon />
                  <span className="text-slate-400 hover:text-slate-500">Export</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-1 hover:bg-gray-50 w-full text-left text-sm font-normal">
                  <RemoveIcon />
                  <span className="text-red-400 hover:text-red-500">Remove</span>
                </button>
              </div>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <div>
      <h2 className="text-3xl font-bold text-blue-950 px-4 pt-5">$112,340</h2>
      </div>
      <CardContent className="pb-5 min-h-0 flex-1">
        {/* chart */}
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="var(--border)"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              stroke="var(--muted-foreground)"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              radius={8}
              barSize={27}
              shape={(props) => (
                <CustomBar {...props} month={props.payload.month} />
              )}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-700"></div>
            <span className="text-xs text-customGray">Pending (10%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
            <span className="text-xs text-customGray">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span className="text-xs text-customGray">Expanse</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
