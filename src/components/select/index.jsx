import React from 'react';
// UI
import ReactSelect from 'react-select';
// Styles
import { colourStyles } from './styles';

const Select = ({ options, defaultValue }) => {
  return (
    <ReactSelect
      styles={colourStyles}
      options={options}
      defaultValue={defaultValue}
    />
  );
};

export default Select;
