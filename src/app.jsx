import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Redux
import { sessionCheckStart } from 'redux/auth/session-check/actions';
// UI
import ScrollToTop from 'components/scroll-to-top';
import Header from 'modules/header';
// Routes
import { RouteWithSubRoutes } from 'utils/router';
import routes from './screens/routes';
// Styles
import './app.sass';

const App = ({ sessionCheckStart }) => {
  React.useEffect(() => {
    sessionCheckStart();
  }, [sessionCheckStart]);

  return (
    <div className="app">
      <Header />
      <div className="app__wrap">
        <ScrollToTop>
          <Switch>
            {routes.map((route, idx) => (
              <RouteWithSubRoutes key={idx} {...route} />
            ))}
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  sessionCheckStart
};

export default connect(null, mapDispatchToProps)(App);
