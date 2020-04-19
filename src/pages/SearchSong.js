import React from 'react';
import Navigation from '../containers/Navigation/index';
import '../App.css';

import Search from '../components/Search/index';

const SearchSong = () => {
  return (
    <div className="content">
      <Navigation />
      <div className="content-section">
        <Search />
      </div>
    </div>
  );
};

export default SearchSong;
