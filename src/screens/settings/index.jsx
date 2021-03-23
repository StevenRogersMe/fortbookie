import React from 'react';
// UI
import ScreenLayout from 'components/screen-layout';
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import AvatarEditor from 'components/avatar-editor';
import Input from 'components/input';
import Select from 'components/select';
import Button from 'components/button';
// Styles
import './styles.sass';
// Assets
import AvatarImage from 'assets/images/user/user-fullsize.jpg';

const SettingsScreen = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <ScreenLayout>
      <ContentBox className="settings-screen">
        <ContentBox.Header>
          <Typography component="h3">Settings</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
          <form className="settings-screen__body" onSubmit={handleSubmit}>
            <div className="settings-screen__item">
              <Typography component="h4" className="settings-screen__item-title">Profile picture</Typography>
              <div className="settings-screen__item-box">
                <AvatarEditor image={AvatarImage} />
              </div>
            </div>
            <div className="settings-screen__item">
              <Typography component="h4" className="settings-screen__item-title">Username</Typography>
              <div className="settings-screen__item-box">
                <Input value="Fortbettor" onChange={() => { }} />
              </div>
            </div>
            <div className="settings-screen__item">
              <Typography component="h4" className="settings-screen__item-title">Email</Typography>
              <div className="settings-screen__item-box">
                <Input value="Fortbettor@gmail.com" onChange={() => { }} />
              </div>
            </div>
            <div className="settings-screen__item">
              <Typography component="h4" className="settings-screen__item-title">Password</Typography>
              <div className="settings-screen__item-box">
                <Input value="******123" onChange={() => { }} />
              </div>
            </div>
            <div className="settings-screen__item">
              <Typography component="h4" className="settings-screen__item-title">Time Zone</Typography>
              <div className="settings-screen__item-box">
                <Select
                  defaultValue={{ label: 'Pacific standard', value: 'pacific standard' }}
                  options={[
                    { label: 'Pacific standard', value: 'pacific standard' },
                    { label: 'Pacific standard', value: 'pacific standard' },
                  ]} />
              </div>
            </div>
            <Button variant="primary" size="xl" type="submit">Save</Button>
          </form>
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default SettingsScreen;
