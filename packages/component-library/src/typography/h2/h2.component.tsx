import React from 'react';
import './h2.scss';

const H2: React.FC = ({ children }) => {
  return <h2 className="heading-two">{children}</h2>;
};

export default H2;
