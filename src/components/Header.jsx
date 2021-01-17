import React, { useEffect, useState } from 'react';
import HeaderName from './HeaderName';
import EditHeaderName from './EditHeaderName';
import { companyServices } from '../services/company.services';

const Header = (props) => {
  //State-------------------------------------------------------------------------------------------------------------------------------
  const [dataCompany, setDataCompany] = useState();

  useEffect(() => {
    getDataCompany();
  }, []);

  //Function to return age from birth date employee-------------------------------------------------------------------------------------
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

  //Function to calculate average age from the list------------------------------------------------------------------------------------
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

  //Get company data and save on state component-----------------------------------------------------------------------------------------
  const getDataCompany = () => {
    companyServices
      .getData()
      .then((res) => {
        setDataCompany(res.data.name);
      })
      .catch((err) => {
        console.log('Unexpected Error', err);
      });
  };

  //Edit company name--------------------------------------------------------------------------------------------------------------------
  const initialFormState = {
    name: ''
  };
  const [editing, setEditing] = useState(false);
  const [currentCompany, setCurrentCompany] = useState(initialFormState);

  //Function on button to render edit form company name
  const editRow = () => {
    setEditing(true);
    setCurrentCompany({
      name: dataCompany
    }); //Send company name to child component EditHeaderName
  };
  //Function on button to render name at send update company name
  const sendRow = () => {
    setEditing(false);
  };

  //Method to update company name using company services---------------------------------------------------------------------------------
  const updateCompany = (id, updateCompany) => {
    setEditing(false);
    companyServices
      .updateById(id, updateCompany)
      .then(console.log('Updated company name'))
      .catch((err) => {
        console.log('Unexpected Error', err);
      });
    setDataCompany(updateCompany.name);
  };

  return (
    <div className="flex-row header">
      {/* Change Form if is company name or edit company name */}
      {editing ? (
        <div className="flex-row">
          <div className="flex-large-header">
            <EditHeaderName
              currentCompany={currentCompany}
              updateCompany={updateCompany}
              sendRow={sendRow}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex-large-header">
            <HeaderName dataCompany={dataCompany} editRow={editRow} />
          </div>
        </div>
      )}
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
