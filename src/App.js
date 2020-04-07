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
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Reccomended for You
        </h1>
        <OurPicks />
      </div>
    </div>
    

  );
}

const SearchSong = () => {
  return (
    <div>
      <Navigation/>
      <Search/>
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
