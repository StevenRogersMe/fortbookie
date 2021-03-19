import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchTransactionsRequest } from 'redux/transactions/actions';
import { selectTransactions } from 'redux/transactions/selectors';
// UI
import Table from 'components/table';
import Typography from 'components/typography';
import Select from 'components/select';
// Table content
import { tableContent } from './table-content';
// Styles
import './styles.sass';

const Transactions = ({ fetchTransactionsRequest, transactions: { loading, data, error } }) => {
  React.useLayoutEffect(() => {
    fetchTransactionsRequest();
  }, [fetchTransactionsRequest]);

  return (
    <div className="transactions">
      <div className="transactions__header">
        <div className="transactions__header-left">
          <Typography component="h3" className="transactions__header-title">Transactions</Typography>
          <span className="transactions__header-balance">Balance: <span>$100.00</span></span>
          <span className="transactions__header-balance">Pending: <span>$10.00</span></span>
          <span className="transactions__header-balance">Free play: <span>$5.00</span></span>
        </div>
        <div className="transactions__header-right">
          <div className="transactions__header-select">
            <Select
              defaultValue={{ label: "24 Hours", value: '24 Hours' }}
              options={[
                { label: "24 Hours", value: '24 Hours' },
                { label: "12 Hours", value: '12 Hours' }
              ]}
            />
          </div>
          <div className="transactions__header-select">
            <Select
              defaultValue={{ label: "All", value: 'All' }}
              options={[
                { value: 'All', label: 'All' },
                { value: 'event 1', label: 'Event 1' },
                { value: 'event 2', label: 'Event 2' },
                { value: 'event 3', label: 'Event 3' },
                { value: 'event 4', label: 'Event 4' },
                { value: 'event 5', label: 'Event 5' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="transactions__table">
        <Table
          content={tableContent()}
          loading={loading}
          data={data}
          error={error}
          retry={fetchTransactionsRequest}
        />
      </div>
    </div>
  );
};

const mapStateToProps = () => createStructuredSelector({
  transactions: selectTransactions
});

const mapDispatchToProps = {
  fetchTransactionsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
