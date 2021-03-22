import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Box = ({ children, isActive, onClick, className }) => {
  const classes = classNames({
    'box': true,
    'is-active': isActive,
    [className]: className
  });

  return (
    <div className={classes} onClick={onClick} style={onClick && {'cursor': 'pointer'}}>
      {children}
    </div>
  );
};

export default Box;
