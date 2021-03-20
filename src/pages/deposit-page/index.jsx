import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// UI
import PageLayout from 'components/page-layout';

const DepositPage = () => {
  return (
    <PageLayout>
      <Switch>
        <Route path="/deposit" exact component={<></>} />
        <Route path="/deposit/details" exact component={<></>} />
        <Redirect to="/deposit" />
      </Switch>
    </PageLayout>
  );
};

export default DepositPage;
