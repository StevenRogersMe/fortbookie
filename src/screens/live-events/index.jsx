import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchLiveEventsRequest } from 'redux/live-events/actions';
import { selectLiveEvents } from 'redux/live-events/selectors';
import { selectBetSlips } from 'redux/bet-slips/selectors';
import { toggleBetSlip } from 'redux/bet-slips/actions';
// UI
import ScreenLayout from 'components/screen-layout';
import EventsFilters from 'modules/events-filters';
import Bets from 'modules/bets';
import Accordion from 'components/accordion';
import List from 'components/list';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';
// Styles
import './styles.sass';

const LiveEventsScreen = ({ fetchLiveEventsRequest, events: { loading, data, error }, betSlips, toggleBetSlip }) => {
  React.useLayoutEffect(() => {
    fetchLiveEventsRequest();
  }, [fetchLiveEventsRequest]);

  const handleSelectBet = (eventIdx, betId) => toggleBetSlip({ eventIdx, betId });

  return (
    <ScreenLayout className="live-events-screen">
      <div className="live-events-screen__filters">
        <EventsFilters />
      </div>
      <div className="live-events-screen__preview">
        <div className="live-events-screen__list">
          {error && <ErrorIndicator retry={fetchLiveEventsRequest} />}
          {(!error && loading) && <Spinner boxed />}
          {(!error && !loading && data) &&
            <Fragment>
              {data.map(({ id, title, date, time, games }, eventIdx) => (
                <Accordion expanded={eventIdx === 0} className="live-events-screen__list-item" key={id}>
                  <Accordion.Tab title={title} date={date} time={time} />
                  <Accordion.Content>
                    <List header="Winner" items={games} handleSelect={(betId => handleSelectBet(eventIdx, betId))} selected={betSlips} alt />
                  </Accordion.Content>
                </Accordion>
              ))}
            </Fragment>
          }
        </div>
        <div className="live-events-screen__bets">
          <Bets />
        </div>
      </div>
    </ScreenLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  events: selectLiveEvents,
  betSlips: selectBetSlips
});

const mapDispatchToProps = {
  fetchLiveEventsRequest,
  toggleBetSlip
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveEventsScreen);
