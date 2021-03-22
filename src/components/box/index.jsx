import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Box = ({ children, className, ...otherProps }) => {
  const classes = classNames({
    'box': true,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default Box;
