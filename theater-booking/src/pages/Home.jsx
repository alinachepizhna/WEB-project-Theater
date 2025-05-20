import React from 'react';
import PerformanceList from '../components/PerformanceList';
import performances from '../data/performances';

function Home() {
  return (
    <div className="page">
      <PerformanceList performances={performances} />
    </div>
  );
}

export default Home;
