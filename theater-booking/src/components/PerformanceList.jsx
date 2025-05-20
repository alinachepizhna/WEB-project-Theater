import React, { useState } from 'react';
import PerformanceCard from './PerformanceCard';
import '../styles/PerformanceList.css';

const PerformanceList = ({ performances }) => {
  // Стани для фільтрів
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [minDuration, setMinDuration] = useState('');
  const [maxDuration, setMaxDuration] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Унікальні значення для селектів
  const genres = ['Усі жанри', ...new Set(performances.map(p => p.genre))];
  const times = ['Усі часи', ...new Set(performances.map(p => p.time))];
  const languages = ['Усі мови', ...new Set(performances.map(p => p.language))];

  // Основна фільтрація
  const filtered = performances.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === '' || selectedGenre === 'Усі жанри' || p.genre === selectedGenre) &&
    (selectedTime === '' || selectedTime === 'Усі часи' || p.time === selectedTime) &&
    (selectedLanguage === '' || selectedLanguage === 'Усі мови' || p.language === selectedLanguage) &&
    (minDuration === '' || p.duration >= parseInt(minDuration)) &&
    (maxDuration === '' || p.duration <= parseInt(maxDuration)) &&
    (minPrice === '' || p.price.min >= parseInt(minPrice)) &&
    (maxPrice === '' || p.price.max <= parseInt(maxPrice))

  );

  return (
    <div className="list-container">
      <div className="filters">
        {/* Пошук за назвою */}
        <input
          type="text"
          placeholder="Пошук за назвою..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Вибір жанру */}
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="select-filter"
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre === 'Усі жанри' ? '' : genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Вибір часу */}
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="select-filter"
        >
          {times.map((time, index) => (
            <option key={index} value={time === 'Усі часи' ? '' : time}>
              {time}
            </option>
          ))}
        </select>

        {/* Вибір мови */}
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="select-filter"
        >
          {languages.map((lang, index) => (
            <option key={index} value={lang === 'Усі мови' ? '' : lang}>
              {lang}
            </option>
          ))}
        </select>

        {/* Фільтр по тривалості */}
        <input
          type="number"
          placeholder="Мін. тривалість (хв)"
          value={minDuration}
          onChange={(e) => setMinDuration(e.target.value)}
          className="duration-input"
          min="0"
        />
        <input
          type="number"
          placeholder="Макс. тривалість (хв)"
          value={maxDuration}
          onChange={(e) => setMaxDuration(e.target.value)}
          className="duration-input"
          min="0"
        />

        {/* Фільтр по ціні */}
        <input
          type="number"
          placeholder="Мін. ціна (грн)"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="duration-input"
          min="0"
        />
        <input
          type="number"
          placeholder="Макс. ціна (грн)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="duration-input"
          min="0"
        />
      </div>

      {/* Відображення відфільтрованих спектаклів */}
      <div className="card-grid">
        {filtered.map(performance => (
          <PerformanceCard key={performance.id} performance={performance} />
        ))}
      </div>
    </div>
  );
};

export default PerformanceList;
