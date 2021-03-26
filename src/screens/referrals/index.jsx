import React from 'react';
// UI
import ScreenLayout from 'components/screen-layout';
import ContentBox from 'components/content-box';
import Box from 'components/box';
import Typography from 'components/typography';
import DataPreview from 'components/data-preview';
import Input from 'components/input';
import FormGroup from 'components/form-group';
import Button from 'components/button';
// Styles
import './styles.sass';
// Data preview
import { dataPreviewContent } from './data-preview-content';

const ReferralsScreen = () => {
  return (
    <ScreenLayout>
      <ContentBox className="referrals-screen">
        <ContentBox.Header>
          <Typography component="h3">Referrals</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
          <div className="referrals-screen__control">
            <div className="referrals-screen__control-items">
              <Box className="referrals-screen__box">
                <FormGroup label="Your Referral Link" last>
                  <div className="referrals-screen__box-group">
                    <Input value="https://fortbookie.com/?sref=fortbettor" className="referrals-screen__box-input" disabled />
                    <Button variant="primary" size="lg">Copy</Button>
                  </div>
                </FormGroup>
              </Box>
              <Box className="referrals-screen__box">
                <FormGroup label="Availible Earnings" last>
                  <div className="referrals-screen__box-group">
                    <Input value="$18.24" className="referrals-screen__box-input" disabled />
                    <Button variant="accent" size="lg">Claim</Button>
                  </div>
                </FormGroup>
              </Box>
            </div>
            <div className="referrals-screen__control-text">
              <Typography component="h5">Share the link above or have friends use the promo code <Typography component="span" className="text-accent-1">“fortbettor”</Typography>.<br />
              </Typography>
              <Typography component="p" className="text-regent-gray">
                They will be rewarded with <Typography component="span" className="text-dark-1 text-bold">rewards level 2</Typography> - and you will be rewarded with commission on all wagers, for life.
              </Typography>
            </div>
          </div>
          <div className="referrals-screen__graphics">
            <DataPreview content={dataPreviewContent()} />
          </div>
          <Typography component="h5">Earn Tier 2 (5%) at <Typography component="span" className="text-regular text-regent-gray">- 10 Referrals + $500 wagered</Typography>
          </Typography>
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default ReferralsScreen;
