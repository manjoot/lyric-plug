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
    <div>
      <Navigation /> 
      
      {/* Flexbox Top Section */}

      <div className="content-container">
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Reccomended for You
        </h1>
        <OurPicks />
      </div>
      <Footer />
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

const SongCharts = () => {
  return (
    <div>
      <Navigation /> 
      
      {/* Flexbox Top Section */}

      <div className="content-container">
        <h1 style={{textAlign:"center", marginBottom: '1em'}}>
          Charts
        </h1>
        <Charts />
      </div>
      <Footer />
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
