import React from 'react';
import SimpleBar from 'simplebar-react'
// Styles
import './styles.sass';

const Scrollbar = ({ children, maxHeight }) => {
  return (
    <SimpleBar style={{ maxHeight }}>
      { children}
    </SimpleBar>
  );
};

export default Scrollbar;
