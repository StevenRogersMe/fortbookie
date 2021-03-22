import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Burger = ({ className, ...otherProps }) => {
  const classnames = classNames({
    'burger': true,
    [className]: className
  });

  return (
    <div className={classnames} {...otherProps}>
      <span></span>
    </div>
  );
};

export default Burger;
