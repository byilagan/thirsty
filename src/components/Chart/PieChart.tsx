'use client';

// React
import { useEffect, useState } from "react"; 

// Libs
import { PieChart as PChart, Pie, Cell } from "recharts"; 

// Types
import { IPieChartItem } from "@types";

type PieChartProps = {
  className: string, 
  data: IPieChartItem[]
}

export const PieChart = ({ className, data }: PieChartProps) => {
  const [chartData, setData] = useState<any[]>([]); 

  useEffect(() => {
    setData(data);
  }, [data])

  return (
    <PChart width={120} height={120} className={className}>
      <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
        {chartData.map((entry, index) => 
          <Cell
              key={`cell-${index}`}
              fill={entry.color}
          />
        )}
      </Pie>
    </PChart>
  )
}