import React from 'react';
import styles from './Skills.module.css';

const technical_skills = [
  { name: 'Java', icon: '☕' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'C', icon: '💻' },
  { name: 'C++', icon: '💻' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'SQL', icon: '🗃️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Express.js', icon: '🚂' },
];

const technologies = [
  { name: 'VS Code', icon: '📝' },
  { name: 'Eclipse', icon: '🌘' },
  { name: 'Jupyter Notebook', icon: '📓' },
  { name: 'Dev C++', icon: '💾' },
  { name: 'GitHub', icon: '🐱' },
  { name: 'Vercel', icon: '🚀' },
  { name: 'Render', icon: '⚙️' },
  { name: 'Git', icon: '🔧' },
]

const soft_skills = [
  { name: 'Problem Solving', icon: '🧠' },
  { name: 'Team Work', icon: '🤝' },
  { name: 'Time Management', icon: '⏰' },
]

const Skills = () => {
  return (
    <section className={styles.skills__area} id="skills">
      <h2 className={styles.skills__heading}>
        <i className="uil uil-brackets-curly"></i> Skills
      </h2><hr className='hr__underline' /><br />
      <div>
        <p className={styles.skills__subtitle}>Technical Skills</p>
        <div className={styles.skills__container}>
          {technical_skills.map((skill, index) => (
            <div key={index} className={styles.skill__card}>
              <span className={styles.skill__icon}>{skill.icon}</span>
              <h3 className={styles.skill__name}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div><br />
      <div>
        <p className={styles.skills__subtitle}>Technologies</p>
        <div className={styles.skills__container}>
          {technologies.map((skill, index) => (
            <div key={index} className={styles.skill__card}>
              <span className={styles.skill__icon}>{skill.icon}</span>
              <h3 className={styles.skill__name}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div><br /><br />
      <div>
        <p className={styles.skills__subtitle}>Soft Skills</p>
        <div className={styles.skills__container}>
          {soft_skills.map((skill, index) => (
            <div key={index} className={styles.skill__card}>
              <span className={styles.skill__icon}>{skill.icon}</span>
              <h3 className={styles.skill__name}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
