import {
    mockRecordCategories,
    mockRecordGraphData,
    mockExercises,
    mockDiaryEntries
} from '../../../data';
import { ApiClient } from '../../apiClient';

class RecordsService extends ApiClient {
    constructor() {
        super('/api/records');
    }

    async getCategories() {
        return this.get('/categories', mockRecordCategories);
    }

    async getBodyRecord(date) {
        return this.get(`/body-record/${date}`, {
            date,
            data: mockRecordGraphData
        });
    }

    async getExercisesRecord(date) {
        return this.get(`/exercises/${date}`, {
            date,
            data: mockExercises
        });
    }

    async getDiaryEntries() {
        return this.get('/diary', {
            data: mockDiaryEntries,
        });
    }
}

export const recordsService = new RecordsService();
