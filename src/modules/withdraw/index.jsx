import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import CoinPreview from 'components/coin-preview';
import FeeCalculator from 'components/fee-calculator';
import Button from 'components/button';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/coins/litecoin-full.svg';
import { ReactComponent as BitcoinIcon } from 'assets/images/coins/bitcoin-full.svg';

const Withdraw = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [selectedCoin, setSelectedCoin] = React.useState(null);

  return (
    <ContentBox className="withdraw">
      <ContentBox.Header>
        <Typography component="h3">Withdraw</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="withdraw__method">
          <div className="withdraw__method-item">
            <CoinPreview icon={BitcoinIcon} isActive={selectedCoin === 'bitcoin'} onClick={() => { setSelectedCoin('bitcoin') }} />
          </div>
          <div className="withdraw__method-item">
            <CoinPreview icon={LitecoinIcon} isActive={selectedCoin === 'litecoin'} onClick={() => { setSelectedCoin('litecoin') }} />
          </div>
        </div>
        <div className="withdraw__calc">
          <FeeCalculator />
        </div>
        <Button variant="primary" size="xl" onClick={() => history.push(`${match.url}/details`)}>Process</Button>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default Withdraw;
