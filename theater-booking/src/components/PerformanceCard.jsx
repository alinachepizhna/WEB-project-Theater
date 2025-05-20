import React from 'react';
import '../styles/PerformanceCard.css';

const PerformanceCard = ({ performance }) => (
  <div className="card">
    <img src={performance.image} alt={performance.title} />
    <div className="card-content">
      <h2>{performance.title}</h2>
      <p><strong>Жанр:</strong> {performance.genre}</p>
      <p><strong>Час:</strong> {performance.time}</p>
      <p>{performance.description}</p>
    </div>
  </div>
);

export default PerformanceCard;
