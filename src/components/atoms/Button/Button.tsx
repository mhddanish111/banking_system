import React from 'react';
import './Button.scss';

type buttonProps = {
  className?: string;
  children?: React.ReactNode | String;
  type?: 'submit' | 'reset' | 'button';
  ariaLabel?: string;
  disabled?: boolean;
  others?: any;
  onClick?: any;
};

const Button: React.FC<buttonProps> = ({
  className,
  children,
  type,
  disabled,
  ariaLabel,
  ...others
}) => (
  <button
    aria-label={ariaLabel}
    className={className}
    disabled={disabled}
    type={type}
    {...others}
  >
    {children}
  </button>
);

export default Button;
