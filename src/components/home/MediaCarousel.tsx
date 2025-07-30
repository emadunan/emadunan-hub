"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./MediaCarousel.module.css";

interface MediaItem {
  title: string;
  image: string;
  href: string;
}

const items: MediaItem[] = [
  {
    title: "Photo Gallery",
    image: "/images/media/gallery.jpg",
    href: "/gallery",
  },
  {
    title: "Favorite Music",
    image: "/images/media/music.jpg",
    href: "/music",
  },
  {
    title: "Quotes",
    image: "/images/media/quotes.jpg",
    href: "/quotes",
  },
];

const MediaCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      router.push(items[index].href);
    } else {
      setActiveIndex(index);
    }
  };

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) return styles.center;
    if (diff === -1 || diff === items.length - 1) return styles.left;
    if (diff === 1 || diff === -(items.length - 1)) return styles.right;
    return styles.hidden;
  };

  return (
    <div className={styles.carousel}>
      {/* <h2 style={{color: "#000"}}>Personal Picks</h2> */}
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`${styles.card} ${getPosition(index)}`}
          onClick={() => handleClick(index)}
        >
          <img src={item.image} alt={item.title} className={styles.image} />
          <div className={styles.title}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MediaCarousel;
