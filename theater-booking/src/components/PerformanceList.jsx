import React, { useState } from 'react';
import PerformanceCard from './PerformanceCard';
import '../styles/PerformanceList.css';

const PerformanceList = ({ performances }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [minDuration, setMinDuration] = useState('');
  const [maxDuration, setMaxDuration] = useState('');

  const genres = ['Усі жанри', ...new Set(performances.map(p => p.genre))];
  const times = ['Усі часи', ...new Set(performances.map(p => p.time))];
  const languages = ['Усі мови', ...new Set(performances.map(p => p.language))];

  const filtered = performances.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === '' || p.genre === selectedGenre) &&
    (selectedTime === '' || p.time === selectedTime) &&
    (selectedLanguage === '' || p.language === selectedLanguage) &&
    (minDuration === '' || p.duration >= parseInt(minDuration)) &&
    (maxDuration === '' || p.duration <= parseInt(maxDuration))
  );

  return (
    <div className="list-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Пошук за назвою..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

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

        <input
          type="number"
          placeholder="Мін. тривалість (хв)"
          value={minDuration}
          onChange={(e) => setMinDuration(e.target.value)}
          className="duration-input"
        />
        <input
          type="number"
          placeholder="Макс. тривалість (хв)"
          value={maxDuration}
          onChange={(e) => setMaxDuration(e.target.value)}
          className="duration-input"
        />
      </div>

      <div className="card-grid">
        {filtered.map(performance => (
          <PerformanceCard key={performance.id} performance={performance} />
        ))}
      </div>
    </div>
  );
};

export default PerformanceList;
