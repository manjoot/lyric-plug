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
      
      {/* Flexbox Top Section */}

      <div className="content-container">
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
      <div className="content-container">
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
