import React, { useState, useRef } from 'react';
import performances from '../data/performances';
import '../TheaterHall.css';

function TheaterHall({ performanceId }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const performance = performances.find((p) => p.id === Number(performanceId));
  const seatCounterRef = useRef(1);

  if (!performance) return <div>Виступ не знайдено</div>;

  const {
    hallConfig,
    longDescription,
    image,
    bookingImage,
    title,
  } = performance;

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const generateRow = (
    rowIndex,
    totalRows,
    baseSeats,
    zone,
    shape = 'rectangle',
    zoneIndex = null
  ) => {
    const seatsInRow = shape === 'semiCircle' ? baseSeats + rowIndex * 2 : baseSeats;
    const centerOffset = shape === 'semiCircle'
      ? Math.floor((baseSeats + totalRows * 2 - seatsInRow) / 2)
      : 0;

    return Array.from({ length: seatsInRow }, (_, seatIdx) => {
      const colIndex = seatIdx + centerOffset;
      const zoneSuffix = zoneIndex !== null ? `-${zoneIndex + 1}` : '';
      const seatId = `${zone}${zoneSuffix}-${rowIndex + 1}-${colIndex + 1}`;
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

  const renderZone = (
    label,
    rows,
    baseSeats,
    zoneClass,
    shape = 'rectangle',
    zoneIndex = null
  ) => (
    <div key={`${zoneClass}-${zoneIndex ?? ''}`} className="zone">
      <div className="zone-label">{label}</div>
      <div className={`hall-grid ${zoneClass}`}>
        {Array.from({ length: rows }).map((_, rowIdx) => (
          <div className="row" key={`${zoneClass}-row-${rowIdx}`}>
            {generateRow(rowIdx, rows, baseSeats, zoneClass, shape, zoneIndex)}
          </div>
        ))}
      </div>
    </div>
  );

  // Reset counter for consistent seat numbering on re-renders
  seatCounterRef.current = 1;

  return (
    <div className="theater-container" style={styles.container}>
      {/* Зал */}
      <div style={styles.leftPane}>
        <div className="stage">СЦЕНА</div>

        {hallConfig?.hasVip && renderZone('VIP Ложа', 2, 8, 'vip', hallConfig.layout)}
        {hallConfig?.hasLodges && renderZone('Ложа', 2, 6, 'lodge', hallConfig.layout)}
        {renderZone('Головний зал', 5, 10, 'main', hallConfig.layout)}

        {Array.from({ length: hallConfig?.balconies || 0 }).map((_, i) =>
          renderZone(`Балкон ${i + 1}`, 2, 10 - i, 'balcony', hallConfig.layout, i)
        )}

        <p className="selected-label">
          Вибрані місця: <strong>{selectedSeats.join(', ') || 'немає'}</strong>
        </p>
      </div>

      {/* Інформаційна панель */}
      <div style={styles.rightPane}>
        <h2 style={styles.title}>{title}</h2>
        <img
          src={bookingImage ?? image}
          alt={title}
          style={styles.image}
        />
        <p style={styles.description}>{longDescription}</p>
        {/* Список кольорів і цін */}
{performance.seatColors && (
  <div className="seat-colors-info">
    <h3>Категорії місць:</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {performance.seatColors.map(({ color, label, price }) => (
        <li key={color} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              backgroundColor: color,
              marginRight: 8,
              border: '1px solid #333',
            }}
          />
          <span>{label}: <strong>{price} грн</strong></span>
        </li>
      ))}
    </ul>
  </div>
)}

      </div>
    </div>
  );
  
}

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  leftPane: {
    flex: 3,
  },
  rightPane: {
    flex: 1.5,
    borderLeft: '1px solid #ccc',
    paddingLeft: '16px',
    maxHeight: '90vh',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    maxWidth: '560px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '12px',
    alignSelf: 'center',
    objectFit: 'cover',
  },
  description: {
    whiteSpace: 'pre-line',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#2c3e50',
  },
};

export default TheaterHall;
