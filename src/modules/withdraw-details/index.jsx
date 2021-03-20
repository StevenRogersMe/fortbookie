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

const WithdrawDetails = () => {
  return (
    <ContentBox className="withdraw-details">
      <ContentBox.Header>
        <Typography component="h3">Withdraw</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="withdraw-details__content">
          <LitecoinIcon className="withd-detailsraw__icon" />
          <Typography component="p" className="text-medium withdr-detailsaw__title">
            Available to withdraw: <Typography component="span" className="text-bold">$100.00</Typography>
          </Typography>
          <div className="with-detailsdraw__box">
            <div className="with-detailsdraw__box-group">
              <Typography component="h5" className="with-detailsdraw__box-title">Withdraw Amount:</Typography>
              <Input className="with-detailsdraw__box-input" placeholder="$75.00" />
              <Typography component="p" className="p-sm with-detailsdraw__box-fee">
                Transaction Fee: <Typography component="span" className="text-bold">$0.15</Typography>
              </Typography>
            </div>
            <div className="with-detailsdraw__box-group">
              <Typography component="h5" className="with-detailsdraw__box-title">LTC Destination Address:</Typography>
              <Input className="with-detailsdraw__box-input" placeholder="3DmdyMxDew8BJPpDGW3hFUzv3jh75sN1jW" />
            </div>
          </div>
          <Button variant="primary" size="xl">Withdraw Funds</Button>
        </div>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default WithdrawDetails;
