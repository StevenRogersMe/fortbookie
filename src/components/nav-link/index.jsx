import React from 'react';
import classNames from 'classnames';
import Typography from 'components/typography';
// Context
import { useTheme } from 'context/theme-context';
// Styles
import './styles.sass';

const NavLink = ({ children, className, isActive, accent, ...otherProps }) => {
  const { dark } = useTheme();

  const classes = classNames({
    'nav-link': true,
    'is-active': isActive,
    'nav-link--accent': accent,
    'nav-link--dark': dark,
    [className]: className
  });

  return (
    <Typography component="span" variant="h5" className={classes} {...otherProps}>
      {children}
    </Typography>
  );
};

export default NavLink;
