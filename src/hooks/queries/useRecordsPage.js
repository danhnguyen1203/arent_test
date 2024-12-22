import { useQuery } from '@tanstack/react-query';
import { recordsService } from '../../services/api/records';

export const recordKeys = {
    all: ['records'],
    categories: () => [...recordKeys.all, 'categories'],
    bodyRecord: (date) => [...recordKeys.all, 'bodyRecord', date],
    exercises: (date) => [...recordKeys.all, 'exercises', date],
    diary: (page) => [...recordKeys.all, 'diary', page],
};

export const useRecordCategories = () => {
    return useQuery({
        queryKey: recordKeys.categories(),
        queryFn: () => recordsService.getCategories(),
    });
};

export const useBodyRecord = (date) => {
    return useQuery({
        queryKey: recordKeys.bodyRecord(date),
        queryFn: () => recordsService.getBodyRecord(date),
    });
};

export const useExercises = (date) => {
    return useQuery({
        queryKey: recordKeys.exercises(date),
        queryFn: () => recordsService.getExercisesRecord(date),
    });
};

export const useDiaryEntries = () => {
    return useQuery({
        queryKey: recordKeys.diary(),
        queryFn: () => recordsService.getDiaryEntries(),
    });
};
