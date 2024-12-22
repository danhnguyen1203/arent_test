import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const LineGraph = ({
    data,
    height = 300,
    showYAxis = false,
    backgroundColor = "transparent",
    gridColor = "#777777",
    xAxisColor = "#FFFFFF",
    showHorizontalGrid = false,
    showVerticalGrid = true,
    margin = { top: 10, right: 30, left: 30, bottom: 30 }
}) => {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <LineChart
                data={data}
                margin={margin}
                style={{ backgroundColor }}
            >
                <CartesianGrid
                    horizontal={showHorizontalGrid}
                    vertical={showVerticalGrid}
                    stroke={gridColor}
                    strokeWidth={1}
                />
                <XAxis
                    dataKey="month"
                    stroke={xAxisColor}
                    tickLine={false}
                    axisLine={false}
                    dy={16}
                    tick={{ fill: xAxisColor }}
                />
                {showYAxis && <YAxis />}
                <Line
                    type="monotone"
                    dataKey="value1"
                    stroke="#FFCC21"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#FFCC21", strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="value2"
                    stroke="#8FE9D0"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#8FE9D0", strokeWidth: 0 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineGraph;
