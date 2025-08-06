import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} Emad Younan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
