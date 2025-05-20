import React, { useState } from 'react';

function BookingFormPopup({ selectedSeats, onConfirm, onCancel }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове";
    if (!formData.phone.trim()) newErrors.phone = "Телефон обов'язковий";
    if (!formData.email.trim()) newErrors.email = "Email обов'язковий";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'Невірний формат email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!validate()) return;
    onConfirm(formData);
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    marginTop: '6px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: '600',
    marginTop: '12px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginTop: '-8px',
    marginBottom: '8px',
  };

  const buttonPrimary = {
    padding: '10px 16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  };

  const buttonPrimaryHover = e => (e.target.style.backgroundColor = '#0056b3');
  const buttonPrimaryOut = e => (e.target.style.backgroundColor = '#007BFF');

  const buttonSecondary = {
    padding: '10px 16px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    marginLeft: '12px',
    transition: 'background-color 0.3s ease',
  };

  const buttonSecondaryHover = e => (e.target.style.backgroundColor = '#5a6268');
  const buttonSecondaryOut = e => (e.target.style.backgroundColor = '#6c757d');

  return (
    <div
      style={{
        padding: 30,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        width: '100%',
        maxWidth: 380,
      }}
    >
      <h3 style={{ marginBottom: 20, color: '#333' }}>
        Бронювання місць: {selectedSeats.join(', ')}
      </h3>

      <label style={labelStyle}>
        Ім'я:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Введіть ваше ім'я"
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}
      </label>

      <label style={labelStyle}>
        Телефон:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Введіть ваш телефон"
        />
        {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
      </label>

      <label style={labelStyle}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          placeholder="example@mail.com"
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}
      </label>

      <div style={{ marginTop: 20 }}>
        <button
          style={buttonPrimary}
          onClick={handleSubmit}
          onMouseOver={buttonPrimaryHover}
          onMouseOut={buttonPrimaryOut}
        >
          Підтвердити бронювання
        </button>
        <button
          style={buttonSecondary}
          onClick={onCancel}
          onMouseOver={buttonSecondaryHover}
          onMouseOut={buttonSecondaryOut}
        >
          Скасувати
        </button>
      </div>
    </div>
  );
}

export default BookingFormPopup;
