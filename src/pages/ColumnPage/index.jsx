import React from 'react';
import RecommendedCategories from '../../components/features/column/categories';
import Articles from '../../components/features/column/articles';

const ColumnPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="mb-12">
                <RecommendedCategories />
            </div>

            <div className="mb-12">
                <Articles />
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