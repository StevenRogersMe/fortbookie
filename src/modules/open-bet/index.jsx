import React from 'react';
// Styles
import './styles.sass';

const OpenBet = ({ date, time, betAmount, remainingBalance, placed, placedPrice, game, gamePrice, title }) => {
  return (
    <div className="open-bet">
      <div className="open-bet__row">
        <span className="open-bet__meta-item">
          <span className="open-bet__meta-item-accent">{date}</span><br />
          {time}
        </span>
        <span className="open-bet__meta-item">
          <span className="open-bet__meta-item-accent">{betAmount}</span><br />
          {remainingBalance}
        </span>
      </div>
      <div className="open-bet__row">
        <span className="open-bet__placed-title">Placed - {placed}</span>
        <span className="open-bet__placed-price">{placedPrice}</span>
      </div>
      <div className="open-bet__row">
        <span className="open-bet__details-title">{game}</span>
        <span className="open-bet__details-price">{gamePrice}</span>
      </div>
      <div className="open-bet__row">
        <span className="open-bet__footer-title">{title}</span>
      </div>
    </div>
  );
};

export default OpenBet;
