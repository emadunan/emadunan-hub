"use client"

import Masonry from 'react-masonry-css';
import styles from './MediaGallery.module.css';
import { photos } from "@/data/photo.data";
import { quotes } from "@/data/quote.data";
import { music } from "@/data/music.data";
import PhotoCard from './PhotoCard';
import QuoteCard from './QuoteCard';
import MusicCard from './MusicCard';

const MediaGallery: React.FC = () => {
  const combined = [
    ...photos.map((item) => ({ ...item, type: "photo" })),
    ...quotes.map((item) => ({ ...item, type: "quote" })),
    ...music.map((item) => ({ ...item, type: "music" })),
  ];

  const sorted = combined.sort((a, b) => a.order - b.order);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {sorted.map((item, index) => {
        switch (item.type) {
          case "photo":
            return <PhotoCard key={index} item={item} />;
          case "quote":
            return <QuoteCard key={index} item={item} />;
          case "music":
            return <MusicCard key={index} item={item} />;
          default:
            return null;
        }
      })}
    </Masonry>
  );
};

export default MediaGallery;
