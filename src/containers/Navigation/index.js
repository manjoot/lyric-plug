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
              <li>
                <Link 
                className="menu-item"
                to="/" 
                >
                home
                </Link>
              </li>

              <li>
                <Link 
                className="menu-item"
                to="search" 
                >
                    search
                </Link>
              </li>
             </ul>
          </nav>
        </header>
  
      </div>
  

    );
}

export default Navigation;