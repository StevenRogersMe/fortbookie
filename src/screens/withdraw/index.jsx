import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// UI
import ScreenLayout from 'components/screen-layout';
import WithdrawPayment from 'screens/withdraw/withdraw-payment';
import WithdrawDetails from 'screens/withdraw/withdraw-details';

const WithdrawScreen = () => {
  return (
    <ScreenLayout>
      <Switch>
        <Route path="/withdraw" exact component={WithdrawPayment} />
        <Route path="/withdraw/details" exact component={WithdrawDetails} />
        <Redirect to="/withdraw" />
      </Switch>
    </ScreenLayout>
  );
};

export default WithdrawScreen;
