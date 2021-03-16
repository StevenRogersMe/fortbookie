import React from 'react';
// UI
import Container from 'components/container';
import Typography from 'components/typography';
import Button from 'components/button';
// Styles
import './styles.sass';

const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <div className="home-page__info">
          <Typography component="h1" className="home-page__title">Join today and have your favorite players carry you to victory</Typography>
          <Typography component="p" className="p-xl home-page__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Typography>
          <Button variant="accent" size="xl">Join now</Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
