import React from 'react';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/coins/litecoin.svg';

const WithdrawDetails = () => {
  return (
    <ContentBox className="withdraw-details">
      <ContentBox.Header>
        <Typography component="h3">Withdraw</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="withdraw-details__content">
          <LitecoinIcon className="withdraw-details__icon" />
          <Typography component="p" className="text-medium withdr-details__title">
            Available to withdraw: <Typography component="span" className="text-bold">$100.00</Typography>
          </Typography>
          <div className="withdraw-details__box">
            <div className="withdraw-details__box-group">
              <Typography component="h5" className="withdraw-details__box-title">Withdraw Amount:</Typography>
              <Input className="withdraw-details__box-input" placeholder="$75.00" />
              <Typography component="p" className="p-sm withdraw-details__box-fee">
                Transaction Fee: <Typography component="span" className="text-bold">$0.15</Typography>
              </Typography>
            </div>
            <div className="withdraw-details__box-group">
              <Typography component="h5" className="withdraw-details__box-title">LTC Destination Address:</Typography>
              <Input className="withdraw-details__box-input" placeholder="3DmdyMxDew8BJPpDGW3hFUzv3jh75sN1jW" />
            </div>
          </div>
          <Button variant="primary" size="xl">Withdraw Funds</Button>
        </div>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default WithdrawDetails;
