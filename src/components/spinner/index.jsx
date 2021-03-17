import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Spinner = ({ light, boxed }) => {
  const classes = classNames({
    'spinner': true,
  });

  return (
    <WithBox boxed={boxed}>
      <div className={classes}>
        <div className="spinner__inner">
          <div></div>
          <div></div>
        </div>
      </div>
    </WithBox>
  );
};

const WithBox = ({ children, boxed }) => (
  <>
    {boxed ?
      <div className="spinner-box">{children}</div>
      :
      children
    }
  </>
);

export default Spinner;
