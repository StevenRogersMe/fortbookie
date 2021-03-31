import React from 'react';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Scrollbar = ({ children, className, maxHeight, ...otherProps }) => {
  const classes = classNames({
    'custom-scroll': true,
    [className]: className
  });

  return (
    <SimpleBar className={classes} style={{ maxHeight }} {...otherProps}>
      {children}
    </SimpleBar>
  );
};

export default Scrollbar;
