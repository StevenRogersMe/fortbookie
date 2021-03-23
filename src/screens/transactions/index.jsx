import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchTransactionsRequest } from 'redux/transactions/actions';
import { selectTransactions } from 'redux/transactions/selectors';
// UI
import ScreenLayout from 'components/screen-layout';
import Table from 'components/table';
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import Select from 'components/select';
// Table content
import { tableContent } from './table-content';
// Styles
import './styles.sass';

const TransactionsScreen = ({ fetchTransactionsRequest, transactions: { loading, data, error } }) => {
  React.useLayoutEffect(() => {
    fetchTransactionsRequest();
  }, [fetchTransactionsRequest]);

  return (
    <ScreenLayout>
      <ContentBox className="transactions-screen">
        <ContentBox.Header className="transactions-screen__header">
          <div className="transactions-screen__header-left">
            <Typography component="h3" className="transactions-screen__header-title">Transactions</Typography>
            <Typography component="span" variant="p" className="text-dark-3 transactions-screen__header-balance">
              Balance: <Typography component="span" className="text-dark-1 text-bold">$100.00</Typography>
            </Typography>
            <Typography component="span" variant="p" className="text-dark-3 transactions-screen__header-balance">
              Pending: <Typography component="span" className="text-dark-1 text-bold">$10.00</Typography>
            </Typography>
            <Typography component="span" variant="p" className="text-dark-3 transactions-screen__header-balance">
            Free play: <Typography component="span" className="text-dark-1 text-bold">$5.00</Typography>
            </Typography>
          </div>
          <div className="transactions-screen__header-right">
            <div className="transactions-screen__header-select">
              <Select
                defaultValue={{ label: "24 Hours", value: '24 Hours' }}
                options={[
                  { label: "24 Hours", value: '24 Hours' },
                  { label: "12 Hours", value: '12 Hours' }
                ]}
              />
            </div>
            <div className="transactions-screen__header-select">
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
        </ContentBox.Header>
        <ContentBox.Body>
          <Table
            content={tableContent()}
            loading={loading}
            data={data}
            error={error}
            retry={fetchTransactionsRequest}
          />
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

const mapStateToProps = () => createStructuredSelector({
  transactions: selectTransactions
});

const mapDispatchToProps = {
  fetchTransactionsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
