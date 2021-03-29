import React from 'react';
import TimezoneSelect, { i18nTimezones } from 'react-timezone-select';
import { withBreakpoints } from 'react-breakpoints'
// Context
import { useTheme } from 'context/theme-context';
// Hooks
import useIsBreakpoint from 'hooks/use-is-breakpoint';
// UI
import ReactSelect from 'react-select';
// Styles
import { selectStyles } from './styles';

const Select = ({ options, defaultValue, timezones,  currentBreakpoint,...otherProps }) => {
  const { dark } = useTheme();
  const isMobile = useIsBreakpoint(currentBreakpoint, 'md');

  if (timezones) {
    return (
      <TimezoneSelect
        styles={selectStyles(dark)}
        timezones={i18nTimezones}
        menuShouldScrollIntoView={isMobile}
        menuShouldBlockScroll={isMobile}
        {...otherProps} />
    )
  }

  return (
    <ReactSelect
      styles={selectStyles(dark)}
      options={options}
      defaultValue={defaultValue}
      menuShouldScrollIntoView={isMobile}
      menuShouldBlockScroll={isMobile}
      {...otherProps}
    />
  )
};

export default withBreakpoints(Select);
