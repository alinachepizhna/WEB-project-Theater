import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PerformanceCard.css';

const PerformanceCard = ({ performance }) => {
  return (
    <div className="performance-card">
      <img src={performance.image} alt={`Постер вистави "${performance.title}"`} className="performance-image" />
      <div className="performance-info">
        <h3>{performance.title}</h3>
        <p><strong>Жанр:</strong> {performance.genre}</p>
        <p><strong>Час:</strong> {performance.time}</p>
        <p><strong>Мова:</strong> {performance.language}</p>
        <p><strong>Тривалість:</strong> {performance.duration} хв</p>
        <p><strong>Дати:</strong> {performance.dates.join(', ')}</p>
        <p>Ціна: від {performance.price.min} до {performance.price.max} грн</p>
        <p className="description">{performance.shortDescription}</p>
        <Link to={`/booking/${performance.id}`}>
          <button className="buy-button" aria-label={`Придбати квитки на ${performance.title}`}>
            Придбати квитки
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PerformanceCard;
