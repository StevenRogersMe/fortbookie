import React from 'react';
// UI
import ScreenLayout from 'components/screen-layout';
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

const HelpScreen = () => {
  return (
    <ScreenLayout>
      <ContentBox className="help-screen">
        <ContentBox.Header>
          <Typography component="h3">Help</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
          <div className="help-screen__email">
            <Typography component="h3" className="help-screen__email-title">E-mail</Typography>
            <a href="mailto:fortbookiesupport@gmail.com" className="help-screen__email-link">fortbookiesupport@gmail.com</a>
          </div>
          <div className="help-screen__topics">
            <Typography component="h3" className="help-screen__topics-title">Browse By Topics</Typography>
            <div className="help-screen__topics-wrap">
              {topics.map(({ title, Icon }, idx) => (
                <div key={idx} className="help-screen__topic">
                  <Icon className="help-screen__topic-icon" />
                  <span className="help-screen__topic-title">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default HelpScreen;