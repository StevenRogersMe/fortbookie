import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const ToggleSwitch = ({ onChange, checked, className }) => {
  const classes = classNames({
    switch: true,
    [className]: className
  });

  return (
    <div className={classes}>
      <input type="checkbox" className="switch__input" id="switch" onChange={onChange} checked={checked}/>
      <label for="switch" className="switch__label"></label>
    </div>
  );
};

export default ToggleSwitch;
