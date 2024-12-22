import { useQuery } from '@tanstack/react-query';
import { columnService } from '../../services/api/column';

export const columnKeys = {
    all: ['column'],
    categories: () => [...columnKeys.all, 'categories'],
    articles: () => [...columnKeys.all, 'articles'],
};

export const useColumnCategories = () => {
    return useQuery({
        queryKey: columnKeys.categories(),
        queryFn: () => columnService.getCategories(),
    });
};

export const useColumnArticles = () => {
    return useQuery({
        queryKey: columnKeys.articles(),
        queryFn: () => columnService.getArticles(),
    });
};