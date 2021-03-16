import React from 'react';
// UI
import Container from 'components/container';
// Styles
import './styles.sass';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Container className="layout__container">
        {children}
      </Container>
    </div>
  );
};

export default Layout;
