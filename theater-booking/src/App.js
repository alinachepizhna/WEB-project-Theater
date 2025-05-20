import React from 'react';
import performances from './data/performances';
import PerformanceList from './components/PerformanceList';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Репертуар театру</h1>
      <PerformanceList performances={performances} />
    </div>
  );
}

export default App;
