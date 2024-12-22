import React from 'react';
import RecordGraph from '../../components/features/records/graph';
import ExerciseRecord from '../../components/features/records/exercises';
import DiaryRecord from '../../components/features/records/diary';
import RecordCategories from '../../components/features/records/categories';

const MyRecords = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="mb-8">
                <RecordCategories />
            </div>

            <section className="mb-8">
                <RecordGraph date="2021.05.21" />
            </section>

            <section className="mb-8">
                <ExerciseRecord
                    date="2021.05.21"
                />
            </section>

            <DiaryRecord />

            <div className="text-center">
                <button className="bg-primary-gradient text-white px-8 py-3 hover:scale-105 transition-transform">
                    自分の日記をもっと見る
                </button>
            </div>
        </div>
    );
};

export default MyRecords;
