'use client';

import Link from 'next/link';
import styles from './page.module.css';
import MainContainer from '@/components/layout/MainContainer';

const ToolsPage = () => {
  return (
    <MainContainer>
      <div className={styles.container}>
        <h1 className={styles.title}>🛠️ Emadunan Tools & Services</h1>
        <p className={styles.description}>
          Explore free practical tools built with care to support your work, study, and creativity.
        </p>

        <ul className={styles.list}>
          <li>
            <Link href="/tools/tts" className={styles.link}>
              🎙️ Text-to-Speech Converter
            </Link>
          </li>
        </ul>
      </div>
    </MainContainer>
  );
};

export default ToolsPage;
