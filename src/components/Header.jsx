import React from 'react';
import HeaderName from './HeaderName';

const Header = (props) => {
  //Function to return age from birth date employee
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
      average = (suma / total).toFixed(2);
    } else {
      average = 0;
    }
    return average;
  }

  return (
    <div className="flex-row header">
      <div className="flex-large-header">
        <HeaderName />
      </div>
      <div className="flex-large-header">
        <button className="button muted-button">Edit</button>
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
