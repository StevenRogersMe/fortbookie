import React from 'react';
// Styles
import './styles.sass';
// Assets
import SignInImage from 'assets/images/sign-container/sign-container-image.jpg';

const SignContainer = ({ children }) => {
  return (
    <div className="sign-container">
      <div className="sign-container__image-wrap">
        <figure className="sign-container__image" style={{backgroundImage: `url(${SignInImage})`}}></figure>
      </div>
      <div className="sign-container__content">
        {children}
      </div>
    </div>
  );
};

export default SignContainer;
