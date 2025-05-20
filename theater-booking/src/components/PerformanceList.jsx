import React, { useState } from 'react';
import PerformanceCard from './PerformanceCard';
import '../styles/PerformanceList.css';

const PerformanceList = ({ performances }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = performances.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-container">
      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="card-grid">
        {filtered.map(performance => (
          <PerformanceCard key={performance.id} performance={performance} />
        ))}
      </div>
    </div>
  );
};

export default PerformanceList;
