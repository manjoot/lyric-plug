import React from 'react';
import './App.css';

// Page Imports
import Home from './pages/Home';
import SearchSong from './pages/SearchSong';
import SongCharts from './pages/SongCharts';
import Navigation from './containers/Navigation/index';

// Reach Router Imports
import { Router, Location } from '@reach/router';

// Popmotion Pose Import
import posed, { PoseGroup } from 'react-pose';

// Route Pose Container
const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true,
  },
  exit: { opacity: 0 },
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

function App({ location }) {
  return (
    <div>
      <Navigation />
      <PosedRouter>
        <Home path="/" />
        <SearchSong path="search" />
        <SongCharts path="charts" />
      </PosedRouter>
    </div>
  );
}

export default App;
