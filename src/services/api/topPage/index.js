import { ApiClient } from '../../apiClient';
import { mockGraphData, mockMealData, mockCategories } from '../../../data';

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
}

export const topPageService = new TopPageService();
