import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Timer = ({ time, className }) => {
  const classes = classNames({
    'timer': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {time}
    </div>
  );
};

export default Timer;
