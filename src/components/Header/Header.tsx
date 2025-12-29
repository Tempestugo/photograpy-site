import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Apenas a Home começa com Header transparente
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
  };

  return (
    <header className={`${styles.header} ${isScrolled || !isHomePage ? styles.scrolled : styles.transparent}`}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>LOREM IPSUM</Link>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={isActive('/') ? styles.active : ''}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio" className={isActive('/portfolio') ? styles.active : ''}>Portfolio</Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? styles.active : ''}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? styles.active : ''}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;