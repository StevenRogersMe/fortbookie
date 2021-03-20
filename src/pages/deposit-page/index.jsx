import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// UI
import PageLayout from 'components/page-layout';
import Deposit from 'modules/deposit';

const DepositPage = () => {
  return (
    <PageLayout>
      <Switch>
        <Route path="/deposit" exact component={Deposit} />
        <Route path="/deposit/details" exact component={<></>} />
        <Redirect to="/deposit" />
      </Switch>
    </PageLayout>
  );
};

export default DepositPage;
