import { ApiClient } from '../../apiClient';
import { mockGraphData, mockMealData } from '../../../data';

class TopPageService extends ApiClient {
    constructor() {
        super('/api/top');
    }

    async getGraphData() {
        return this.get('/graph', mockGraphData);
    }

    async getMealHistory() {
        return this.get('/meals', mockMealData);
    }
    async getProgress() {
        return this.get('/progress', {
            date: '05/21',
            progress: 75,
            image: '/images/d01.jpg'
        });
    }
}

export const topPageService = new TopPageService();
