import React from 'react';
import './RadioButton.scss';

type RadioButtonProps = {
  className?: string;
  value?: string;
  checked?: boolean;
  ariaLabel?: string;
  name?: string;
  id?: string;
  tabIndex?: number;
  onSelect?: any;
  children?: React.ReactNode;
  other?: any;
};
const RadioButton: React.FC<RadioButtonProps> = React.memo(
  ({
    className,
    value,
    checked,
    children,
    ariaLabel,
    name,
    id,
    tabIndex,
    onSelect,
    other,
  }) => {
    const handleChange = (e: any) => {
      if (e.target.disabled) {
        return;
      }
      if (onSelect) {
        onSelect(e.target.value);
      }
    };
    return (
      <div className={className} key={id}>
        <label htmlFor={id} className="radio">
          <input
            className="radio-button"
            checked={checked}
            value={value}
            id={id}
            name={name}
            type="radio"
            onChange={handleChange}
            tabIndex={tabIndex}
            aria-label={ariaLabel}
            aria-checked={checked}
            {...other}
          />
          <div className="radio-wrapper">
            <div className="outerCircle">
              <div className="innerCircle" />
            </div>
          </div>
          <span className="radio-button-label">{children}</span>
        </label>
      </div>
    );
  },
);

export default RadioButton;
