import React from 'react';
import classNames from 'classnames';
// Context
import { useTheme } from 'context/theme-context';
// Styles
import './styles.sass';

const Spinner = ({ boxed }) => {
  const { dark } = useTheme();

  const classes = classNames({
    'spinner': true,
    'spinner--light': dark,
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
