import React from "react";
import styles from "./Bio.module.css";
import MainContainer from "../layout/MainContainer";

const Bio: React.FC = () => {
  return (
    <MainContainer>
      <section className={styles.bio}>
        <h2>About Me</h2>

        <p>
          I’m <strong>Emad Younan</strong>, a software engineer from Egypt with over
          8 years of professional experience designing and building reliable,
          maintainable, and scalable software systems. My work spans backend and
          frontend development, system automation, and production-grade application
          architecture.
        </p>

        <p>
          I work extensively with JavaScript and TypeScript, building web platforms
          using React, Next.js, NestJS, and PostgreSQL. Beyond application development,
          I have hands-on experience with Linux system administration, service
          configuration, and Bash scripting for automation and operational efficiency.
        </p>

        <p>
          I hold a degree in Information Systems and transitioned fully into software
          engineering in 2017 after years of focused learning and practical
          experience. I’ve earned multiple credentials from institutions such as
          Harvard and Udacity, and I maintain a strong habit of continuous learning
          across software design, systems, and security fundamentals.
        </p>

        <p>
          My values are grounded in a conservative Christian faith—guided by ethics,
          integrity, and accountability, yet not confined by traditions or rituals.
          These principles influence how I work, collaborate, and approach
          responsibility in both technical and human contexts.
        </p>

        <p>
          I bring a calm, disciplined, and security-aware mindset to my work, with a
          strong focus on clarity, ownership, and long-term maintainability. I enjoy
          solving complex problems, improving systems incrementally, and building
          software that stands up well in real-world environments.
        </p>
      </section>

    </MainContainer>
  );
};

export default Bio;
