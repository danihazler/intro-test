import React from 'react';

import Header from '../Header';

const MainWrapper = props => {
  return (
    <div className="flex jc-end">
      <Header />
      {props.children}
    </div>
  );
};

export default MainWrapper;
