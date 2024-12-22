import React from 'react';
import { MdFreeBreakfast, MdLunchDining, MdDinnerDining } from 'react-icons/md';
import { BiCoffeeTogo } from 'react-icons/bi';

const HexagonButton = ({ label, icon: Icon, isActive = false }) => {
    const clipPathStyle = {
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
    };
    return (
        <div className="relative group">
            <div
                style={clipPathStyle}
                className={`
                    w-[134px]
                    h-[134px]
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    text-white
                    transition-transform 
                    duration-200
                    hover:scale-105
                    bg-primary-gradient
                    clip-path-hexagon
                `}
            >
                <Icon className="w-8 h-8 mb-2" />
                <span className="text-lg font-medium">{label}</span>
            </div>
        </div>
    );
};

const MealCategories = () => {
    const categories = [
        { label: 'Morning', icon: MdFreeBreakfast, active: true },
        { label: 'Lunch', icon: MdLunchDining },
        { label: 'Dinner', icon: MdDinnerDining },
        { label: 'Snack', icon: BiCoffeeTogo }
    ];

    return (
        <div className="flex flex-wrap gap-8 justify-center">
            {categories.map((category) => (
                <HexagonButton
                    key={category.label}
                    label={category.label}
                    icon={category.icon}
                    isActive={category.active}
                />
            ))}
        </div>
    );
};

export default MealCategories;