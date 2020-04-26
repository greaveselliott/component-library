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
  <div className="checkbox">
    <input
      className="checkbox__input"
      id={id}
      name={name}
      value={value}
      type="checkbox"
      onChange={onChange}
    />
  </div>
);

export default InputField;
