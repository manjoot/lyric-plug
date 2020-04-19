import React from 'react';
import '../App.css';

// Containers
import Navigation from '../containers/Navigation/index';

// Components
import Search from '../components/Search/index';

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

const SearchSong = () => {
  return (
    <PosedContentContainer>
      <div className="content">
        <div className="content-section">
          <PosedContentSection>
            <Search />
          </PosedContentSection>
        </div>
      </div>
    </PosedContentContainer>
  );
};

export default SearchSong;
