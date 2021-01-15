import React from 'react';
import HeaderName from './HeaderName';

const Header = (props) => {
  //Function to return age from birth date employee
  function getAge(dateString) {
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

  //Function to calculate average age from the list
  function Average(array) {
    const arrayEmployees = array;
    var suma = 0;
    var total = arrayEmployees.length;
    var average = 0;
    arrayEmployees.forEach(function (employee) {
      const age = getAge(employee.birth_day);
      suma += age;
    });
    if (arrayEmployees.length > 0) {
      average = suma / total;
    } else {
      average = 0;
    }
    console.log(average);
    return average;
  }

  return (
    <div className="flex-row header">
      <div className="flex-large-header">
        <HeaderName />
      </div>
      <div className="flex-large-header">
        <h5>{props.employees.length} Employees</h5>
      </div>
      <div className="flex-large-header">
        <h5>{Average(props.employees)} Age Average</h5>
      </div>
    </div>
  );
};

export default Header;
