import React from 'react';
// UI
import OpenBet from 'modules/open-bet';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const OpenBets = ({ bets }) => {
  return (
    <div className="open-bets">
      <div className="open-bets__container">
        {bets.length === 0 ?
          <div className="open-bets__empty">
            <Typography component="h3" className="open-bets__empty-title">Open Bets is Empty</Typography>
            <p className="open-bets__empty-message">
              Learn how to place bets <a href="http://example.com" className="open-bets__empty-link">here</a>
            </p>
          </div>
          :
          <div className="open-bets__content">
            <div className="open-bets__header">
              <p className="open-bets__header-item">
                <span className="open-bets__header-item-accent">Date</span><br />
                Time
              </p>
              <p className="open-bets__header-item">
                <span className="open-bets__header-item-accent">Bet Amount</span><br />
                Remaining Balance
              </p>
            </div>
            <div className="open-bets__items">
              {bets.map(({ id, date, time, betAmount, remainingBalance, placed, placedPrice, game, gamePrice, title }) => (
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
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default OpenBets;
