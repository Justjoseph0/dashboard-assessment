"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Pie, PieChart, Label } from "recharts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OpenIcon, ViewIcon, ExportIcon, RemoveIcon } from "@/components/Icons";
import { DailyCustomersCard } from "@/components/DailyCustomersCard";
import { WeeklyCustomerCard } from "@/components/WeeklyCustomerCard";

// Data for the pie chart
const chartData = [
  { type: "current", value: 82.3, fill: "#8B5CF6" }, 
  { type: "new", value: 17.7, fill: "#9EC600" }, 
];

export function CustomersCard() {
  return (
    <Card className="rounded-lg w-full shadow-none h-full">
      <CardHeader className="p-0">
        <div className="flex justify-between items-center border-b border-border px-8 py-3">
          <div className="flex flex-col gap-y-1">
            <CardTitle className="text-lg font-bold text-blue-950">
              Customers
            </CardTitle>
            <CardDescription className="text-sm font-normal text-slate-400">
              Customers that buy our products
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <OpenIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-40 py-3 flex flex-col gap-y-2"
            >
              <DropdownMenuItem className="gap-2 hover:bg-transparent text-sm font-normal">
                <ViewIcon />
                <span className="text-slate-400 hover:text-slate-500">
                  View
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 hover:bg-transparent text-sm font-normal">
                <ExportIcon />
                <span className="text-slate-400 hover:text-slate-500">
                  Export
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-sm font-normal">
                <RemoveIcon />
                <span className="text-red-400 hover:text-red-500">Remove</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex lg:flex-row flex-col items-center gap-y-3 sm:gap-y-0 justify-between mt-6">
          {/* Pie Chart */}
          <div className="relative lg:w-[200px] lg:shadow-2xl shadow-md rounded-full">
            <PieChart width={200} height={200}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="type"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                strokeWidth={0}
              >
                <Label
                  content={({ viewBox }) => (
                    <g>
                      <circle
                        cx={viewBox.cx}
                        cy={viewBox.cy}
                        r={55}
                        fill="white"
                        className="drop-shadow-sm"
                      />
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy - 10}
                          className="text-2xl font-bold fill-blue-600"
                        >
                          82.3%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy + 15}
                          className="text-sm fill-blue-600"
                        >
                          Total
                        </tspan>
                      </text>
                    </g>
                  )}
                />
              </Pie>
            </PieChart>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            {/* Daily customers */}
            <div className="flex items-center gap-4">
              <DailyCustomersCard />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#2B3674]">+18%</span>
                </div>
                <p className="text-sm text-customGray">Daily customers</p>
              </div>
            </div>

            {/* Weekly customers */}
            <div className="flex items-center gap-4">
              <WeeklyCustomerCard />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#2B3674]">+14%</span>
                </div>
                <p className="text-sm text-customGray">Weekly new customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#8B5CF6]" />
            <span className="text-sm text-muted-foreground">
              Current customers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#9EC600]" />
            <span className="text-sm text-muted-foreground">New customers</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
