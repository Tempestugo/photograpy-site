import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.css';

interface Image {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

interface GalleryGridProps {
  images: Image[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map(img => ({ src: img.src, alt: img.alt, title: img.title }));

  const handleClick = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, idx) => (
          <GalleryItem key={image.id} image={image} onClick={() => handleClick(idx)} />
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        onIndexChange={setIndex}
      />
    </>
  );
};

export default GalleryGrid;