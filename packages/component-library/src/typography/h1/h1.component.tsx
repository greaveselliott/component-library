import React from 'react';
import './h1.scss';

const H1: React.FC = ({ children }) => {
  return <h1 className="heading-one">{children}</h1>;
};

export default H1;
