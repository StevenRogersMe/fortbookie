import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
// UI
import ScreenLayout from 'components/screen-layout';
// Utils
import { RouteWithSubRoutes } from 'utils/router';

const DepositScreen = ({ routes }) => {
  return (
    <ScreenLayout>
      <Switch>
        {routes.map((route, idx) => (
          <RouteWithSubRoutes key={idx} {...route} />
        ))}
        <Redirect to="/deposit" />
      </Switch>
    </ScreenLayout>
  );
};

export default DepositScreen;
