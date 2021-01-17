import React from 'react';

const EmployeeTable = (props) => {
  //Function to calculate Age
  function getAge(dateString) {
    let today = new Date();
    let dateBorn = new Date(dateString);
    let age = today.getFullYear() - dateBorn.getFullYear();
    let differencesMonths = today.getMonth() - dateBorn.getMonth();
    if (
      differencesMonths < 0 ||
      (differencesMonths === 0 && today.getDate() < dateBorn.getDate())
    ) {
      age--;
    }
    return age;
  }

  //Function to capitalize text
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="flex-large">
      <h4>All Employees</h4>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Expertise</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.employees.length > 0 ? (
            props.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{Capitalize(employee.first_name)}</td>
                <td>{Capitalize(employee.last_name)}</td>
                <td>{getAge(employee.birth_day)}</td>
                <td>{Capitalize(employee.employee_type)}</td>
                <td>
                  {employee.designer_type === null
                    ? Capitalize(employee.programming_language)
                    : Capitalize(employee.designer_type)}
                </td>
                <td></td>
                <td>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      props.editRow(employee);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      props.deleteEmployee(employee.id);
                    }}
                  >
                    Delete
                  </button>
                  <button className="button muted-button">Details</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
