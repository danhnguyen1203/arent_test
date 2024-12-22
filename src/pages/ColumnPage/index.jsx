import React from 'react';
import { mockArticles, mockCategories } from '../../data';
import RecommendedCategory from '../../components/features/column/categories';
import ArticleCard from '../../components/features/column/articles';

const ColumnPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {mockCategories.map((category, index) => (
                    <RecommendedCategory
                        key={index}
                        title={category.title}
                        subtitle={category.subtitle}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-6 mb-12">
                {mockArticles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        {...article}
                    />
                ))}
            </div>

            <div className="text-center">
                <button className="bg-primary-gradient text-white px-16 py-3 rounded-md hover:scale-105 transition-transform">
                    コラムをもっと見る
                </button>
            </div>
        </div>
    );
};

export default ColumnPage;