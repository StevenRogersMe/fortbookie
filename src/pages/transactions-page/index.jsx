import React from 'react';
// UI
import PageLayout from 'components/page-layout';
import Transactions from 'modules/transactions';
// Styles
import './styles.sass';

const TransactionsPage = () => {
  return (
    <PageLayout className="transactions-page">
      <Transactions />
    </PageLayout>
  );
};

export default TransactionsPage;
