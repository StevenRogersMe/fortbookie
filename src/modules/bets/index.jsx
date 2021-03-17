import React from 'react';
// UI
import Button from 'components/button';
import BetSlips from 'modules/bet-slips';
import OpenBets from 'modules/open-bets';
// Styles
import './styles.sass';

const betSlips = [
  { id: 1, title: 'Season 5 Trio FNCS Finals: Winner', game: 'LG Slackes, 1P Acornski, G2 Jаhq', price: '+ 400$', risk: '', toWin: '' },
  { id: 2, title: 'Season 5 Trio FNCS Finals: Winner', game: 'NRG СІіх, SEN BUGHA 父, FаZe Bizzle', price: '+ 1000$', risk: '10', toWin: '100' },
];
const openBets = [
  { id: 1, date: "2/21/21", time: "6:21 PM", betAmount: '-$10.00', remainingBalance: '$100.00', placed: 'Single To Win', placedPrice: '$100.00', game: 'NRG СІіх, SEN BUGHA 父, FаZe Bizzle', gamePrice: '$100.00', title: 'Season 5 Trio FNCS Finals: Winner' },
  { id: 2, date: "2/21/21", time: "6:21 PM", betAmount: '-$10.00', remainingBalance: '$100.00', placed: 'Single To Win', placedPrice: '$100.00', game: 'BBG Haz, Scoped on SARMS, ENDLESS TRAGIX', gamePrice: '$100', title: 'Season 5 Trio FNCS Finals: Winner' },
];

const Bets = () => {

  const [selectedBet, setSelectedBet] = React.useState('betSlips');
  const betActiveClass = name => selectedBet === name ? 'is-active' : '';
  const handleBet = bet => bet !== selectedBet && setSelectedBet(bet);

  return (
    <div className="bets">
      <div className="bets__wrap">
        <div className="bets__buttons">
          <button
            className={`bets__button ${betActiveClass('betSlips')}`}
            onClick={() => handleBet('betSlips')}
          >Bet Slips</button>
          <button
            className={`bets__button ${betActiveClass('openBets')}`}
            onClick={() => handleBet('openBets')}
          >Open Bets</button>
        </div>
        <div className="bets__balance">
          <span className="bets__balance-current">Balance: 100$</span>
          <span className="bets__balance-pending">Pending : $10.00</span>
        </div>
        <div className="bets__content">
          {selectedBet === 'betSlips' ?
            <BetSlips slips={betSlips} />
            :
            <OpenBets bets={openBets} />
          }
        </div>
      </div>
      <div className="bets__footer">
        {selectedBet === 'betSlips' ?
          <Button variant="primary" size="xl" fluid>Place Bet</Button>
          :
          <Button variant="primary" size="xl" fluid>See all transactions</Button>
        }
      </div>
    </div>
  );
};

export default Bets;
