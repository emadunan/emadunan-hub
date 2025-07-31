import React from 'react';
import styles from './MediaGallery.module.css';
import { photos } from '@/data/photo.data';
import { quotes } from '@/data/quote.data';
import { music } from '@/data/music.data';
import PhotoCard from './PhotoCard';
import QuoteCard from './QuoteCard';
import MusicCard from './MusicCard';

type MediaItem =
  | { type: 'photo'; data: (typeof photos)[number] }
  | { type: 'quote'; data: (typeof quotes)[number] }
  | { type: 'music'; data: (typeof music)[number] };

const MediaGallery: React.FC = () => {
  // Merge and tag each item with its type
  const combinedItems: MediaItem[] = [
    ...photos.map((p) => ({ type: 'photo', data: p })),
    ...quotes.map((q) => ({ type: 'quote', data: q })),
    ...music.map((m) => ({ type: 'music', data: m })),
  ];

  // Sort by the shared `order` property (descending to show latest on top)
  const sortedItems = combinedItems.sort((a, b) => a.data.order - b.data.order);

  return (
    <div className={styles.galleryContainer}>
      {sortedItems.map((item, index) => {
        switch (item.type) {
          case 'photo':
            return <PhotoCard key={`photo-${index}`} item={item.data} />;
          case 'quote':
            return <QuoteCard key={`quote-${index}`} item={item.data} />;
          case 'music':
            return <MusicCard key={`music-${index}`} item={item.data} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default MediaGallery;
