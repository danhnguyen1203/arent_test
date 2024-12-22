import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { mockGraphData } from '../../../../data';

const Graph = () => {
    return (
        <ResponsiveContainer width="100%" height={300} className="flex flex-row self-center p-4">
            <LineChart data={mockGraphData}>
                <CartesianGrid enableBackground={true} />
                <XAxis dataKey="month" />
                <YAxis />
                <Line
                    type="monotone"
                    dataKey="value1"
                    stroke="#FFBA5A"
                    strokeWidth={2}
                    dot={{ fill: '#FFBA5A' }}
                />
                <Line
                    type="monotone"
                    dataKey="value2"
                    stroke="#8FE9D0"
                    strokeWidth={2}
                    dot={{ fill: '#8FE9D0' }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Graph;