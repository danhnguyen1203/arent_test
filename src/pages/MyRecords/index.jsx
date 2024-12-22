import React from 'react';
import RecordCategory from '../../components/features/records/categories';
import RecordGraph from '../../components/features/records/graph';
import ExerciseRecord from '../../components/features/records/exercises';
import DiaryRecord from '../../components/features/records/diary';

const MyRecords = () => {
    const categories = [
        {
            title: 'BODY RECORD',
            subtitle: '自分のカラダの記録',
            image: '/images/MyRecommend-1.jpg',
        },
        {
            title: 'MY EXERCISE',
            subtitle: '自分の運動の記録',
            image: '/images/MyRecommend-2.jpg',
        },
        {
            title: 'MY DIARY',
            subtitle: '自分の日記',
            image: '/images/MyRecommend-3.jpg',
        },
    ];

    const exercises = [
        { name: '家事全般（立位・軽い）', duration: 10, kcal: 26 },
        { name: '家事全般（立位・軽い）', duration: 10, kcal: 26 },
    ].concat(Array(10).fill({ name: '家事全般（立位・軽い）', duration: 10, kcal: 26 }));

    const diaryEntries = Array(8).fill({
        date: '2021.05.21',
        time: '23:25',
        content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...',
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {categories.map((category) => (
                    <RecordCategory key={category.title} {...category} />
                ))}
            </div>

            <section className="mb-8">
                <RecordGraph date="2021.05.21" />
            </section>

            <section className="mb-8">
                <ExerciseRecord
                    date="2021.05.21"
                    exercises={exercises}
                />
            </section>

            <DiaryRecord entries={diaryEntries} />

            <div className="text-center">
                <button className="bg-primary-gradient text-white px-8 py-3 hover:scale-105 transition-transform">
                    自分の日記をもっと見る
                </button>
            </div>
        </div>
    );
};

export default MyRecords;
