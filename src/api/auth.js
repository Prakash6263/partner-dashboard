const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/partner/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  },

  getProfile: async (token) => {
    const response = await fetch(`${API_BASE_URL}/api/partner/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  },

  logout: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/partner/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.ok;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  },
};
