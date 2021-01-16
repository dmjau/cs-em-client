import React, { useEffect, useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import { v4 as uuidv4 } from 'uuid';
import AddEmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';
import Header from './components/Header';
import { employeeServices } from './services/employee.service';

function App() {
  //State
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    employeeServices
      .getAll()
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Unexpected Error', err);
      });
  };

  //Add New User
  const addEmployee = (employee) => {
    employee.id = uuidv4();
    setEmployees([...employees, employee]);
  };

  //Delete Employee
  const deleteEmployee = (id) => {
    console.log(id);
    const arrayFilter = employees.filter((employee) => employee.id !== id);
    setEmployees(arrayFilter);
  };

  //Edit Employee
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    company_id: '',
    first_name: '',
    last_name: '',
    birth_day: '',
    employee_type: '',
    designer_type: '',
    programming_language: ''
  };
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState);
  const editRow = (employee) => {
    setEditing(true);
    setCurrentEmployee({
      id: employee.id,
      company_id: employee.company_id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      birth_day: employee.birth_day,
      employee_type: employee.employee_type,
      designer_type: employee.designer_type,
      programming_language: employee.programming_language
    });
  };
  const updateEmployee = (id, updateEmployee) => {
    setEditing(false);
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updateEmployee : employee
      )
    );
  };

  return (
    <div className="container">
      {/* Component Header */}
      <Header employees={employees} />
      <div className="flex-row">
        <div className="flex-large">
          {/* Change Form if is Add New Employee or Edit Employee */}
          {editing ? (
            <div>
              <h2>Edit Employee</h2>
              <EditEmployeeForm
                currentEmployee={currentEmployee}
                updateEmployee={updateEmployee}
              />
            </div>
          ) : (
            <div>
              <h2>Add Employee</h2>
              <AddEmployeeForm addEmployee={addEmployee} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Employee Detail</h2>
        </div>
      </div>
      <div className="flex-row">
        {/* Table whit all employees */}
        <EmployeeTable
          employees={employees}
          deleteEmployee={deleteEmployee}
          setEditing={setEditing}
          editRow={editRow}
        />
      </div>
    </div>
  );
}

export default App;
