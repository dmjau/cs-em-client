import React from 'react';
import { useForm } from 'react-hook-form';

const EditEmployeeForm = (props) => {
  console.log(props.currentEmployee);

  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentEmployee
  });

  setValue('first_name', props.currentEmployee.first_name);
  setValue('last_name', props.currentEmployee.last_name);
  setValue('birth_date', props.currentEmployee.birth_date);
  setValue('employee_type', props.currentEmployee.employee_type);
  setValue('designer_type', props.currentEmployee.designer_type);
  setValue('programming_language', props.currentEmployee.programming_language);

  const onSubmit = (data, e) => {
    console.log(data);
    data.id = props.currentEmployee.id;
    data.company_id = '1';

    //Validate empty fields
    if (data.designer_type === '') {
      data.designer_type = null;
    } else {
      data.programming_language = null;
    }

    props.updateEmployee(props.currentEmployee.id, data);

    //Clean fields
    e.target.reset();
  };

  return (
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
            name="birth_date"
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
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditEmployeeForm;