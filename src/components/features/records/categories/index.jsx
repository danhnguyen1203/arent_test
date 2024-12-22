import React from 'react';
import { useRecordCategories } from '../../../../hooks/queries/useRecordsPage';

const RecordCategory = ({ title, subtitle, image }) => {
    return (
        <div className="relative group cursor-pointer border-[32px] border-[#FFCC21]">
            <div className="aspect-square">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black/40">
                    <h3 className="text-xl font-bold mb-1">{title}</h3>
                    <p className="text-sm bg-primary-gradient px-4 py-1 rounded-sm">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

const RecordCategories = () => {
    const { data, isLoading, error } = useRecordCategories();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="aspect-square animate-pulse bg-gray-200 border-[32px] border-[#FFCC21]"
                    />
                ))}
            </div>
        );
    }

    if (error) {
        return <div>Error loading categories</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((category) => (
                <RecordCategory
                    key={category.title}
                    {...category}
                />
            ))}
        </div>
    );
};

export default RecordCategories;
