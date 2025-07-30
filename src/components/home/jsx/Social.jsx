import React from 'react';
import styles from '../css/Social.module.css';

const Social = () => {
  return (
    <div className={styles.home__social}>
      <a href="https://www.instagram.com/bond_007_here/" className={styles.home__social_icon} target='_blank' rel="noreferrer">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://www.facebook.com/ankan.samanta.1800/" className={styles.home__social_icon} target='_blank' rel="noreferrer">
        <i className="uil uil-facebook"></i>
      </a>
      <a href="https://linkedin.com/in/ankansamanta09" className={styles.home__social_icon} target='_blank' rel="noreferrer">
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="#" className={styles.home__social_icon} target='_blank' rel="noreferrer">
        <i className="uil uil-twitter"></i>
      </a>
      <a href="https://github.com/asamanta-09" className={styles.home__social_icon} target='_blank' rel="noreferrer">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;