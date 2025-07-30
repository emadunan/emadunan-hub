import React from 'react';
import styles from './PhotoGallery.module.css';

const items = [
  {
    desc: "A serene photo capturing the essence of calm and nature’s balance.",
    date: "March 2024",
    takenBy: "Ahmad Khider",
    image: "/images/gallery/cairo-museum-1.jpg",
  },
  {
    desc: "A second photo from Cairo Museum, exploring texture and light.",
    date: "March 2024",
    takenBy: "Ahmad Khider",
    image: "/images/gallery/cairo-museum-2.jpg",
  },
  {
    desc: "This portrait showcases personality and precision in every detail.",
    date: "July 2023",
    takenBy: "Me",
    image: "/images/gallery/hangout-remon-1.jpg",
  },
  {
    desc: "Still life photography of fresh peaches bringing texture and warmth.",
    date: "April 2024",
    takenBy: "Kamel",
    image: "/images/gallery/profile1.jpg",
  },
];

const PhotoGallery: React.FC = () => {
  return (
    <div className={styles.galleryContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.galleryItem}>
          <img src={item.image} alt="Gallery" className={styles.image} />
          <div className={styles.overlay}>
            <p className={styles.description}>{item.desc}</p>
            <p className={styles.meta}>
              {item.date} {item.takenBy && `– ${item.takenBy}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
