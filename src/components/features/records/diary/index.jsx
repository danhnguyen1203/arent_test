import React from 'react';
import { useDiaryEntries } from '../../../../hooks/queries/useRecordsPage';

export const DiaryEntry = ({ date, time, content }) => (
    <div className="border border-gray-400 p-4">
        <div className="mb-2">
            <p className="font-bold">{date}</p>
            <p className="text-sm">{time}</p>
        </div>
        <p className="text-sm">{content}</p>
    </div>
);

const DiaryRecord = () => {
    const { data, isLoading, error } = useDiaryEntries();
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="border border-gray-400 p-4 animate-pulse h-48" />
                ))}
            </div>
        );
    }

    if (error) {
        return <div>Error loading diary entries</div>;
    }
    return (
        <section className="mb-8">
            <h3 className="text-xl font-bold mb-4">MY DIARY</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {data.data.map((entry, index) => (
                    <DiaryEntry key={index} {...entry} />
                ))}
            </div>
        </section>
    )
};

export default DiaryRecord;