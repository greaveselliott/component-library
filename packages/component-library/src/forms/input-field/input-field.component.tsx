import React from 'react';
import classnames from 'classnames';

import './input-field.scss';

type InputFieldProps = {
  id: string;
  name: string;
  type?: 'text' | 'password' | 'email';
  onChange?: () => void;
  placeholder: string;
  Icon?: React.FC;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type = 'text',
  onChange,
  placeholder,
  Icon,
}) => (
  <div className="input-field">
    {Icon && (
      <div className="input-field__icon">
        <Icon />
      </div>
    )}
    <input
      className={classnames('input-field__field', {
        'input-field__field--with-icon': Icon,
      })}
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
