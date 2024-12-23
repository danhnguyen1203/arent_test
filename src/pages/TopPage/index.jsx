import React from 'react';
import Graph from '../../components/features/topPage/graph';
import MealCategories from '../../components/features/topPage/categories';
import MealHistory from '../../components/features/topPage/mealHistory';
import Card from '../../components/common/card';
import Button from '../../components/common/button';
import Progress from '../../components/features/topPage/progress';

const TopPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <section className="mb-8">
                <Card className='!p-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#2E2E2E]">
                        <Progress />
                        <Graph />
                    </div>
                </Card>
            </section>
            <MealCategories />
            <MealHistory />
            <div className="text-center">
                <Button>記録をもっと見る</Button>
            </div>
        </div>
    );
};

export default TopPage;