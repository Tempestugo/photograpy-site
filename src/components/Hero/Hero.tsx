import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  // A imagem que você enviou, com parâmetros para garantir que venha em alta qualidade
  const heroImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <img 
            src={heroImage} 
            alt="Hero Portrait" 
            className={styles.heroImage} 
          />
        </motion.div>
        
        <div className={styles.heroText}>
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            LOREM IPSUM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            DOLOR SIT AMET — CONSECTETUR
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;