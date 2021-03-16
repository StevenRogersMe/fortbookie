import React from 'react';
// UI
import SignIn from 'modules/sign-in';
// Styles
import './styles.sass';

const AuthorizationPage = () => {
  return (
    <div className="authorization-page">
      <div className="authorization-page__wrap">
        <SignIn />
      </div>
    </div>
  );
};

export default AuthorizationPage;
