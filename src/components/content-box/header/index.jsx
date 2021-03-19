import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Header = ({ children, className }) => {
  const classes = classNames({
    'content-box__header': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Header;
