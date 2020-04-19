import React from 'react';
import Navigation from '../containers/Navigation/index';
import '../App.css';

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
