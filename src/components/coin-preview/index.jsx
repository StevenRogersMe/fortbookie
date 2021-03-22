import React from 'react';
import classNames from 'classnames';
// UI
import Box from 'components/box';
// Styles
import './styles.sass';

const CoinPreview = ({ icon: Icon, isActive, onClick, className }) => {
  const classes = classNames({
    'coin-preview': true,
    'is-active': isActive,
    [className]: className
  });

  return (
    <Box className={classes} onClick={onClick}>
      <Icon className="coin-preview__icon" />
    </Box>
  );
};

export default CoinPreview;
