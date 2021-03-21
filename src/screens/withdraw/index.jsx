import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
// UI
import ScreenLayout from 'components/screen-layout';
import { RouteWithSubRoutes } from 'utils/router';

const WithdrawScreen = ({ routes }) => {
  return (
    <ScreenLayout>
      <Switch>
        {routes.map((route, idx) => (
          <RouteWithSubRoutes key={idx} {...route} />
        ))}
        <Redirect to="/withdraw" />
      </Switch>
    </ScreenLayout>
  );
};

export default WithdrawScreen;
