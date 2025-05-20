import React from 'react';
import '../styles/PerformanceCard.css';

const PerformanceCard = ({ performance }) => {
  return (
    <div className="performance-card">
      <img src={performance.image} alt={performance.title} className="performance-image" />
      <div className="performance-info">
        <h3>{performance.title}</h3>
        <p><strong>Жанр:</strong> {performance.genre}</p>
        <p><strong>Час:</strong> {performance.time}</p>
        <p><strong>Мова:</strong> {performance.language}</p>
        <p><strong>Тривалість:</strong> {performance.duration} хв</p>
        <p><strong>Дати:</strong> {performance.dates.join(', ')}</p>
        <p className="description">{performance.description}</p>
      </div>
    </div>
  );
};

export default PerformanceCard;
