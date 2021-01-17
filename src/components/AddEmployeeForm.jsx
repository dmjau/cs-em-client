import React from 'react';
import { useForm } from 'react-hook-form';

const AddEmployeeForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  //Send data to create new employee
  const onSubmit = (data, e) => {
    data.id = null;
    data.company_id = '1';

    //Validate empty fields
    if (data.designer_type === '') {
      data.designer_type = null;
    } else {
      data.programming_language = null;
    }
    //Send data to register
    props.addEmployee(data);

    //Clean fields
    e.target.reset();
  };

  return (
    <div className="card">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-row">
            <div className="flex-large">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                ref={register({
                  required: { value: true, message: 'It is required' }
                })}
              />
              <div>{errors?.name?.message}</div>
            </div>
            <div className="flex-large">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                ref={register({
                  required: { value: true, message: 'It is required' }
                })}
              />
              <div>{errors?.username?.message}</div>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-large">
              <label>Birthdate</label>
              <input
                type="date"
                name="birth_day"
                ref={register({
                  required: { value: true, message: 'It is required' }
                })}
              />
              <div>{errors?.birthDate?.message}</div>
            </div>
            <div className="flex-large">
              <label>Role</label>
              <input
                type="text"
                name="employee_type"
                ref={register({
                  required: { value: true, message: 'It is required' }
                })}
              />
              <div>{errors?.role?.message}</div>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-large">
              <label>Designer Type</label>
              <input
                type="text"
                name="designer_type"
                ref={register({
                  required: { value: false, message: 'It is required' }
                })}
              />
              <div>{errors?.designerType?.message}</div>
            </div>
            <div className="flex-large">
              <label>Programming Language</label>
              <input
                type="text"
                name="programming_language"
                ref={register({
                  required: { value: false, message: 'It is required' }
                })}
              />
              <div>{errors?.programmingLanguage?.message}</div>
            </div>
          </div>
          <button type="submit">Add new employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
