import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo-celebre.svg';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Imóveis a venda', path: '/imoveis' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Celebre" className={styles.logo} />
        </Link>
      </div>

      <button 
        className={styles.mobileMenuBtn} 
        aria-label="Menu"
      >
        <Menu size={20} />
      </button>

      <ul className={styles.navLinks}>
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <li key={item.path} className={styles.navItem}>
              <Link 
                to={item.path} 
                className={`${styles.link} ${active ? styles.linkActive : ''}`}
              >
                {item.label}
              </Link>
              {active && <div className={styles.activeMark} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
