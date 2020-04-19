import React from 'react';
import '../App.css';

// Containers
import Navigation from '../containers/Navigation/index';

// Components
import Charts from '../components/Charts/index';

const SongCharts = () => {
  return (
    <div className="content">
      <Navigation />
      <div className="content-section">
        <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Charts</h1>
        <Charts />
      </div>
    </div>
  );
};

export default SongCharts;
