import React from 'react';
// UI
import Container from 'components/container';
// Styles
import './styles.sass';
// Assets
import SignInImage from 'assets/images/sign-container/sign-container-image.jpg';

const SignContainer = ({ children }) => {
  return (
    <Container className="sign-container">
      <div className="sign-container__wrap">
        <div className="sign-container__image">
          <img src={SignInImage} alt="sign" />
        </div>
        <div className="sign-container__content">
          {children}
        </div>
      </div>
    </Container>
  );
};

export default SignContainer;
