import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// UI
import ScrollToTop from 'components/scroll-to-top';
import Header from 'modules/header';
// Routes
import routes from './screens/routes';
// Styles
import './app.sass';

export const signInContext = React.createContext();

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

const App = () => {
  const [isSigned, setIsSigned] = React.useState(false);
  const handleSignIn = () => setIsSigned(true);
  const handleSignOut = () => setIsSigned(false);

  return (
    <div className="app">
      <signInContext.Provider value={{ isSigned, handleSignIn, handleSignOut }}>
        <Header isSigned={isSigned} />
        <div className="app__wrap">
          <ScrollToTop>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Redirect to="/" />
            </Switch>
            {/*
              <Route path="/" exact component={HomePage} />
              <Route path="/sign-in" exact component={SignInPage} />
              <Route path="/sign-up" exact component={SignUpPage} />
              <Route path="/events" exact component={EventsPage} />
              <Route path="/live-events" exact component={LiveEventsPage} />
              <Route path="/transactions" exact component={TransactionsPage} />
              <Route path="/player-rankings" exact component={PlayerRankingsPage} />
              <Route path="/help" exact component={HelpPage} />
              <Route path="/rewards" exact component={RewardsPage} />
              <Route path="/withdraw" component={WithdrawPage} />
              <Route path="/deposit" component={DepositPage} />
              <Redirect to="/" />
          */}
          </ScrollToTop>
        </div>
      </signInContext.Provider>
    </div>
  );
};

export default App;
