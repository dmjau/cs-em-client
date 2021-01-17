import React from 'react';

const HeaderName = (props) => {
  return (
    <div className="flex-row">
      <div className="flex-large-header">
        <button
          className="button muted-button"
          onClick={() => {
            props.editRow();
          }}
        >
          Edit
        </button>
      </div>
      <div className="flex-large">
        <h5>{props.dataCompany}</h5>
      </div>
    </div>
  );
};
export default HeaderName;
