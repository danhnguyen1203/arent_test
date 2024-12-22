import React from 'react';
import { useExercises } from '../../../../hooks/queries/useRecordsPage';

const ExerciseItem = ({ name, duration, kcal }) => (
    <div className="flex justify-between text-white border-b border-gray-600 pb-2">
        <div>
            <p className="text-sm">{name}</p>
            <p className="text-[#FFCC21] text-sm">{kcal}kcal</p>
        </div>
        <span className="text-[#FFCC21]">{duration} min</span>
    </div>
);

const ExerciseRecord = ({ date }) => {
    const { data, isLoading, error } = useExercises(date);

    if (isLoading) {
        return (
            <div className="bg-gray-800 p-4">
                <div className="flex items-center mb-4">
                    <h3 className="text-white text-xl mr-4">MY EXERCISE</h3>
                    <span className="text-white">{date}</span>
                </div>
                <div className="h-[264px] overflow-y-auto grid grid-cols-2 gap-8 pr-6">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-600 rounded w-1/4"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-800 p-4 text-white">
                Error loading exercise data
            </div>
        );
    }
    return (
        <div className="bg-gray-800 p-4">
            <div className="flex items-center mb-4">
                <h3 className="text-white text-xl mr-4">MY EXERCISE</h3>
                <span className="text-white">{date}</span>
            </div>
            <div className="h-[264px] overflow-y-auto grid grid-cols-2 gap-8 pr-6">
                {data.data.map((exercise, index) => (
                    <ExerciseItem key={index} {...exercise} />
                ))}
            </div>
        </div>
    );
};

export default ExerciseRecord;
