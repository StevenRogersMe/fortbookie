import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';

const Close = ({ className, onClick, dark }) => {
  const classes = classNames({
    'close': true,
    'close--dark': dark,
    [className]: className
  });

  return (
    <button className={classes} onClick={onClick}>
      <CloseIcon className="close__icon" />
    </button>
  );
};

export default Close;
