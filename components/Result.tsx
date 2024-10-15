import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Other', value: 25.5 },
  { name: 'ACA 25%', value: 25 },
  { name: 'CIMA 14%', value: 14 },
  { name: 'ACCA 35%', value: 35.5 },
];

const COLORS = ['#FFA500', '#FF6347', '#20B2AA', '#4682B4'];

export default function Result() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">
          Your results based on your answers:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="font-semibold">You are most suitable for:</p>
          <p className="text-lg">Association of Chartered Certified Accountant (ACCA)</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}