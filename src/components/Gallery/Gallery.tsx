import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery.module.css';

interface Image {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC<{ images: Image[] }> = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = () => setSelectedIdx(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  const prevImage = () => setSelectedIdx(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.squareGrid}>
        {images.map((img, index) => (
          <motion.div 
            key={img.id} 
            className={styles.squareItem}
            onClick={() => setSelectedIdx(index)}
            whileHover={{ scale: 0.98 }}
          >
            <img src={img.src} alt={img.alt} />
            <div className={styles.whitewashOverlay} />
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Visualização em Destaque */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={styles.closeBtn} onClick={() => setSelectedIdx(null)}>✕</button>
            <button className={styles.navBtnPrev} onClick={prevImage}>←</button>
            
            <motion.img 
              key={selectedIdx}
              src={images[selectedIdx].src} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <button className={styles.navBtnNext} onClick={nextImage}>→</button>
            <p className={styles.counter}>{selectedIdx + 1} / {images.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;