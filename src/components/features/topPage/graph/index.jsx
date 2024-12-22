import React from 'react';
import LineGraph from '../../../common/graph';
import { useTopGraphData } from '../../../../hooks/queries/useTopPage';

const TopGraph = () => {
    const { data, isLoading, error } = useTopGraphData();
    if (isLoading) {
        return <div className="animate-pulse bg-gray-700 h-full" />;
    }

    if (error) {
        return <div className="text-white">Error loading graph data</div>;
    }
    return (
        <LineGraph
            data={data}
            showYAxis={false}
            showHorizontalGrid={false}
            showVerticalGrid={true}
            xAxisColor="#FFFFFF"
            gridColor="#777777"
        />
    );
};

export default TopGraph;
