import React from 'react';
import './App.css';

// Page Imports

import Home from './pages/Home';
import SearchSong from './pages/SearchSong';
import SongCharts from './pages/SongCharts';

// Reach Router Imports
import { Router } from '@reach/router';

function App() {
  return (
    <Router>
      <Home path="/" />
      <SearchSong path="search" />
      <SongCharts path="charts" />
    </Router>
  );
}

export default App;
