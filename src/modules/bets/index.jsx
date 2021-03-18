import React from 'react';
import { connect } from 'react-redux';
// Redux
import { removeAllBetSlips } from 'redux/bet-slips/actions';
// UI
import Button from 'components/button';
import BetSlips from 'modules/bet-slips';
import OpenBets from 'modules/open-bets';
// Styles
import './styles.sass';

const openBets = [
  { id: 1, date: "2/21/21", time: "6:21 PM", betAmount: '-$10.00', remainingBalance: '$100.00', placed: 'Single To Win', placedPrice: '$100.00', game: 'NRG СІіх, SEN BUGHA 父, FаZe Bizzle', gamePrice: '$100.00', title: 'Season 5 Trio FNCS Finals: Winner' },
  { id: 2, date: "2/21/21", time: "6:21 PM", betAmount: '-$10.00', remainingBalance: '$100.00', placed: 'Single To Win', placedPrice: '$100.00', game: 'BBG Haz, Scoped on SARMS, ENDLESS TRAGIX', gamePrice: '$100', title: 'Season 5 Trio FNCS Finals: Winner' },
];

const Bets = ({ betSlips, removeAllBetSlips }) => {

  const [selectedTab, setSelectedTab] = React.useState('betSlips');
  const tabActiveClass = name => selectedTab === name ? 'is-active' : '';
  const handleTab = bet => bet !== selectedTab && setSelectedTab(bet);

  return (
    <div className="bets">
      <div className="bets__wrap">
        <div className="bets__buttons">
          <button
            className={`bets__button ${tabActiveClass('betSlips')}`}
            onClick={() => handleTab('betSlips')}
          >Bet Slips</button>
          <button
            className={`bets__button ${tabActiveClass('openBets')}`}
            onClick={() => handleTab('openBets')}
          >Open Bets</button>
        </div>
        <div className="bets__balance">
          <span className="bets__balance-current">Balance: 100$</span>
          <span className="bets__balance-pending">Pending : $10.00</span>
        </div>
        <div className="bets__content">
          {selectedTab === 'betSlips' ?
            <BetSlips slips={betSlips} />
            :
            <OpenBets bets={openBets} />
          }
        </div>
      </div>
      <div className="bets__footer">
        {selectedTab === 'betSlips' ?
          <Button variant="primary" size="xl" fluid onClick={removeAllBetSlips}>Place Bets</Button>
          :
          <Button variant="primary" size="xl" fluid>See all transactions</Button>
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeAllBetSlips
};

export default connect(null, mapDispatchToProps)(Bets);
