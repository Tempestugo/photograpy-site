import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioCategories } from '../data/portfolioData';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.portfolioPage}>
      <header className={styles.pageHeader}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Photography
        </motion.h1>
      </header>

      <div className={styles.categoryGrid}>
        {portfolioCategories.map((category, index) => (
          <motion.div 
            key={category.id}
            className={styles.categoryCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            // AQUI É O SEGREDO: Navega para a rota de detalhe usando o SLUG
            onClick={() => navigate(`/portfolio/${category.slug}`)}
          >
            <div className={styles.imageWrapper}>
              {/* Usa a coverImage ou a primeira imagem da categoria como fundo */}
              <img src={category.coverImage || category.images[0].src} alt={category.title} />
              <div className={styles.overlay}>
                <h2>{category.title}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;