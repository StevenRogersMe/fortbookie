import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Form = ({ children, className, ...otherProps }) => {
  const classes = classNames({
    'form': true,
    [className]: className
  });

  return (
    <form className={classes} {...otherProps}>
      {children}
    </form>
  );
};

export default Form;
