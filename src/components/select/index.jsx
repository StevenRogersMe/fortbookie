import React from 'react';
import TimezoneSelect, { i18nTimezones } from 'react-timezone-select';
import { withBreakpoints } from 'react-breakpoints'
// UI
import ReactSelect from 'react-select';
// Context
import { useTheme } from 'context/theme-context';
// Styles
import { selectStyles } from './styles';

const Select = ({ options, defaultValue, timezones,  breakpoints, currentBreakpoint,...otherProps }) => {
  const { dark } = useTheme();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.md) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

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
