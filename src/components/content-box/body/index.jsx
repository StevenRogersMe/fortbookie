import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

Body.propTypes = {
  children: PropTypes.bool,
};

export default Body;
