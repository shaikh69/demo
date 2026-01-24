import React, { useState, useEffect } from 'react';

const UseEffectDemo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this only runs on mount

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={styles.container}>
      <p style={styles.text}>Resize the window or move your mouse!</p>
      
      <div style={styles.statItem}>
        <span style={styles.label}>Window Width:</span>
        <span style={styles.value}>{windowWidth}px</span>
      </div>

      <div style={styles.statItem}>
        <span style={styles.label}>Mouse Position:</span>
        <span style={styles.value}>X: {coords.x}, Y: {coords.y}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    background: 'var(--bg-secondary)',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
  },
  text: {
    marginBottom: '1.5rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
  },
  statItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    padding: '1rem',
    background: 'var(--bg-primary)',
    borderRadius: '8px',
  },
  label: {
    color: 'var(--text-secondary)',
  },
  value: {
    color: 'var(--accent-color)',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  }
};

export default UseEffectDemo;
