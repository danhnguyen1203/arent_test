import React from 'react';
import LineGraph from '../../../common/graph';
import { useBodyRecord } from '../../../../hooks/queries/useRecordsPage';

const RecordGraph = ({ date }) => {
    const { data, isLoading, error } = useBodyRecord(date);
    const timeButtons = ['日', '週', '月', '年'];

    if (isLoading) {
        return <div className="bg-[#2E2E2E] p-4 rounded h-64 animate-pulse" />;
    }

    if (error) {
        return <div className="bg-[#2E2E2E] p-4 rounded text-white">Error loading body record</div>;
    }

    return (
        <div className="bg-[#2E2E2E] p-4 rounded">
            <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-white text-xl">BODY RECORD</h3>
                <span className="text-white">{date}</span>
            </div>
            <div className="h-64">
                <LineGraph
                    data={data.data}
                    backgroundColor="#2E2E2E"
                    showYAxis={false}
                    showHorizontalGrid={false}
                    showVerticalGrid={true}
                />
            </div>
            <div className="flex space-x-4 mt-16">
                {timeButtons.map((text, index) => (
                    <button
                        key={index}
                        className={`w-14 h-8 rounded-full text-white 
                            ${index === 2 ? 'bg-[#FFCC21]' : 'bg-white/25'}`}
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RecordGraph;