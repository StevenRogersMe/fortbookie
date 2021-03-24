import React from 'react';
// UI
import ReactSelect from 'react-select';
// Styles
import { colourStyles } from './styles';

const Select = ({ options, defaultValue, ...otherProps }) => {
  return (
    <ReactSelect
      styles={colourStyles}
      options={options}
      defaultValue={defaultValue}
      {...otherProps}
    />
  );
};

export default Select;
