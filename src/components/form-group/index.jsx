import React from 'react';
import classNames from 'classnames'
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const FormGroup = ({ children, label, errorMsg, className }) => {
  const classes = classNames({
    'form-group': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {label &&
        <Typography component="label" variant="h5" className="form-group__label">{label}</Typography>
      }
      {children}
      {errorMsg && <span className="form-group__error">{errorMsg}</span>}
    </div>
  );
};

export default FormGroup;
