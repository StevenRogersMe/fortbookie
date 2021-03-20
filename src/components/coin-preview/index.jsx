import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const CoinPreview = ({ icon: Icon, isActive, onClick, className }) => {
  const classes = classNames({
    'coin-preview': true,
    'is-active': isActive,
    [className]: className
  });

  return (
    <div className={classes} onClick={onClick}>
      <Icon className="coin-preview__icon" />
    </div>
  );
};

export default CoinPreview;
