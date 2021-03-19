import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchTransactionsRequest } from 'redux/transactions/actions';
import { selectTransactions } from 'redux/transactions/selectors';
// UI
import Table from 'components/table';
// Table content
import { tableContent } from './table-content';
// Styles
import './styles.sass';

const Transactions = ({ fetchTransactionsRequest, transactions: { loading, data, error } }) => {
  React.useLayoutEffect(() => {
    fetchTransactionsRequest();
  }, [fetchTransactionsRequest]);

  return (
    <Table
      content={tableContent()}
      loading={loading}
      data={data}
      error={error}
      retry={fetchTransactionsRequest}
    />
  );
};

const mapStateToProps = () => createStructuredSelector({
  transactions: selectTransactions
});

const mapDispatchToProps = {
  fetchTransactionsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
