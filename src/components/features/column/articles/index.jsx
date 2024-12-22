import React from 'react';

const ArticleCard = ({ image, date, time, title, tags }) => (
    <div className="flex flex-col">
        <div className="relative aspect-[320/240]">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-white px-2 py-1">
                {date} {time}
            </div>
        </div>
        <p className="mt-2 text-sm line-clamp-2">{title}</p>
        <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <span key={index} className="text-sm text-[#FFCC21]">
                    #{tag}
                </span>
            ))}
        </div>
    </div>
);

export default ArticleCard;
