import React from 'react';
// Styles
import './styles.sass';

const FixedButton = ({ icon: Icon, ...otherProps }) => {
  return (
    <div className="fixed-button" {...otherProps}>
      <Icon className="fixed-button__icon" />
    </div>
  );
};

export default FixedButton;
