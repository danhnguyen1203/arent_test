import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const RecordGraph = ({ date }) => {
    const data = [
        { month: '6月', value1: 80, value2: 85 },
        { month: '7月', value1: 70, value2: 75 },
        { month: '8月', value1: 75, value2: 65 },
    ];

    return (
        <div className="bg-gray-800 p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-xl">BODY RECORD</h3>
                <span className="text-white">{date}</span>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" stroke="#fff" />
                        <YAxis stroke="#fff" />
                        <Line type="monotone" dataKey="value1" stroke="#FFCC21" />
                        <Line type="monotone" dataKey="value2" stroke="#8FE9D0" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RecordGraph;