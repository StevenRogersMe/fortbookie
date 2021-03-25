import React from 'react';
import { useHistory } from 'react-router-dom';
// UI
import Container from 'components/container';
import Typography from 'components/typography';
import Button from 'components/button';
// Styles
import './styles.sass';

const HomeScreen = () => {
  const history = useHistory();
  return (
    <div className="home-screen">
      <Container>
        <div className="home-screen__row">
          <div className="home-screen__info">
            <Typography component="h1" className="home-screen__title">Join today and have your favorite players carry you to victory</Typography>
            <Typography component="p" className="p-xl home-screen__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Typography>
            <Button variant="accent" size="xl" onClick={() => history.push('/sign-up')}>Join now</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeScreen;
