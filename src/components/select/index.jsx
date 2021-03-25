import React from 'react';
// UI
import ReactSelect from 'react-select';
// Context
import { useTheme } from 'context/theme-context';
// Styles
import { colourStyles } from './styles';

const Select = ({ options, defaultValue, ...otherProps }) => {
  const { dark } = useTheme();

  return (
    <ReactSelect
      styles={colourStyles(dark)}
      options={options}
      defaultValue={defaultValue}
      {...otherProps}
    />
  );
};

export default Select;
