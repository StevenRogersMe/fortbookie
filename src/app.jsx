import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// UI
import ScrollToTop from 'components/scroll-to-top';
import Header from 'modules/header';
// Pages
import HomePage from 'pages/home-page';
import AuthorizationPage from 'pages/authorization-page';
// Styles
import './app.sass';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__wrap">
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route to="/sign-in" component={AuthorizationPage} />
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  );
};

export default withRouter(App);
