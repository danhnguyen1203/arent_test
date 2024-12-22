import React from 'react';

const RecommendedCategory = ({ title, subtitle }) => (
    <div className="bg-gray-800 p-8 flex flex-col items-center justify-center text-center h-36">
        <h3 className="text-[#FFCC21] text-xl mb-2">{title}</h3>
        <div className="w-14 h-0.5 bg-white mb-2"></div>
        <p className="text-white">{subtitle}</p>
    </div>
);

export default RecommendedCategory;
