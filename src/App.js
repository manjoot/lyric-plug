import React from 'react';
import Navigation from './containers/Navigation/index'
import Search from './components/Search/index'
import OurPicks from './components/OurPicks/index'
import './App.css';
import { Router } from '@reach/router'


const Home = () => {
  return (
    <div>
      <Navigation /> 
      <div className="site-layout-content">
        <OurPicks />
      </div>
    </div>
    

  );
}

const SearchSong = () => {
  return (
    <div>
      <Navigation/>
      <div className="site-layout-content">
        <Search/>
      </div>

    </div>
  );
}

function App() {
  return (

    <Router>
      <Home path="/" />
      <SearchSong path="search" />
    </Router>
  );
}

export default App;
