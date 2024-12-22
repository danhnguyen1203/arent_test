const MOCK_DELAY = 1000; // may set in env in the future

export class ApiClient {
    constructor(baseURL = '/api', mockDelay = MOCK_DELAY) {
        this.baseURL = baseURL;
        this.mockDelay = mockDelay;
    }

    async get(endpoint, mockData) {
        // For mock data
        if (mockData) {
            return this.mockRequest(mockData);
        }

        // For real API
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    async mockRequest(mockData) {
        await new Promise(resolve => setTimeout(resolve, this.mockDelay));
        return mockData;
    }
}