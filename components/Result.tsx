"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "./ui/button";
import { Copy, PhoneCall } from "lucide-react";
export const description = "A pie chart with a label";
const chartData = [
  { course: "CMA IND", percentage: 25, fill: "#FF4500" },
  { course: "CA", percentage: 22.5, fill: "#FF7F50" },
  { course: "ACCA", percentage: 16, fill: "#FFE4B5" },
  { course: "CMA IND", percentage: 21.5, fill: "#FFA07A" },
  { course: "CMA USA", percentage: 16.7, fill: "#FFDAB9" },
];

const chartConfig = {
  CA: {
    label: "CA",
    color: "hsl(var(--chart-1))",
  },
  "CMA IND": {
    label: "CMA IND",
    color: "hsl(var(--chart-2))",
  },
  ACCA: {
    label: "ACCA",
    color: "hsl(var(--chart-5))",
  },
  "CMA USA": {
    label: "CMA USA",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
export function Result() {
  return (
    <div className="md:w-7/12 lg:w-7/12 mt-14 mx-auto w-full">
      <div className="text-center mb-10 hidden md:block lg:block">
        <p className="font-bold text-2xl text-gray-950">
          Your results based on your answers:
        </p>
      </div>
      <div className="bg-white rounded-md">
        <Card className="flex flex-col md:flex-row lg:flex-row border-b">
          <CardHeader className="ms-0 md:ms-3  lg: ms items-start w-full md:w-7/12">
            <div className="text-start font-semibold">
              <p>You are most suitable for</p>
              <h1 className="text-2xl font-bold w-11/12">
                Association of Chartered Certified Accountant{" "}
                <span className="text-orange-500">(ACCA)</span>
              </h1>
              <p className="text-sm">
                Association of Chartered Certified Accountants are professionals
                who are responsible for the financial management of companies,
                financial reporting, auditing, taxation, and other financial
                aspects of the business. They have a global recognition and are
                highly sought after in the finance industry for their expertise.
                Join this elite group and make a global impact.
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pb-0 mt-6 md:mt-0 p-0 justify-start items-start ">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={chartData}
                  dataKey="percentage"
                  label
                  nameKey="course"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <div className=" h-[80px] flex justify-start gap-4 mt-10 ms-9">
          <Button>View course details</Button>
          <Button className="bg-secondary hover:bg-secondary  text-gray-700 gap-2">
            Consult Assistant <PhoneCall size={15} />
          </Button>
          <Button className="bg-secondary hover:bg-secondary text-gray-700">
            Copy URL{" "}
            <span>
              <Copy size={15} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
