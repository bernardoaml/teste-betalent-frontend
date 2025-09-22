import { Employee } from '../types/Employee';

const API_URL = 'http://localhost:3005';

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await fetch(`${API_URL}/employees`);
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};