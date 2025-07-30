import React from 'react';
import styles from '../css/Scroll.module.css';
import { UilMouseAlt, UilArrowDown } from '@iconscout/react-unicons';

const Scroll = () => {
  return (
    <div className={styles.home__scroll}>
      <a href="#about" className={`${styles.home__scroll_button} ${styles.button__flex}`}>
        <UilMouseAlt className={styles.home__scroll_mouse} />
        <span className={styles.home__scroll_name}>Scroll Down</span>
        <UilArrowDown className={styles.home__scroll_arrow} />
      </a>
    </div>
  );
};

export default Scroll;