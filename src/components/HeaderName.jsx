import React, { useEffect, useState } from 'react';
import { companyService } from '../services/company.services';

const HeaderName = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    companyService
      .getData()
      .then((res) => {
        setData(res.data.name);
      })
      .catch((err) => {
        console.log('Unexpected Error', err);
      });
  };

  return (
    <div>
      <div className="flex-large">
        <h5>{data}</h5>
      </div>
    </div>
  );
};
export default HeaderName;
