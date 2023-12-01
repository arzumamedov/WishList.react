import React, { useState, useEffect } from 'react';
import './DarkMode/style.css'

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', true);
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', false);
    }
  }, [darkMode]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
    </div>
  );
}

export default DarkMode;
