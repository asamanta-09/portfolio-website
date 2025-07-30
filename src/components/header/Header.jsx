import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <a href="#home" className={styles.nav__logo}>-A|N|K|A|N-</a>

        <div className={`${styles.nav__menu} ${menu ? styles.show__menu : ''}`}>
          <ul className={`${styles.nav__list} ${styles.grid}`}>
            {[
              { id: 'home', icon: 'uil-estate', label: 'Home' },
              { id: 'about', icon: 'uil-user', label: 'About' },
              { id: 'education', icon: 'uil-scenery', label: 'Education' },
              { id: 'skills', icon: 'uil-file-alt', label: 'Skills' },
              { id: 'mywork', icon: 'uil-briefcase-alt', label: 'My Work' },
              { id: 'contact', icon: 'uil-message', label: 'Contact' },
            ].map(item => (
              <li className={styles.nav__item} key={item.id}>
                <a href={`#${item.id}`} className={styles.nav__link}>
                  <i className={`uil ${item.icon} ${styles.nav__icon}`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>

          <i className={`uil uil-times ${styles.nav__close}`} onClick={toggleMenu}></i>
        </div>

        <div className={styles.nav__toggle} onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
