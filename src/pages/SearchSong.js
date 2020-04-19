import React from 'react';
import '../App.css';

// Containers
import Navigation from '../containers/Navigation/index';

// Components
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
