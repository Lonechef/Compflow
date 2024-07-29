// services/userDataService.js
export const fetchLatestUserData = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/userdata/latest');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
