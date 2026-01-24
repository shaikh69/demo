import React, { useState, useContext, createContext } from 'react';

// 1. Create Context
const ThemeContext = createContext(null);

const UseContextDemo = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ ...styles.container, background: theme === 'dark' ? '#334155' : '#f1f5f9' }}>
        <p style={{ color: theme === 'dark' ? '#fff' : '#000', marginBottom: '1rem' }}>
          Current Theme Scope: <strong>{theme}</strong>
        </p>
        <div style={styles.grid}>
          <ThemedCard />
          <ThemedCard />
        </div>
        <ThemeToggler />
      </div>
    </ThemeContext.Provider>
  );
};

// Component using the context
const ThemedCard = () => {
  const { theme } = useContext(ThemeContext);
  
  const cardStyles = {
    padding: '1rem',
    borderRadius: '8px',
    background: theme === 'dark' ? '#1e293b' : '#fff',
    border: '1px solid',
    borderColor: theme === 'dark' ? '#475569' : '#cbd5e1',
    color: theme === 'dark' ? '#f8fafc' : '#334155',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyles}>
      <h4>Card Component</h4>
      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>
        I automatically adjust to the {theme} theme!
      </p>
    </div>
  );
};

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button 
      style={{
        marginTop: '1.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        background: 'var(--accent-color)',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

const styles = {
  container: {
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    textAlign: 'center',
    transition: 'background 0.3s ease',
  },
  grid: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  }
};

export default UseContextDemo;
