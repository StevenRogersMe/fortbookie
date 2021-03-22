import React from 'react';
import classNames from 'classnames';
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
    <span className={classes} {...otherProps}>
      {children}
    </span>
  );
};

export default NavLink;
