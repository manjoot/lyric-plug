import React from 'react';
import '../App.css';

// Containers
import Navigation from '../containers/Navigation/index';

// Components
import Mood from '../components/Mood/index';
import OurPicks from '../components/OurPicks/index';

// Popmotion Pose
import posed from 'react-pose';

const PosedContentContainer = posed.div({
  enter: { staggerChildren: 50 },
});

const PosedContentSection = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

const Home = () => {
  return (
    <PosedContentContainer>
      <div className="content">
        <div className="top-gap"></div>

        {/* Welcome Message */}

        <div className="content-section welcome">
          <PosedContentSection>
            <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>
              Welcome!
            </h1>
            <p>
              Searching for the lyrics of your favorite song? <br />
              <br />
              Well your search ends now! We have a cloud based library of some
              of the biggest tunes. Have a look around!
            </p>
          </PosedContentSection>
        </div>

        {/* Mood */}

        <div className="content-section mood">
          <PosedContentSection>
            <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Mood</h1>
            <p style={{ textAlign: 'center', marginBottom: '1em' }}>
              How are you feeling today?
            </p>
            <Mood />
          </PosedContentSection>
        </div>

        {/* Reccomended for You */}

        <div className="content-section">
          <PosedContentSection>
            <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>
              Reccomended for You
            </h1>
            <OurPicks />
          </PosedContentSection>
        </div>
      </div>
    </PosedContentContainer>
  );
};

export default Home;
