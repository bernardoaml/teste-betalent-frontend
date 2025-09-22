import { Employee } from '../types/Employee';
import employeesData from '../data/employees.json';

export const fetchEmployees = async (): Promise<Employee[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employeesData.employees);
    }, 100);
  });
};