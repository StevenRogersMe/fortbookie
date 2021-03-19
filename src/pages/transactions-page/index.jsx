import React from 'react';
// UI
import PageLayout from 'components/page-layout';
import Transactions from 'modules/transactions';

const TransactionsPage = () => {
  return (
    <PageLayout>
      <Transactions />
    </PageLayout>
  );
};

export default TransactionsPage;
