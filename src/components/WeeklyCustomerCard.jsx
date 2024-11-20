
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"

const mobileData = [
  { month: "january", mobile: 80, fill: "#E2E6FF" },
  { month: "february", mobile: 200, fill: "#E2E6FF" },
  { month: "march", mobile: 120, fill: "#E2E6FF" },
  { month: "april", mobile: 190, fill: "#E2E6FF" },
  { month: "may", mobile: 130, fill: "#E2E6FF" },
]

const percentageData = [
  { name: "active", value: 20, fill: "#E2E6FF" },
  { name: "inactive", value: 81, fill: "#FFFFFF" }
]

const innerCircleData = [
  { value: 100, fill: "#FFFFFF" }
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
} 

export function WeeklyCustomerCard() {
  return (
    <div className="relative h-16 w-16 rounded-full overflow-hidden bg-white shadow-lg">
      <ChartContainer
        config={chartConfig}
        className="w-full h-full rounded-full"
      >
        <PieChart width={64} height={64}>
          <defs>
            <filter id="dropShadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2E6FF" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#E2E6FF" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="color3Gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9EC600" stopOpacity={1} />
              <stop offset="100%" stopColor="#CDF4FF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <ChartTooltip />
          <Pie
            data={innerCircleData}
            dataKey="value"
            outerRadius={12}
            filter="url(#dropShadow)"
            strokeWidth={0}
          />
          <Pie
            data={mobileData.map(item => ({ ...item, fill: "url(#colorGradient)" }))}
            dataKey="mobile"
            innerRadius={20}
            outerRadius={28}
            strokeWidth={0}
          />
          <Pie
            data={percentageData.map(item => ({
              ...item,
              fill: item.name === "active" ? "url(#color3Gradient)" : "#FFFFFF"
            }))}
            dataKey="value"
            innerRadius={28}
            outerRadius={32}
            startAngle={90}
            endAngle={-270}
            strokeWidth={0}
          />
        </PieChart>
        <div className="absolute inset-0 flex items-center justify-center">
          <TrendingUp className="w-3 h-3 text-gray-600" />
        </div>
      </ChartContainer>
    </div>
  )
}