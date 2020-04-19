import React from 'react';
import '../App.css';

// Components
import Charts from '../components/Charts/index';

// Popmotion Pose
import posed from 'react-pose';

const PosedContentContainer = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
});

const PosedContentSection = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
});

const SongCharts = () => {
  return (
    <PosedContentContainer>
      <div className="content">
        <div className="content-section">
          <PosedContentSection>
            <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Charts</h1>
            <Charts />
          </PosedContentSection>
        </div>
      </div>
    </PosedContentContainer>
  );
};

export default SongCharts;
