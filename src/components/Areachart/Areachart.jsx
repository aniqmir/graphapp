import React from "react";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ReferenceLine,
  // Line,
  Legend
} from "recharts";

export default function Areachart(props) {
  const data = [
    {
      name: "1st Period",
      plan: props.values.p1,
      actual: props.values.a1,
      forecast: props.values.f1
    },
    {
      name: "2nd Period",
      plan: props.values.p2,
      actual: props.values.a2,
      forecast: props.values.f2
    },
    {
      name: "3rd Period",
      plan: props.values.p3,
      actual: props.values.a3,
      forecast: props.values.f3
    },
    {
      name: "4th Period",
      plan: props.values.p4,
      actual: props.values.a4,
      forecast: props.values.f4
    },
    {
      name: "5th Period",
      plan: props.values.p5,
      actual: props.values.a5,
      forecast: props.values.f5
    },
    {
      name: "6th Period",
      plan: props.values.p6,
      actual: props.values.a6,
      forecast: props.values.f6
    }
  ];

  return (
    <ComposedChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" allowDecimals={true} />
      <YAxis type="number" domain={[0, 4]} allowDecimals={true} />
      <Tooltip />
      <Legend
        align="right"
        verticalAlign="top"
        wrapperStyle={{ lineHeight: "50px" }}
      />
      <Area
        type="monotone"
        dataKey="plan"
        stackId="1"
        stroke="#2dce89"
        fill="#2dce89"
        legendType="circle"
      />
      <Area
        type="monotone"
        dataKey="actual"
        stackId="1"
        stroke="#525f7f"
        fill="#525f7f"
      />
      <Area
        type="monotone"
        dataKey="forecast"
        stackId="1"
        stroke="#ff8000"
        fill="#ff8000"
      />
      {/* <Line type="monotone" dataKey="actual" stroke="#ff7300" /> */}
      <ReferenceLine y={1} stroke="red" label="Novice" />
      <ReferenceLine y={2} stroke="grey" label="Competent" />
      <ReferenceLine y={3} stroke="yellow" label="Proficient" />
      <ReferenceLine y={4} stroke="green" label="Expert" />
      <ReferenceLine y={5} stroke="blue" label="Master" />
      <Brush dataKey="name" height={30} stroke="#8884d8" />
      {/* <Area
        type="monotone"
        dataKey="plan"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      /> */}
    </ComposedChart>
  );
}
