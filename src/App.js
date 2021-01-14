import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const employeesData = [
    {
      id: uuidv4(),
      company_id: '1',
      first_name: 'Ana',
      last_name: 'Suarez',
      birth_day: '1998-02-22',
      employee_type: 'programmer',
      designer_type: null,
      programming_language: 'Java'
    },
    {
      id: uuidv4(),
      company_id: '1',
      first_name: 'Juan',
      last_name: 'Gimenez',
      birth_day: '1987-11-14',
      employee_type: 'programmer',
      designer_type: null,
      programming_language: 'JavaScript'
    },
    {
      id: uuidv4(),
      company_id: '1',
      first_name: 'Samanta',
      last_name: 'Freitas',
      birth_day: '1993-01-21',
      employee_type: 'programmer',
      designer_type: null,
      programming_language: 'Kotlin'
    },
    {
      id: uuidv4(),
      company_id: '1',
      first_name: 'Matias',
      last_name: 'Kruk',
      birth_day: '1995-09-24',
      employee_type: 'Designer',
      designer_type: 'Web',
      programming_language: null
    },
    {
      id: uuidv4(),
      company_id: '1',
      first_name: 'Carolina',
      last_name: 'Truts',
      birth_day: '2001-08-02',
      employee_type: 'Designer',
      designer_type: 'Graphic',
      programming_language: null
    }
  ];

  //State
  const [employees, setEmployees] = useState(employeesData);

  return (
    <div className="container">
      <h1>HEADER</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Employee</h2>
        </div>
        <div className="flex-large">
          <h2>View Employee Detail</h2>
        </div>
      </div>
      <div className="flex-row">
        <h2>All Employees</h2>
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
}

export default App;
