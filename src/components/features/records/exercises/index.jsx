import React from 'react';

const ExerciseItem = ({ name, duration, kcal }) => (
    <div className="flex justify-between text-white border-b border-gray-600 pb-2">
        <div>
            <p className="text-sm">{name}</p>
            <p className="text-[#FFCC21] text-sm">{kcal}kcal</p>
        </div>
        <span className="text-[#FFCC21]">{duration} min</span>
    </div>
);

const ExerciseRecord = ({ date, exercises }) => (
    <div className="bg-gray-800 p-4">
        <div className="flex items-center mb-4">
            <h3 className="text-white text-xl mr-4">MY EXERCISE</h3>
            <span className="text-white">{date}</span>
        </div>
        <div className="h-[264px] overflow-y-auto grid grid-cols-2 gap-8 pr-6">
            {exercises.map((exercise, index) => (
                <ExerciseItem key={index} {...exercise} />
            ))}
        </div>
    </div>
);

export default ExerciseRecord;