import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';

const CloseButton = ({ className, onClick, dark }) => {
  const classes = classNames({
    'close-button': true,
    'close-button--dark': dark,
    [className]: className
  });

  return (
    <button className={classes} onClick={onClick}>
      <CloseIcon className="close-button__icon" />
    </button>
  );
};

export default CloseButton;
