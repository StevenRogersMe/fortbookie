import React from 'react';
// Modules
import Header from 'modules/header';
// Pages
import HomePage from 'pages/home-page';
// Styles
import './app.sass';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
