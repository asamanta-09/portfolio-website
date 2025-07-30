import React from 'react';
import styles from './Project.module.css';

const projectData = [
  {
    title: "LearnToKnow",
    description: "A website that help the students to search teacher for both online and offline and also help the teachers to upload their courses.",
    tech: ["React", "Node Js", "Mongo DB", "HTML", "CSS", "Express Js"],
    image: "/images/ltk.png",
    github: "https://github.com/yourname/portfolio",
    demo: "https://learntoknow.vercel.app",
  },
  {
    title: "Marks Dsitribution System",
    description: "A system that helps to manage the marks by interpreting excels",
    tech: ["Java", "Java Swing", "Design Patterns", "MySQL", "JDDC"],
    image: "/images/mds.png",
    github: "https://github.com/yourname/todo-app",
    demo: "",
  },
  {
    title: "Movie Management System",
    description: "A system that perform simple CRUD operations on databases for monaging movies.",
    tech: ["HTML", "Javascript", "CSS", "SQL"],
    image: "images/movie.png",
    github: "https://github.com/yourname/weather-app",
    demo: "",
  },
];

const Project = () => {
  return (
    <section className={styles.project__section} id="mywork">
      <h2 className={styles.project__heading}>💻 Projects</h2><hr className='hr__underline' /><br />
      <span className={styles.project__subtitle}>Things I've Built</span>
      <br />
      <div className={styles.project__grid}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.project__card}>
            <img src={project.image} alt={project.title} className={styles.project__image} />
            <div className={styles.project__content}>
              <h3 className={styles.project__title}>{project.title}</h3>
              <p className={styles.project__description}>{project.description}</p>
              <ul className={styles.project__tech}>
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul><br />
              <div className={styles.project__links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
