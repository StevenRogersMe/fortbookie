import React from 'react';
// UI
import Layout from 'modules/layout';
import Transactions from 'modules/transactions';
// Styles
import './styles.sass';

const TransactionsPage = () => {
  return (
    <div className="transactions-page">
      <Layout>
        <Transactions />
      </Layout>
    </div>
  );
};

export default TransactionsPage;
