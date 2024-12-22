import { ApiClient } from "../../apiClient";

class AuthService extends ApiClient {
    constructor() {
        super('/api/auth');
    }

    async login(credentials) { // test credentials
        return this.get('/login', {
            data: {
                token: 'mock_token',
                user: {
                    id: 1,
                    name: 'Test User',
                }
            }
        });
    }
}

export const authService = new AuthService();