import React from 'react';
import { Employee } from '../../types/Employee';
import { formatDate, formatPhone } from '../../utils/formatters';
import EmployeeTableMobile from './EmployeeTableMobile';
import './EmployeeTable.css';

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th className="hide-mobile">CARGO</th>
            <th className="hide-mobile">DATA DE ADMISSÃO</th>
            <th className="hide-mobile">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="employee-avatar"
                />
              </td>
              <td>
                <div className="employee-name">{employee.name}</div>
              </td>
              <td className="hide-mobile">{employee.job}</td>
              <td className="hide-mobile">{formatDate(employee.admission_date)}</td>
              <td className="hide-mobile">{formatPhone(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <EmployeeTableMobile employees={employees} />
    </div>
  );
};

export default EmployeeTable;