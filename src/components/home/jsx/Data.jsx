import React, { useEffect, useState } from 'react';
import styles from '../css/Data.module.css';

const roles = ["Web Developement", "DSA"];

const Data = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className={styles.home__data}>
      <h1 className={styles.home__title}>Ankan Samanta</h1>
      <h3 className={styles.home__subtitle}>
        {text}
        <span className={styles.cursor}></span>
      </h3>
      <p className={styles.home__description}>
        Hi there,<br />
        I am Ankan Samanta, a student of Masters of Computer Application at Jadavpur University. <br />
      </p>
      <a href="#contact" className={styles.home__button}>Say Hello 🙋‍♂️</a>
    </div>
  );
};

export default Data;
