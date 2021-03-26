import React from 'react';
// UI
import ContentBox from 'components/content-box';
import Box from 'components/box';
import Typography from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as BitcoinIcon } from 'assets/images/coins/bitcoin.svg';
import QrCode from 'assets/images/misc/qr.png';

const DepositDetails = () => {
  return (
    <ContentBox className="deposit-details">
      <ContentBox.Header>
        <Typography component="h3">Deposit</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="deposit-details__content">
          <BitcoinIcon className="deposit-details__icon" />
          <div className="deposit-details__wrap">
            <Box className="deposit-details__item">
              <Typography component="h4" className="deposit-details__item-title">Scan the QR code with your bitcoin wallet</Typography>
              <img src={QrCode} className="deposit-details__item-qr" alt="qr" />
            </Box>
            <div className="deposit-details__or">
              <Typography component="span" variant="h4">OR</Typography>
            </div>
            <Box className="deposit-details__item">
              <Typography component="h4" className="deposit-details__item-title">Send your bitcoin to this address</Typography>
              <Input value="3DmdyMxDew8BJPpDGW3hFUzv3jh75sN1jW" className="deposit-details__item-input" center disabled />
              <Button variant="primary" size="lg">Copy address</Button>
            </Box>
          </div>
        </div>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default DepositDetails;
