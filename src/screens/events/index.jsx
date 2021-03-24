import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withBreakpoints } from 'react-breakpoints'
// Redux
import { fetchEventsRequest } from 'redux/events/actions';
import { selectEvents } from 'redux/events/selectors';
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
import FixedButton from 'components/fixed-button';
// Hooks
import useScrollBlock from 'hooks/use-scroll-block';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as BettingsIcon } from 'assets/images/icons/betting.svg';

const EventsScreen = ({ fetchEventsRequest, events: { loading, data, error }, betSlips, toggleBetSlip, breakpoints, currentBreakpoint }) => {
  const [showBets, setShowBets] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useLayoutEffect(() => {
    fetchEventsRequest();
  }, [fetchEventsRequest]);

  React.useEffect(() => {
    breakpoints[currentBreakpoint] < breakpoints.lg ? setIsMobile(true) : setIsMobile(false);
  }, [breakpoints, currentBreakpoint]);

  const handleSelectBet = (eventIdx, betId) => toggleBetSlip({ eventIdx, betId });
  const toggleShowBets = () => {
    setShowBets(showBets => {
      if (showBets) {
        allowScroll();
        return false;
      } else {
        blockScroll();
        return true;
      }
    });
  };

  return (
    <ScreenLayout>
      <div className="events-screen">
        <div className="events-screen__filters">
          <EventsFilters />
        </div>
        <div className="events-screen__preview">
          <div className="events-screen__list">
            {error && <ErrorIndicator retry={fetchEventsRequest} />}
            {(!error && loading) && <Spinner boxed />}
            {(!error && !loading && data) &&
              <Fragment>
                {data.map(({ id, title, date, time, games }, eventIdx) => (
                  <Accordion expanded={eventIdx === 0} className="events-screen__list-item" key={id}>
                    <Accordion.Tab title={title} date={date} time={time} />
                    <Accordion.Content>
                      <List header="Winner" items={games} handleSelect={betId => handleSelectBet(eventIdx, betId)} selected={betSlips} />
                    </Accordion.Content>
                  </Accordion>
                ))}
              </Fragment>
            }
          </div>
          <div className={`events-screen__bets ${showBets ? 'is-active' : ''}`}>
            <Bets />
          </div>
        </div>
      </div>
      {isMobile && <FixedButton icon={BettingsIcon} onClick={() => toggleShowBets()} />}
    </ScreenLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  events: selectEvents,
  betSlips: selectBetSlips
});

const mapDispatchToProps = {
  fetchEventsRequest,
  toggleBetSlip
};

export default connect(mapStateToProps, mapDispatchToProps)(withBreakpoints(EventsScreen));
