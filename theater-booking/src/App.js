import React, { useState } from 'react';
import performances from './data/performances';
import PerformanceList from './components/PerformanceList';
import './index.css';
import './theme.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme}`}>
      {/* Header з кнопкою теми */}
      <div className="header">
        <div className="logo-block">
          <img src="/logo512.png" alt="Театр Арлекін" className="logo" />
          <h1 className="title">Театр Арлекін</h1>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          Змінити тему
        </button>
      </div>

      {/* Контейнер з виставами */}
      <div className="content">
        <PerformanceList performances={performances} />
      </div>
    </div>
  );
}

export default App;
