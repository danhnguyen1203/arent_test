import React from 'react';

const ColumnPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">コラム一覧</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Recommended articles will go here */}
            </div>
        </div>
    );
};

export default ColumnPage;