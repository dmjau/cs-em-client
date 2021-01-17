import React from 'react';

const ViewDetailEmployee = (props) => {
  //Function to capitalize text--------------------------------------------------------------------------------------------------------
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //Function to calculate Age----------------------------------------------------------------------------------------------------------
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

  return (
    <div className="card-detail">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <label>NAME</label>
            <p>{Capitalize(props.detailEmployee.first_name)}</p>
          </div>
          <div className="flex-large">
            <label>LAST NAME</label>
            <p>{Capitalize(props.detailEmployee.last_name)}</p>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            <label>BIRTHDATE</label>
            <p>{props.detailEmployee.birth_day}</p>
          </div>
          <div className="flex-large">
            <label>AGE</label>
            <p>{getAge(props.detailEmployee.birth_day)}</p>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            <label>ROLE</label>
            <p>{Capitalize(props.detailEmployee.employee_type)}</p>
          </div>
          <div className="flex-large">
            {props.detailEmployee.designer_type === null ? (
              <div>
                <label>PROGRAMMING LANGUAGE</label>
                <p>{Capitalize(props.detailEmployee.programming_language)}</p>
              </div>
            ) : (
              <div>
                <label>DESIGNER TYPE</label>
                <p>{Capitalize(props.detailEmployee.designer_type)}</p>
              </div>
            )}
          </div>
        </div>
        <button
          className="button muted-button"
          onClick={() => {
            props.hideView();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};
export default ViewDetailEmployee;
