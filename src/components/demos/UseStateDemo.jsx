import React, { useState } from 'react';

const UseStateDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.display}>
        Count: <span style={styles.value}>{count}</span>
      </div>
      <div style={styles.controls}>
        <button style={styles.button} onClick={() => setCount(count - 1)}>Decrease</button>
        <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
        <button style={styles.button} onClick={() => setCount(count + 1)}>Increase</button>
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
    textAlign: 'center',
  },
  display: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: 'var(--text-primary)',
  },
  value: {
    color: 'var(--accent-color)',
  },
  controls: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  button: {
    padding: '0.5rem 1rem',
    background: 'var(--glass-bg)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
    fontWeight: '500',
    transition: 'all 0.2s',
  }
};

export default UseStateDemo;
