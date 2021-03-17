import React from 'react';
import classNames from 'classnames';
// UI
import Typography from 'components/typography';
import Button from 'components/button';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as DangerIcon } from 'assets/images/icons/danger.svg';

const ErrorIndicator = ({ className, light, retry }) => {
  const classes = classNames({
    'error-indicator': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <DangerIcon className="error-indicator__icon" />
      <Typography component="h3" className={`${light ? 'text-light' : 'text-dark'}`}>BOOM!</Typography>
      <Typography component="p" className={`${light ? 'text-light' : 'text-dark'}`}> Something has gone terribly wrong</Typography>
      {retry && <Button className="error-indicator__button" variant="primary" size="md" onClick={retry}>Retry</Button>}
    </div>
  );
};

export default ErrorIndicator;
