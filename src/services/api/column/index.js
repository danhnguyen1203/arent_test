import { mockArticles, mockCategories } from "../../../data";
import { ApiClient } from "../../apiClient";

class ColumnService extends ApiClient {
    constructor() {
        super('/api/column');
    }

    async getCategories() {
        return this.get('/categories', {
            data: mockCategories
        });
    }

    async getArticles() {
        return this.get('/articles', {
            data: mockArticles,
        });
    }
}

export const columnService = new ColumnService();