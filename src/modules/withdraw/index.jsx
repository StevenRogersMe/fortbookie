import React from 'react';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/icons/litecoin-icon.svg';

const Withdraw = () => {
  return (
    <ContentBox className="withdraw">
      <ContentBox.Header>
        <Typography component="h3">Withdraw</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="withdraw__content">
          <LitecoinIcon className="withdraw__icon" />
          <Typography component="p" className="text-medium withdraw__title">
            Available to withdraw: <Typography component="span" className="text-bold">$100.00</Typography>
          </Typography>
          <div className="withdraw__box">
            <div className="withdraw__box-group">
              <Typography component="h5" className="withdraw__box-title">Withdraw Amount:</Typography>
              <Input className="withdraw__box-input" placeholder="$75.00" />
              <Typography component="p" className="p-sm withdraw__box-fee">
                Transaction Fee: <Typography component="span" className="text-bold">$0.15</Typography>
              </Typography>
            </div>
            <div className="withdraw__box-group">
              <Typography component="h5" className="withdraw__box-title">LTC Destination Address:</Typography>
              <Input className="withdraw__box-input" placeholder="3DmdyMxDew8BJPpDGW3hFUzv3jh75sN1jW" />
            </div>
          </div>
          <Button variant="primary" size="xl">Withdraw Funds</Button>
        </div>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default Withdraw;
