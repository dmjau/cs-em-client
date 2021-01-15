import React from 'react';

const EmployeeTable = (props) => {
  console.log(props.employees);

  function getEdad(dateString) {
    let hoy = new Date();
    let fechaNacimiento = new Date(dateString);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
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
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{getEdad(employee.birth_day)}</td>
                <td>{employee.employee_type}</td>
                <td>
                  {employee.designer_type === null
                    ? employee.programming_language
                    : employee.designer_type}
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
