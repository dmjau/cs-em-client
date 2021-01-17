import React from 'react';
import { useForm } from 'react-hook-form';

const EditHeaderName = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentCompany
  });

  //Full fields with data from current employee---------------------------------------------------------------------------------------
  setValue('name', props.currentCompany.name);

  //Send data to edit-----------------------------------------------------------------------------------------------------------------
  const onSubmit = (data, e) => {
    data.id = '1';
    //Call method to update name from Header parent
    props.updateCompany(data.id, data);

    //Clean fields
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-row">
        <div className="flex-large-header">
          <button className="button muted-button" type="submit">
            Send
          </button>
        </div>
        <div className="flex-large">
          <div>
            <input
              type="text"
              name="name"
              ref={register({
                required: { value: true, message: 'It is required' }
              })}
            />
          </div>
          <div>{errors?.username?.message}</div>
        </div>
      </div>
    </form>
  );
};
export default EditHeaderName;
