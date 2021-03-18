import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { eventsRequested } from 'redux/events/actions';
import { selectEvents } from 'redux/events/selectors';
import { selectBetSlips } from 'redux/bet-slips/selectors';
import { toggleBetSlip } from 'redux/bet-slips/actions';
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

const EventsPage = ({ eventsRequested, events: { loading, data, error }, betSlips, toggleBetSlip }) => {
  React.useLayoutEffect(() => {
    eventsRequested();
  }, [eventsRequested]);

  const handleSelectBet = (eventIdx, betId) => toggleBetSlip({ eventIdx, betId });

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
                {data.map(({ id, title, date, time, games }, eventIdx) => (
                  <Accordion expanded={eventIdx === 0} className="events-page__list-item" key={id}>
                    <Accordion.Tab title={title} date={date} time={time} />
                    <Accordion.Content>
                      <List header="Winner" items={games} handleSelect={betId => handleSelectBet(eventIdx, betId)} selected={betSlips} />
                    </Accordion.Content>
                  </Accordion>
                ))}
              </Fragment>
            }
          </div>
          <div className="events-page__bets">
            <Bets betSlips={betSlips} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  events: selectEvents,
  betSlips: selectBetSlips
});

const mapDispatchToProps = {
  eventsRequested,
  toggleBetSlip
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
