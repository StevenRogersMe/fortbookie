import React from 'react';
// UI
import ScreenLayout from 'components/screen-layout';
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const SettingsScreen = () => {
  return (
    <ScreenLayout>
      <ContentBox className="settings-screen">
        <ContentBox.Header>
          <Typography component="h3">Settings</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default SettingsScreen;
