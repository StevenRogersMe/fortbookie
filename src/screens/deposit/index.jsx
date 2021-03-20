import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// UI
import ScreenLayout from 'components/screen-layout';
import DepositPayment from 'screens/deposit/deposit-payment';
import DepositDetails from 'screens/deposit/deposit-details';

const DepositScreen = () => {
  return (
    <ScreenLayout>
      <Switch>
        <Route path="/deposit" exact component={DepositPayment} />
        <Route path="/deposit/details" exact component={DepositDetails} />
        <Redirect to="/deposit" />
      </Switch>
    </ScreenLayout>
  );
};

export default DepositScreen;
