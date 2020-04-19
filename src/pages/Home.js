import React from 'react';
import Navigation from '../containers/Navigation/index';
import '../App.css';

import Mood from '../components/Mood/index';
import OurPicks from '../components/OurPicks/index';

const Home = () => {
  return (
    <div className="content">
      <Navigation />

      <div className="top-gap"></div>

      {/* Welcome Message */}

      <div className="content-section welcome">
        <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Welcome!</h1>
        <p>
          Searching for the lyrics of your favorite song? <br />
          <br />
          Well your search ends now! We have a cloud based library of some of
          the biggest tunes. Have a look around!
        </p>
      </div>

      {/* Mood */}

      <div className="content-section mood">
        <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Mood</h1>
        <p style={{ textAlign: 'center', marginBottom: '1em' }}>
          How are you feeling today?
        </p>
        <Mood />
      </div>

      {/* Reccomended for You */}

      <div className="content-section">
        <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>
          Reccomended for You
        </h1>
        <OurPicks />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
