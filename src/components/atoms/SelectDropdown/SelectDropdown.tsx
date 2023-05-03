import React from 'react';
import { isEmpty } from 'lodash';
import './SelectDropdown.scss';

type OptionProps = {
  label: string;
  value: string;
};

type SelectDropdownProps = {
  id: string;
  label: string;
  name: string;
  className?: string;
  value?: string;
  ariaLabel?: string;
  placeholder?: string;
  options: Array<OptionProps>;
  children?: React.ReactNode;
  onChange?: any;
  others?: any;
};

const SelectDropdown: React.FC<SelectDropdownProps> = (
  props: SelectDropdownProps,
) => {
  const {
    id,
    label,
    name,
    className,
    value,
    ariaLabel,
    children,
    placeholder,
    options,
    others,
    onChange,
  } = props;
  const getOption = () => {
    return (
      <>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} aria-label={opt.label}>
            {opt.label}
          </option>
        ))}
      </>
    );
  };
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        name={name}
        className={`select-dropdown ${className}`}
        value={value}
        aria-label={ariaLabel}
        onChange={onChange}
        {...others}
      >
        {!isEmpty(children) && children}
        {isEmpty(children) && getOption()}
      </select>
    </>
  );
};

export default SelectDropdown;
