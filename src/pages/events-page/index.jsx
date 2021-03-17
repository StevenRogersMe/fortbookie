import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { eventsRequested } from 'redux/events/actions';
import { selectEvents } from 'redux/events/selectors';
// UI
import Layout from 'modules/layout';
import EventsFilters from 'modules/events-filters';
import Bets from 'modules/bets';
import Accordion from 'components/accordion';
import List from 'components/list';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';
// Styles
import './styles.sass';

const EventsPage = ({ eventsRequested, events: { loading, data, error } }) => {
  const [selectedBets, setSelectedBets] = React.useState([]);

  React.useLayoutEffect(() => {
    eventsRequested();
  }, [eventsRequested]);

  const handleSelectBet = (id) => {
    setSelectedBets(selected => {
      let newArray;
      if (selectedBets.indexOf(id) === -1) {
        newArray = [...selected, id];
      } else {
        newArray = selected.filter(item => item !== id);
      }
      return newArray;
    })
  };

  return (
    <div className="events-page">
      <Layout>
        <div className="events-page__filters">
          <EventsFilters />
        </div>
        <div className="events-page__preview">
          <div className="events-page__list">
            {error && <ErrorIndicator retry={eventsRequested} />}
            {(!error && loading) && <Spinner boxed />}
            {(!error && !loading && data) &&
              <Fragment>
                {data.map(({ id, title, date, time, games }, idx) => (
                  <Accordion expanded={idx === 0} className="events-page__list-item" key={id}>
                    <Accordion.Tab title={title} date={date} time={time} />
                    <Accordion.Content>
                      <List header="Winner" items={games} handleSelect={handleSelectBet} selected={selectedBets} />
                    </Accordion.Content>
                  </Accordion>
                ))}
              </Fragment>
            }
          </div>
          <div className="events-page__bets">
            <Bets />
          </div>
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  events: selectEvents
});
const mapDispatchToProps = {
  eventsRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
