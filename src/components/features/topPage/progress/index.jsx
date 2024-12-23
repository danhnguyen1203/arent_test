import React from 'react';
import { useProgress } from '../../../../hooks/queries/useTopPage';

const Progress = () => {
    const { data, isLoading } = useProgress();
    if (isLoading) {
        return (
            <div className="relative aspect-square bg-gray-200 animate-pulse" />
        );
    }
    const { progress, date, image } = data;
    const circleSize = 120;
    const strokeWidth = 4;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dash = (progress * circumference) / 100;

    return (
        <div className="relative">
            <img src={image} alt="Daily meals" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
                <svg width={circleSize} height={circleSize} className="transform -rotate-90">
                    <circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        fill="none"
                        stroke="white"
                        strokeWidth={strokeWidth}
                        opacity="0.25"
                    />
                    <circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        fill="none"
                        stroke="white"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${dash} ${circumference}`}
                    />
                </svg>
                <div className="absolute text-white text-lg">
                    <div className="text-center">
                        <div>{date}</div>
                        <div>{progress}%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;