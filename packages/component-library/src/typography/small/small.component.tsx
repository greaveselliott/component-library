import React from 'react';
import './small.scss';

const Small: React.FC = ({ children }) => {
  return <p className="small">{children}</p>;
};

export default Small;
