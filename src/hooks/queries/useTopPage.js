import { useQuery } from '@tanstack/react-query';
import { topPageService } from '../../services/api/topPage';

export const topPageKeys = {
    all: ['topPage'],
    graph: () => [...topPageKeys.all, 'graph'],
    meals: (page) => [...topPageKeys.all, 'meals', page],
};

export const useTopGraphData = () => {
    return useQuery({
        queryKey: topPageKeys.graph(),
        queryFn: () => topPageService.getGraphData(),
    });
};

export const useTopMealHistory = () => {
    return useQuery({
        queryKey: topPageKeys.meals(),
        queryFn: () => topPageService.getMealHistory(),
    });
};