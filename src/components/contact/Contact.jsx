import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact__section} id="contact">
      <h2 className={styles.contact__heading}>📬 Contact Me</h2>
      <hr className='hr__underline' /><br />
      <span className={styles.contact__subtitle}>Let’s connect and collaborate!</span>

      <div className={styles.contact__container}>
        <form action="https://api.web3forms.com/submit" method="POST" className={styles.contact__form}>
          <input type="hidden" name="access_key" value={import.meta.env.VITE_ACCESS_KEY} />

          <div className={styles.input__group}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button type="submit" className={styles.contact__button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
