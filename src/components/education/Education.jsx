import React from "react";
import styles from "./Education.module.css";

const educationData = [
  {
    level: "Master of Computer Applications (MCA)",
    institute: "Jadavpur University",
    year: "2024-Present",
    status: "Pursuing",
    marks: "9.19 CGPA",
    image: "/images/ju.jpg",
  },
  {
    level: "Bachelor of Science (Computer Science)",
    institute: "Vivekananda College, University of Calcutta",
    year: "2023",
    status: "Completed",
    marks: "9.116 CGPA",
    image: "/images/vc.webp",
  },
  {
    level: "12th Standard (HS - PCMB)",
    institute: "Vidyanagar Multipurpose School",
    year: "2020",
    status: "Completed",
    marks: "93.0%",
    image: "/images/vmps.jpg",
  },
  {
    level: "10th Standard (Madhyamik)",
    institute: "Vidyanagar Multipurpose School",
    year: "2018",
    status: "Completed",
    marks: "81.71%",
    image: "/images/vmps.jpg",
  },
];

const Education = () => {
  return (
    <section className={styles.education__section} id="education">
      <h2 className={styles.education__heading}>📘 Education</h2><hr className='hr__underline' /><br />
      <span className={styles.education__subtitle}>My Academic Journey</span>

      <div className={styles.education__timeline}>
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`${styles.education__card} ${index % 2 === 0 ? styles.left : styles.right
              }`}
          >
            <div className={styles.image__container}>
              <img src={item.image} alt={item.institute} />
            </div>
            <div className={styles.text__container}>
              <h3>{item.level}</h3>
              <p className={styles.institute}>{item.institute}</p>
              <p className={styles.duration}>
                {item.year} |{" "}
                <span
                  className={
                    item.status === "Completed"
                      ? styles.completed
                      : styles.pursuing
                  }
                >
                  {item.status}
                </span>
              </p>
              <p className={styles.score}>Score: {item.marks}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
