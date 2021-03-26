import React from 'react';
import classNames from 'classnames'
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const FormGroup = ({ children, label, errorMsg, last, className }) => {
  const classes = classNames({
    'form-group': true,
    'form-group--last': last,
    [className]: className
  });

  return (
    <div className={classes}>
      {label &&
        <Typography component="label" variant="h5" className="form-group__label">{label}</Typography>
      }
      {children}
      {errorMsg && <Typography component="span" variant="p" className="text-danger form-group__error">{errorMsg}</Typography>}
    </div>
  );
};

export default FormGroup;
