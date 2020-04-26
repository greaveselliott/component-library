import React from 'react';

import './label.scss';

type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => (
  <label className="label" htmlFor={htmlFor}>
    {children}
  </label>
);

export default Label;
