'use client';

import { useState } from 'react';
import styles from './tts.module.css';

// Free voices for Google TTS (subset)
const voiceOptions = [
  { name: 'ar-XA-Chirp3-HD-Enceladus', label: 'Arabic (Male)' },
  { name: 'ar-XA-Wavenet-B', label: 'Arabic (Male)' },
  { name: 'ar-XA-Wavenet-C', label: 'Arabic (Female)' },
  { name: 'en-US-Studio-O', label: 'English (Female)' },
  { name: 'en-US-Studio-M', label: 'English (Male)' },
  { name: 'en-US-Wavenet-F', label: 'English (Female)' },
  { name: 'en-US-Wavenet-D', label: 'English (Male)' },
];

const TTSPage = () => {
  const [text, setText] = useState('');
  const [mp3Url, setMp3Url] = useState('');
  const [loading, setLoading] = useState(false);
  const [voice, setVoice] = useState(voiceOptions[0].name);
  const [lang, setLang] = useState('ar-XA');

  async function handleSubmit() {
    if (!text.trim()) return;

    setLoading(true);
    setMp3Url('');

    try {
      const res = await fetch('/api/tools/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice, lang }),
      });

      const data = await res.json();
      setMp3Url(data.url);
    } catch (err) {
      console.error('TTS Error:', err);
    } finally {
      setLoading(false);
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const textContent = await file.text();
    setText(textContent);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Text-to-Speech Tool</h1>

      <div className={styles.controls}>
        <label>
          Language:
          <select value={lang} onChange={(e) => setLang(e.target.value)} className={styles.select}>
            <option value="ar-XA">Arabic</option>
            <option value="en-US">English</option>
          </select>
        </label>

        <label>
          Voice:
          <select value={voice} onChange={(e) => setVoice(e.target.value)} className={styles.select}>
            {voiceOptions.map((v) => (
              <option key={v.name} value={v.name}>{v.label}</option>
            ))}
          </select>
        </label>

        <label className={styles.fileLabel}>
          Upload .txt file:
          <input type="file" accept=".txt" onChange={handleFileUpload} className={styles.fileInput} />
        </label>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
        placeholder="Paste text or upload a .txt file..."
      />

      <button
        onClick={handleSubmit}
        className={styles.button}
        disabled={loading || !text.trim()}
      >
        {loading ? 'Processing...' : 'Convert to Speech'}
      </button>

      {mp3Url && (
        <div className={styles.playerSection}>
          <audio controls src={mp3Url} className={styles.audio} />
          <a href={mp3Url} download className={styles.downloadLink}>
            Download MP3
          </a>
        </div>
      )}
    </div>
  );
};

export default TTSPage;
