import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TheaterHall from '../components/TheaterHall';
import BookingService from '../services/BookingService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import BookingFormPopup from '../services/BookingFormPopup';


function Booking() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [popupWindow, setPopupWindow] = useState(null);

  const openBookingPopup = () => {
    if (popupWindow && !popupWindow.closed) {
      popupWindow.focus();
      return;
    }

    const width = 400;
    const height = 350;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const newWindow = window.open('', '', `width=${width},height=${height},left=${left},top=${top}`);
    newWindow.document.title = 'Форма бронювання';

    // Створюємо контейнер для React
    const container = newWindow.document.createElement('div');
    container.id = 'root';
    newWindow.document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(
      <BookingFormPopup
        selectedSeats={selectedSeats}
onConfirm={(formData) => {
  BookingService.saveBooking(id, selectedSeats, formData);
  toast.success('Бронювання успішне!');
  setSelectedSeats([]);
  newWindow.close();
  setPopupWindow(null);
  window.location.reload();
}}

        onCancel={() => {
          newWindow.close();
          setPopupWindow(null);
        }}
      />
    );

    newWindow.onbeforeunload = () => setPopupWindow(null);
    setPopupWindow(newWindow);
  };

  return (
    <div className="page" style={{ padding: '20px' }}>
      <h2>Бронювання для вистави №{id}</h2>

      <TheaterHall performanceId={id} onSelectSeats={setSelectedSeats} />

      {selectedSeats.length > 0 && !popupWindow && (
  <button
    style={{
      marginTop: 20,
      padding: '12px 24px',
      backgroundColor: '#4CAF50',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#45a049';
      e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = '#4CAF50';
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    }}
    onClick={openBookingPopup}
  >
    Забронювати ({selectedSeats.length})
  </button>
)}

    </div>
  );
}

export default Booking;