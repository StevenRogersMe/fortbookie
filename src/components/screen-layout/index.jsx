import React from 'react';
import classNames from 'classnames';
// UI
import Container from 'components/container';
// Styles
import './styles.sass';

const ScreenLayout = ({ children, className }) => {
  const classes = classNames({
    'screen-layout': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Container className="screen-layout__container">
        {children}
      </Container>
    </div>
  );
};

export default ScreenLayout;
