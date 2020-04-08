import React from 'react';
import Navigation from './containers/Navigation/index'
import Footer from './containers/Footer/index'
import Search from './components/Search/index'
import OurPicks from './components/OurPicks/index'
import Charts from './components/Charts/index'
import './App.css';
import { Router } from '@reach/router'


const Home = () => {
  return (
    <div className="content">
      <Navigation /> 

      <div className="top-gap">
      </div>
      
      {/* Welcome Message */}

      <div className="content-section welcome">
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Welcome!
        </h1>
        <p>
          Searching for the lyrics of your favorite song? <br/>
          <br />
          Well your search ends now! We have a cloud based library
          of some of the biggest tunes. Have a look around!
        </p>
      </div>

      {/* Mood */}

      <div className="content-section mood">
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Mood
        </h1>
      </div>

      {/* Reccomended for You */}

      <div className="content-section">
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Reccomended for You
        </h1>
        <OurPicks />
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
    

  );
}

const SearchSong = () => {
  return (
    <div className="content">
      <Navigation/>
      <div className="content-section">
        <Search/>
      </div>

    </div>
  );
}

const SongCharts = () => {
  return (
    <div className="content">
          <Navigation/>
          <div className="content-section">
            <h1 style={{textAlign:"center", marginBottom: '1em'}}>
            Charts
            </h1>
            <Charts/>
          </div>

    </div>
  );
}

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
