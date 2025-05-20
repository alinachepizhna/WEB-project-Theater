import React from 'react';
import { useParams } from 'react-router-dom';
import TheaterHall from '../components/TheaterHall';

function Booking() {
  const { id } = useParams();

  return (
    <div className="page">
      <h2>Бронювання для вистави №{id}</h2>
      <TheaterHall performanceId={id} />
    </div>
  );
}

export default Booking;
