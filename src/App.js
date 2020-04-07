import React from 'react';
import Navigation from './containers/Navigation/index'
import Search from './components/Search/index'
import './App.css';
import { Router } from '@reach/router'


const Home = () => {
  return (
    <Navigation />

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
