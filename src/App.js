import React from 'react';
import logo from './assets/images/Lyric Plug-logo-black.png'
import whitelogo from './assets/images/Lyric Plug-logo-white.png'
import Search from './components/Search/index'
import HotSongs from './components/HotSongs/index'
import OurPicks from './components/OurPicks/index'
import { Router, Link } from '@reach/router'
import { Layout, Menu, Row, Col, Divider } from 'antd';
import './App.css';


const { Header, Footer, Content } = Layout;

const Home = () => {
  return (
    <div>
      <header>
        <nav class="main-navigation">
          <ul>
            <li style={{color: 'black', fontSize: '2em'}}>Lyric Plug</li>
            <li><Link to="/" style={{ color: '#565555', textDecoration: 'inherit' }}>home</Link></li>
            <li><Link to="search" style={{ color: '#565555', textDecoration: 'inherit' }}>search</Link></li>
           </ul>
        </nav>
      </header>

    </div>

  );
}

const SongSearch = () => {
  return (
    <div>
      <Home />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Search />

    </div>
  );
}

function App() {
  return (

    <Router>
      <Home path="/" />
      <SongSearch path="search" />
    </Router>
  );
}

export default App;
