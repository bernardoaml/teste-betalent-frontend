import React, { useState } from 'react';
import { Employee } from '../../types/Employee';
import { formatDate, formatPhone } from '../../utils/formatters';
import { getEmployeeImage } from '../../data/employeeImages';
import './EmployeeTable.css';

interface EmployeeTableMobileProps {
  employees: Employee[];
}

const EmployeeTableMobile: React.FC<EmployeeTableMobileProps> = ({ employees }) => {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const toggleCard = (employeeId: string) => {
    setExpandedCards((prev) =>
      prev.includes(employeeId)
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  return (
    <div className="mobile-cards">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className={`employee-card ${expandedCards.includes(employee.id) ? 'expanded' : ''}`}
        >
          <div className="card-header" onClick={() => toggleCard(employee.id)}>
            <img
              src={employee.image}
              alt={employee.name}
              className="employee-avatar"
              onError={(e) => {
                (e.target as HTMLImageElement).src = getEmployeeImage(employee.name);
              }}
            />
            <span className="employee-name">{employee.name}</span>
            <svg className="chevron-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#1C1C1C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="card-details">
            <div className="detail-row">
              <span className="detail-label">Cargo:</span>
              <span className="detail-value">{employee.job}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Data de admissão:</span>
              <span className="detail-value">{formatDate(employee.admission_date)}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Telefone:</span>
              <span className="detail-value">{formatPhone(employee.phone)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeTableMobile;