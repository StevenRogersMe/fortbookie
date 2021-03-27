import React from 'react';
// UI
import Input from 'components/input';
import Close from 'components/close-button';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const BetSlip = ({ title, game, price, removeBetSlip }) => {

  const [state, setState] = React.useState({
    risk: '',
    toWin: ''
  });

  const inputHandler = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="bet-slip">
      <div className="bet-slip__header">
        <Typography component="span" variant="p-sm" className="text-gray-3 bet-slip__header-title">{title}</Typography>
        <Close onClick={removeBetSlip} />
      </div>
      <div className="bet-slip__details">
        <Typography component="span" variant="h6" className="bet-slip__details-name">{game}</Typography>
        <Typography component="span" variant="h6" className="text-accent-2 bet-slip__details-price">{price}</Typography>
      </div>
      <div className="bet-slip__control">
        <div className="bet-slip__control-input">
          <Input type="number" placeholder="Risk" value={state.risk} name="risk" onChange={inputHandler} />
        </div>
        <div className="bet-slip__control-input">
          <Input type="number" placeholder="To Win" value={state.toWin} name="toWin" onChange={inputHandler} />
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
