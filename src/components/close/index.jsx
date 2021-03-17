import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';

const Close = ({ className, onClick }) => {
  const classes = classNames({
    'close': true,
    [className]: className
  });

  return (
    <div className={classes} onClick={onClick}>
      <CloseIcon className="close__icon" />
    </div>
  );
};

export default Close;
