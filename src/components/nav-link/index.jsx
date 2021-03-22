import React from 'react';
import classNames from 'classnames';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const NavLink = ({ children, className, isActive, accent, ...otherProps }) => {
  const classes = classNames({
    'nav-link': true,
    'is-active': isActive,
    'nav-link--accent': accent,
    [className]: className
  });

  return (
    <Typography component="span" variant="h5" className={classes} {...otherProps}>
      {children}
    </Typography>
  );
};

export default NavLink;
