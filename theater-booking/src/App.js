import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import './index.css';
import './theme.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        {/* Header */}
        <header className="header">
          <div className="logo-block">
            <img src="/logo512.png" alt="Театр Арлекін" className="logo" />
            <h1 className="title">Театр Арлекін</h1>
          </div>

          <div className="header-controls">
            <Link to="/" className="nav-link">Головна</Link>
            <button className="theme-toggle" onClick={toggleTheme}>
              Змінити тему
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:id" element={<Booking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
