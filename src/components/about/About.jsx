import React from 'react'
import styles from './About.module.css'
import AboutImage from '../../assets/about_img.jpg'
import Resume from '../../assets/Ankan_Resume.pdf'

const About = () => {
  return (
    <section className={styles.about__area} id="about">
      <h2 className={styles.about__heading}>
        <i className="uil uil-user"></i> About <span>Me</span>
      </h2><hr className='hr__underline' /><br />
      <p className={styles.about__subtitle}>My Introduction</p>
      <div className={styles.about}>
        <div className={styles.about__container}>
          <div className={styles.about__image}>
            <img src={AboutImage} alt="Ankan Samanta" />
          </div>

          <div className={styles.about__content}>

            <h3 className={styles.about__name}>I'm Ankan</h3>
            <p className={styles.about__role}>Computer Science Student</p>

            <p className={styles.about__info}>
              <strong>Email</strong>: <a href="mailto:ankan.samanta8017@gmail.com">ankan.samanta8017@gmail.com</a><br />
              <strong>Place</strong>: Kolkata, West Bengal, India <br /><br />
              <strong>Description</strong>:
              <p>
                Hi, I'm a passionate Full Stack Developer with a focus on the MERN stack and experience building scalable web applications and backend systems. I also have a solid foundation in Java. With a strong grasp of both theory and hands-on development, I’m always eager to learn, collaborate, and contribute to impactful tech projects.
              </p>
            </p>
            <p className={styles.about__info}>

            </p>

            <a href={Resume} download className={styles.about__btn}>
              Resume <i className="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
