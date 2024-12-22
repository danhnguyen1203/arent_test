import React from 'react';
import { mockMealData } from '../../../../data';

const MealCard = ({ image, date, type }) => (
    <div className="relative">
        <img
            src={image}
            alt={`${type} meal`}
            className="w-full aspect-square object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-white px-3 py-1">
            {date} {type}
        </div>
    </div>
);
const MealHistory = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 py-8 px-24">
            {mockMealData.map((meal) => (
                <MealCard key={meal.id} {...meal} />
            ))}
        </div>
    );
};

export default MealHistory;