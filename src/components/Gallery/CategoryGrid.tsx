import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioCategories } from '../../data/portfolioData';
import styles from './Gallery.module.css';

const CategoryGrid: React.FC = () => {
  return (
    <div className={styles.categoryGrid}>
      {portfolioCategories.map(category => (
        <Link key={category.id} to={`/portfolio/${category.slug}`} className={styles.categoryItem}>
          <img src={category.coverImage} alt={category.title} className={styles.categoryImage} />
          <div className={styles.categoryOverlay}>
            <h3>{category.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;