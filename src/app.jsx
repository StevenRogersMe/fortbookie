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
// Context
import { SignInContext } from './app-context';

const App = () => {
  const [isSigned, setIsSigned] = React.useState(false);
  const handleSignIn = () => setIsSigned(true);
  const handleSignOut = () => setIsSigned(false);

  return (
    <div className="app">
      <SignInContext.Provider value={{ isSigned, handleSignIn, handleSignOut }}>
        <Header isSigned={isSigned} />
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
      </SignInContext.Provider>
    </div>
  );
};

export default App;
