'use client';

import { useState, useEffect } from 'react';
import styles from './TemaClaroBotao.module.css';

export default function TemaClaroBotao() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      className={styles.toggle} 
      onClick={toggleTheme}
      aria-label="Alternar tema"
      type="button"
    >
      {!mounted ? '...' : (theme === 'light' ? '🌙' : '☀️')}
    </button>
  );
}
