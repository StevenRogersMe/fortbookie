import React from 'react';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const FixedButton = ({ icon: Icon, text, ...otherProps }) => {
  return (
    <div className="fixed-button" {...otherProps}>
      {text.toString() && <Typography component="span" variant="p-sm" className="text-bold fixed-button__text">{text}</Typography>}
      <Icon className="fixed-button__icon" />
    </div>
  );
};

export default FixedButton;
