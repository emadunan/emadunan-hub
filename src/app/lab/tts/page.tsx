'use client';

import { useState, useEffect } from 'react';
import styles from './tts.module.css';
import MainContainer from '@/components/layout/MainContainer';
import NavigationGuard from '@/providers/navigation-guard';
import Spinner from '@/components/ui/Spinner';

const MAX_CHARS = 2000;

const TTSPage = () => {
  const [text, setText] = useState('');
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const splitText = (input: string): string[] => {
    const sentences = input.match(/[^.!?]+[.!?]*/g) || [input];
    const chunks: string[] = [];
    let currentChunk = '';

    for (const sentence of sentences) {
      if ((currentChunk + sentence).length <= MAX_CHARS) {
        currentChunk += sentence;
      } else {
        if (currentChunk) chunks.push(currentChunk.trim());
        currentChunk = sentence;
      }
    }
    if (currentChunk) chunks.push(currentChunk.trim());

    return chunks;
  };

  const handleSubmit = async () => {
    if (!text.trim()) return;

    const parts = splitText(text);
    setAudioUrls([]);
    setLoading(true);

    const urls: string[] = [];

    for (const part of parts) {
      try {
        const params = new URLSearchParams({ text: part });
        const res = await fetch(`http://140.82.33.249:5002/speak?${params}`);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        urls.push(url);
      } catch (err) {
        console.error('Error processing chunk:', err);
      }
    }

    setAudioUrls(urls);
    setLoading(false);
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (loading) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [loading]);

  return (
    <MainContainer>
      <NavigationGuard shouldBlock={loading}>
        <div className={styles.container}>
          <h1 className={styles.title}>Text-to-Speech Tool</h1>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textarea}
            placeholder="Paste text..."
          />

          <button
            onClick={handleSubmit}
            className={styles.button}
            disabled={loading || !text.trim()}
          >
            {loading ? (
              <span style={{display: 'flex', justifyContent: "center", alignItems: "center", gap: "1rem"}}>
                <Spinner inline />
                <span>Processing...</span>
              </span>
            ) : (
              <span>Convert to Speech</span>
            )}
          </button>

          {loading && <p style={{marginTop: "1rem", color: "var(--danger)"}}>Please do not leave or refresh the page, or you will loss all text to speech conversion progress!</p>}

          {audioUrls.length > 0 && (
            <div className={styles.playerSection}>
              {audioUrls.map((url, idx) => (
                <div key={idx} className={styles.audioChunk}>
                  <audio controls src={url} className={styles.audio} />
                  <a href={url} download={`chunk-${idx + 1}.wav`} className={styles.downloadLink}>
                    Download Chunk {idx + 1}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </NavigationGuard>
    </MainContainer>
  );
};

export default TTSPage;
