import React from 'react';
import { useColumnArticles } from '../../../../hooks/queries/useColumn';

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

const Articles = () => {
    const { data, isLoading, error } = useColumnArticles();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-6">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="animate-pulse">
                        <div className="aspect-[320/240] bg-gray-200" />
                        <div className="mt-2 h-4 bg-gray-200 rounded w-3/4" />
                        <div className="mt-2 h-4 bg-gray-200 rounded w-1/4" />
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return <div>Error loading articles</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-6">
            {data.data.map((article, index) => (
                <ArticleCard key={index} {...article} />
            ))}
        </div>
    );
};

export default Articles;