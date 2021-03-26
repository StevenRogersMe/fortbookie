import React from 'react';
import classNames from 'classnames';
// UI
import Box from 'components/box';
import Typography from 'components/typography';
import Input from 'components/input';
import FormGroup from 'components/form-group';
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
          <FormGroup label={`${title} Amount`} className="fee-calculator__item">
            <Input placeholder="$50.00" />
          </FormGroup>
          <FormGroup label="Estimated Fees" className="fee-calculator__item">
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
          </FormGroup>
        </div>
      </Box>
    </div>
  );
};

export default FeeCalculator;
