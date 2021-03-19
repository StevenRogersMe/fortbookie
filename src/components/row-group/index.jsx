import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const RowGroup = ({ children, nowrap, center, size }) => {
  const classes = classNames({
    'row-group': true,
    'row-group--nowrap': nowrap,
    'row-group--center': center,
    [`row-group--${size}`]: size
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default RowGroup;
