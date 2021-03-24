import React from 'react';
import classNames from 'classnames'
// Styles
import './styles.sass';

const FormGroup = ({ children, errorMsg, className }) => {
  const classes = classNames({
    'form-group': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
      {errorMsg && <span className="form-group__error">{errorMsg}</span>}
    </div>
  );
};

export default FormGroup;
