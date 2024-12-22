import React from 'react';

const RecordCategory = ({ title, subtitle, image }) => (
    <div className="relative group cursor-pointer transition-transform hover:scale-105">
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

export default RecordCategory;
