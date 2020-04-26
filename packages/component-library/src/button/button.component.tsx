import React from 'react';
import classNames from 'classnames';
import './button.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  children?: React.ReactChild | React.ReactChild[];
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
}) => (
  <button
    className={classNames({
      button: true,
      [`button--${variant}`]: variant,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
