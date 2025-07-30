import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <h2 className={styles.footer__name}>Ankan Samanta</h2>

          <div className={styles.footer__contact}>
            <p><i className="uil uil-envelope"></i> ankan.samanta8017@gmail.com</p>
            <p><i className="uil uil-phone"></i> +91 xxxxxxxxxx</p>
            <p><i className="uil uil-map-marker"></i> Kolkata, West Bengal, India</p>
          </div><br /><hr />

        <div className={styles.footer__socials}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <i className="uil uil-github"></i>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <i className="uil uil-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <i className="uil uil-facebook"></i>
          </a>
        </div>

        <p className={styles.footer__copyright}>
          &copy; 2025 Ankan Samanta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
