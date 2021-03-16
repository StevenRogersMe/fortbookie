import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Container = ({ children, className }) => {
  const classes = classNames({
    'container': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Container;
