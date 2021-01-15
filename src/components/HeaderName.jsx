import React from 'react';

const HeaderName = (props) => {
  return (
    <div className="flex-row">
      <div className="flex-large-header">
        <h5>NOMBRE DE LA EMPRESA MODELO</h5>
      </div>
      <div className="flex-large-header">
        <button className="button muted-button">Edit</button>
      </div>
    </div>
  );
};
export default HeaderName;
