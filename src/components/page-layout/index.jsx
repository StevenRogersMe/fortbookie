import React from 'react';
import classNames from 'classnames';
// UI
import Container from 'components/container';
// Styles
import './styles.sass';

const PageLayout = ({ children, className }) => {
  const classes = classNames({
    'page-layout': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Container className="page-layout__container">
        {children}
      </Container>
    </div>
  );
};

export default PageLayout;
