import React from 'react';
import './paragraph.scss';

const Paragraph: React.FC = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

export default Paragraph;
