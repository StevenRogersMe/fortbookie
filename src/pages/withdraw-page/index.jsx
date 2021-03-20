import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// UI
import PageLayout from 'components/page-layout';
import WithdrawDetails from 'modules/withdraw-details';
import Withdraw from 'modules/withdraw';

const WithdrawPage = () => {
  return (
    <PageLayout>
      <Switch>
        <Route path="/withdraw" exact component={Withdraw} />
        <Route path="/withdraw/details" exact component={WithdrawDetails} />
        <Redirect to="/withdraw" />
      </Switch>
    </PageLayout>
  );
};

export default WithdrawPage;
