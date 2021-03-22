import React from 'react';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const OpenBet = ({ date, time, betAmount, remainingBalance, placed, placedPrice, game, gamePrice, title }) => {
  return (
    <div className="open-bet">
      <div className="open-bet__row">
        <Typography component="span" variant="p-sm" className="text-dark-3">
          <Typography component="span" className="text-bold">{date}</Typography><br />
          {time}
        </Typography>
        <Typography component="span" variant="p-sm" className="text-dark-3 text-right">
          <Typography component="span" className="text-bold">{betAmount}</Typography><br />
          {remainingBalance}
        </Typography>
      </div>
      <div className="open-bet__row">
        <Typography component="span" variant="h5">Placed - {placed}</Typography>
        <Typography component="span" variant="h5" className="text-accent-2 text-right">{placedPrice}</Typography>
      </div>
      <div className="open-bet__row">
        <Typography component="span" variant="h5">{game}</Typography>
        <Typography component="span" variant="h5" className="text-right">{gamePrice}</Typography>
      </div>
      <div className="open-bet__row">
        <Typography component="span" variant="p-sm" className="text-dark-3">{title}</Typography>
      </div>
    </div>
  );
};

export default OpenBet;
