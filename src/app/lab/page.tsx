'use client';

import Link from 'next/link';
import styles from './page.module.css';
import MainContainer from '@/components/layout/MainContainer';

const LabPage = () => {
  return (
    <MainContainer>
      <div className={styles.container}>
        <h1 className={styles.title}>🛠️ Emadunan Lab</h1>
        <p className={styles.description}>
          Explore a sandbox of ideas — tools designed for prototyping, testing, and learning.
        </p>

        <ul className={styles.list}>
          <li>
            <Link href="/lab/tts" className={styles.link}>
              🎙️ Text-to-Speech Converter
            </Link>
          </li>
        </ul>
      </div>
    </MainContainer>
  );
};

export default LabPage;
