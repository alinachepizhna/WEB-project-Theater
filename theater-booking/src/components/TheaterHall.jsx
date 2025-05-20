import React, { useState, useRef } from 'react';
import performances from '../data/performances';
import '../TheaterHall.css';

function TheaterHall({ performanceId }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const performance = performances.find((p) => p.id === Number(performanceId));
  const seatCounterRef = useRef(1); 

  if (!performance) return <div>Виступ не знайдено</div>;
  const { hallConfig } = performance;

  const toggleSeat = (seatId) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatId)
        ? prevSelected.filter((id) => id !== seatId)
        : [...prevSelected, seatId]
    );
  };

  const generateRow = (rowIndex, totalRows, baseSeats, zone, shape = 'rectangle') => {
    const seatsInRow = shape === 'semiCircle' ? baseSeats + rowIndex * 2 : baseSeats;
    const centerOffset = shape === 'semiCircle'
      ? Math.floor((baseSeats + totalRows * 2 - seatsInRow) / 2)
      : 0;

    return Array.from({ length: seatsInRow }, (_, seatIdx) => {
      const colIndex = seatIdx + centerOffset;
      const seatId = `${zone}-${rowIndex + 1}-${colIndex + 1}`;
      const seatNumber = seatCounterRef.current++; 
      const isSelected = selectedSeats.includes(seatId);

      return (
        <div
          key={seatId}
          className={`seat ${zone} ${isSelected ? 'selected' : ''}`}
          onClick={() => toggleSeat(seatId)}
        >
          {seatNumber}
        </div>
      );
    });
  };

  const renderZone = (label, rows, baseSeats, zoneClass, shape = 'rectangle') => (
    <div key={zoneClass} className="zone">
      <div className="zone-label">{label}</div>
      <div className={`hall-grid ${zoneClass}`}>
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div className="row" key={`${zoneClass}-row-${rowIdx}`}>
            {generateRow(rowIdx, rows, baseSeats, zoneClass, shape)}
          </div>
        ))}
      </div>
    </div>
  );

  seatCounterRef.current = 1;

  return (
    <div className="theater-container">
      <div className="stage">СЦЕНА</div>

      {hallConfig?.hasVip && renderZone('VIP Ложа', 2, 8, 'vip', hallConfig.layout)}

      {hallConfig?.hasLodges && renderZone('Ложа', 2, 6, 'lodge', hallConfig.layout)}

      {renderZone('Головний зал', 5, 10, 'main', hallConfig.layout)}

      {Array.from({ length: hallConfig?.balconies || 0 }).map((_, i) =>
        renderZone(`Балкон ${i + 1}`, 2, 10 - i, 'balcony', hallConfig.layout)
      )}

      <p className="selected-label">
        Вибрані місця: <strong>{selectedSeats.join(', ') || 'немає'}</strong>
      </p>
    </div>
  );
}

export default TheaterHall;
