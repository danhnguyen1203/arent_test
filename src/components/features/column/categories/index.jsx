import React from 'react';
import { useColumnCategories } from '../../../../hooks/queries/useColumn';

const RecommendedCategory = ({ title, subtitle }) => (
    <div className="bg-gray-800 p-8 flex flex-col items-center justify-center text-center h-36">
        <h3 className="text-[#FFCC21] text-xl mb-2">{title}</h3>
        <div className="w-14 h-0.5 bg-white mb-2"></div>
        <p className="text-white">{subtitle}</p>
    </div>
);

const RecommendedCategories = () => {
    const { data, isLoading, error } = useColumnCategories();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-800 h-36 animate-pulse"
                    />
                ))}
            </div>
        );
    }

    if (error) {
        return <div>Error loading categories</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data?.data.map((category, index) => (
                <RecommendedCategory
                    key={index}
                    {...category}
                />
            ))}
        </div>
    );
};

export default RecommendedCategories;