import React from 'react';
import classNames from 'classnames';
// UI
import Box from 'components/box';
import Typography from 'components/typography';
import Input from 'components/input';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/coins/litecoin.svg';
import { ReactComponent as BitcoinIcon } from 'assets/images/coins/bitcoin.svg';

const FeeCalculator = ({ className, type }) => {
  const classes = classNames({
    'fee-calculator': true,
    [className]: className
  });

  const title = type === 'deposit' ? 'Deposit' : 'Withdraw';

  return (
    <div className={classes}>
      <Typography className="fee-calculator__title" component="h4">Transaction Fee Calculator</Typography>
      <Box className="fee-calculator__box">
        <div className="fee-calculator__items">
          <div className="fee-calculator__item">
            <Typography component="h5" className="fee-calculator__item-title">{title} Amount</Typography>
            <Input placeholder="$50.00" />
          </div>
          <div className="fee-calculator__item">
            <Typography component="h5" className="fee-calculator__item-title">Estimated Fees</Typography>
            <div className="fee-calculator__coins">
              <div className="fee-calculator__coin">
                <LitecoinIcon className="fee-calculator__coin-icon" />
                <span className="fee-calculator__coin-price">$1.75</span>
              </div>
              <div className="fee-calculator__coin">
                <BitcoinIcon className="fee-calculator__coin-icon" />
                <span className="fee-calculator__coin-price">$0.09</span>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default FeeCalculator;
