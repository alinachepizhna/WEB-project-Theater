import React, { useState } from 'react';
import '../TheaterHall.css';

function TheaterHall({ performanceId }) {
  const rows = 5;
  const cols = 10;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div>
      <div className="hall-grid">
        {Array.from({ length: rows }).map((_, row) => (
          <div className="row" key={row}>
            {Array.from({ length: cols }).map((_, col) => {
              const seatId = `${row}-${col}`;
              const isSelected = selectedSeats.includes(seatId);

              return (
                <div
                  key={seatId}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleSeat(row, col)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <p>Вибрані місця: {selectedSeats.join(', ') || 'немає'}</p>
    </div>
  );
}

export default TheaterHall;
