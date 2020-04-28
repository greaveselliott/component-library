import React from 'react';

import './checkbox.scss';

type InputFieldProps = {
  id: string;
  name: string;
  value: string;
  onChange?: () => void;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  value,
  onChange,
}) => (
  <input
    className="checkbox"
    id={id}
    name={name}
    value={value}
    type="checkbox"
    onChange={onChange}
  />
);

export default InputField;
