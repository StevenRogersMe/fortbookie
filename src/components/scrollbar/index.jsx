import React from 'react';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Scrollbar = ({ children, className, maxHeight }) => {
  const classes = classNames({
    'custom-scroll': true,
    [className]: className
  });

  return (
    <SimpleBar className={classes} style={{ maxHeight }}>
      {children}
    </SimpleBar>
  );
};

export default Scrollbar;
