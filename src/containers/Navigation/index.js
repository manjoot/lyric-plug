import React from 'react';
import './index.css';
import { Link } from '@reach/router'

function Navigation() {
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

export default Navigation;