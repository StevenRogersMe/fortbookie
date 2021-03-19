import React from 'react';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as DepositIcon } from 'assets/images/help/deposit.svg';
import { ReactComponent as RewardIcon } from 'assets/images/help/reward.svg';
import { ReactComponent as SecureIcon } from 'assets/images/help/secure.svg';
import { ReactComponent as SupportIcon } from 'assets/images/help/support.svg';
import { ReactComponent as VideoIcon } from 'assets/images/help/video.svg';
import { ReactComponent as WithdrawIcon } from 'assets/images/help/withdraw.svg';

const topics = [
  { title: 'How to place wagers', Icon: VideoIcon },
  { title: 'FAQ', Icon: SupportIcon },
  { title: 'Withdraws', Icon: WithdrawIcon },
  { title: 'Deposits', Icon: DepositIcon },
  { title: 'Account and Security', Icon: SecureIcon },
  { title: 'Rewards', Icon: RewardIcon },
];

const Help = () => {
  return (
    <ContentBox className="help">
      <ContentBox.Header>
        <Typography component="h3">Help</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="help__email">
          <Typography component="h3" className="help__email-title">E-mail</Typography>
          <a href="mailto:fortbookiesupport@gmail.com" className="help__email-link">fortbookiesupport@gmail.com</a>
        </div>
        <div className="help__topics">
          <Typography component="h3" className="help__topics-title">Browse By Topics</Typography>
          <div className="help__topics-wrap">
            {topics.map(({ title, Icon }, idx) => (
              <div key={idx} className="help__topic">
                <Icon className="help__topic-icon" />
                <span className="help__topic-title">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default Help;
