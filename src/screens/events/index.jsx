import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withBreakpoints } from 'react-breakpoints'
// Redux
import { fetchEventsRequest } from 'redux/events/actions';
import { selectEvents } from 'redux/events/selectors';
import { selectBetSlips, selectTotalBetSlips } from 'redux/bet-slips/selectors';
import { toggleBetSlip } from 'redux/bet-slips/actions';
import { setSelectedRegion } from 'redux/selected-region/actions';
import { selectSelectedRegion } from 'redux/selected-region/selectors';
// UI
import ScreenLayout from 'components/screen-layout';
import EventsFilters from 'modules/events-filters';
import Bets from 'modules/bets';
import Accordion from 'components/accordion';
import List from 'components/list';
import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';
import FixedButton from 'components/fixed-button';
import CloseButton from 'components/close-button';
// Hooks
import useScrollBlock from 'hooks/use-scroll-block';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as BettingsIcon } from 'assets/images/icons/betting.svg';

const EventsScreen = (props) => {
  const {
    fetchEventsRequest,
    events: { loading, data, error },
    betSlips,
    toggleBetSlip,
    breakpoints,
    currentBreakpoint,
    selectedRegion,
    setSelectedRegion,
    totalBetSlips
  } = props;

  const [showBets, setShowBets] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useLayoutEffect(() => {
    fetchEventsRequest(selectedRegion);
  }, [fetchEventsRequest, selectedRegion]);

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
          <EventsFilters selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
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
                      <List
                        header="Winner"
                        items={games}
                        handleSelect={betId => handleSelectBet(eventIdx, betId)}
                        selected={betSlips}
                        alt={selectedRegion === 'live'}
                        blocked={selectedRegion === 'live' && eventIdx === 1}
                      />
                    </Accordion.Content>
                  </Accordion>
                ))}
              </Fragment>
            }
          </div>
          <div className={`events-screen__bets ${showBets ? 'is-active' : ''}`}>
            <CloseButton className="events-screen__bets-close" onClick={toggleShowBets} dark />
            <Bets />
          </div>
        </div>
      </div>
      {isMobile && <FixedButton icon={BettingsIcon} text={totalBetSlips} onClick={toggleShowBets} />}
    </ScreenLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  events: selectEvents,
  betSlips: selectBetSlips,
  selectedRegion: selectSelectedRegion,
  totalBetSlips: selectTotalBetSlips,
});

const mapDispatchToProps = {
  fetchEventsRequest,
  toggleBetSlip,
  setSelectedRegion
};

export default connect(mapStateToProps, mapDispatchToProps)(withBreakpoints(EventsScreen));
