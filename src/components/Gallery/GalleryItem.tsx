import React from 'react';
import styles from './Gallery.module.css';

interface Image {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

interface GalleryItemProps {
  image: Image;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <img src={image.src} alt={image.alt} className={styles.image} />
      {image.title && <div className={styles.overlay}>{image.title}</div>}
    </div>
  );
};

export default GalleryItem;