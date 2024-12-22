import React from 'react';
import { mockMealData } from '../../../../data';
import { useTopMealHistory } from '../../../../hooks/queries/useTopPage';

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
    const { data, isLoading, error } = useTopMealHistory();
    if (isLoading) {
        return <div className="grid grid-cols-2 md:grid-cols-4 py-8 px-24">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 aspect-square" />
            ))}
        </div>;
    }

    if (error) {
        return <div>Error loading meal history</div>;
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 py-8 px-24">
            {data.map((meal) => (
                <MealCard key={meal.id} {...meal} />
            ))}
        </div>
    );
};

export default MealHistory;