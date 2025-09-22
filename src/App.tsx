import React, { useEffect, useState, useMemo } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import { Employee } from './types/Employee';
import { fetchEmployees } from './services/api';
import './App.css';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployees();
        setEmployees(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar funcionários. Por favor, tente novamente.');
        console.error('Error loading employees:', err);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const filteredEmployees = useMemo(() => {
    if (!searchTerm) return employees;

    const normalizedSearch = searchTerm.toLowerCase();
    return employees.filter((employee) => {
      const nameMatch = employee.name.toLowerCase().includes(normalizedSearch);
      const jobMatch = employee.job.toLowerCase().includes(normalizedSearch);
      const phoneMatch = employee.phone.includes(searchTerm.replace(/\D/g, ''));

      return nameMatch || jobMatch || phoneMatch;
    });
  }, [employees, searchTerm]);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="employees-section">
          <h2 className="section-title">Funcionários</h2>
          <SearchBar onSearch={setSearchTerm} />

          {loading && (
            <div className="loading-state">
              <p>Carregando funcionários...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && filteredEmployees.length === 0 && searchTerm && (
            <div className="empty-state">
              <p>Nenhum funcionário encontrado para "{searchTerm}"</p>
            </div>
          )}

          {!loading && !error && filteredEmployees.length > 0 && (
            <EmployeeTable employees={filteredEmployees} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
