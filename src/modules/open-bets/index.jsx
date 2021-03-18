import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchOpenBetsRequest } from 'redux/open-bets/actions';
import { selectOpenBets } from 'redux/open-bets/selectors';
// UI
import OpenBet from 'modules/open-bet';
import Typography from 'components/typography';
import Scrollbar from 'components/scrollbar';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';
// Styles
import './styles.sass';

const OpenBets = ({ fetchOpenBetsRequest, openBets: { loading, data, error } }) => {
  React.useLayoutEffect(() => {
    fetchOpenBetsRequest()
  }, [fetchOpenBetsRequest]);

  return (
    <div className="open-bets">
      <div className="open-bets__container">
        {error && <ErrorIndicator retry={fetchOpenBetsRequest} />}
        {loading && <Spinner boxed />}

        {data && data.length === 0 &&
          <div className="open-bets__empty">
            <Typography component="h3" className="open-bets__empty-title">Open Bets is Empty</Typography>
            <p className="open-bets__empty-message">
              Learn how to place bets <a href="http://example.com" className="open-bets__empty-link">here</a>
            </p>
          </div>
        }

        {data && data.length > 0 &&
          <div className="open-bets__content">
            <div className="open-bets__header">
              <p className="open-bets__header-item">
                <span className="open-bets__header-item-accent">Date</span><br />Time</p>
              <p className="open-bets__header-item">
                <span className="open-bets__header-item-accent">Bet Amount</span><br />Remaining Balance
              </p>
            </div>
            <div className="open-bets__items">
              <Scrollbar className="open-bets__items-scroll">
                {data.map(({ id, date, time, betAmount, remainingBalance, placed, placedPrice, game, gamePrice, title }) => (
                  <div key={id} className="open-bets__item">
                    <OpenBet
                      date={date}
                      time={time}
                      betAmount={betAmount}
                      remainingBalance={remainingBalance}
                      placed={placed}
                      placedPrice={placedPrice}
                      game={game}
                      gamePrice={gamePrice}
                      title={title}
                    />
                  </div>
                ))}
              </Scrollbar>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  openBets: selectOpenBets
});

const mapDispatchToProps = {
  fetchOpenBetsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenBets);
