import React from 'react';

export const DiaryEntry = ({ date, time, content }) => (
    <div className="border border-gray-400 p-4">
        <div className="mb-2">
            <p className="font-bold">{date}</p>
            <p className="text-sm">{time}</p>
        </div>
        <p className="text-sm">{content}</p>
    </div>
);

const DiaryRecord = ({ entries }) => (
    <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">MY DIARY</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {entries.map((entry, index) => (
                <DiaryEntry key={index} {...entry} />
            ))}
        </div>
    </section>
);

export default DiaryRecord;