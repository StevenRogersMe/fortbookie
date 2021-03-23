import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
// UI
import ScrollToTop from 'components/scroll-to-top';
import Header from 'modules/header';
// Routes
import { RouteWithSubRoutes } from 'utils/router';
import routes from './screens/routes';
// Styles
import './app.sass';

const App = () => {
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

export default App;
