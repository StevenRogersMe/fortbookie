import React from 'react';
import TimezoneSelect, { i18nTimezones } from 'react-timezone-select';
// UI
import ReactSelect from 'react-select';
// Context
import { useTheme } from 'context/theme-context';
// Styles
import { selectStyles } from './styles';

const Select = ({ options, defaultValue, timezones, ...otherProps }) => {
  const { dark } = useTheme();

  if (timezones) {
    return (
      <TimezoneSelect
        styles={selectStyles(dark)}
        timezones={i18nTimezones}
        {...otherProps} />
    )
  }

  return (
    <ReactSelect
      styles={selectStyles(dark)}
      options={options}
      defaultValue={defaultValue}
      {...otherProps}
    />
  )
};

export default Select;
