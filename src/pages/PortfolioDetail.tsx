import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioCategories } from '../data/portfolioData';
import Gallery from '../components/Gallery/Gallery';
import styles from './PortfolioDetail.module.css';

const PortfolioDetail: React.FC = () => {
  const { category } = useParams<{ category: string }>(); // Pega o :category da URL
  const navigate = useNavigate();

  // Busca a categoria. Se "category" for undefined, ele não quebra o código.
  const currentCategory = portfolioCategories.find(
    (item) => item.slug === category
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // Se o usuário acessar /portfolio/algo-que-nao-existe ou se o parametro sumir
  if (!currentCategory) {
    return (
      <div style={{ padding: '200px 20px', textAlign: 'center' }}>
        <h2 style={{ letterSpacing: '0.2em', fontWeight: 300 }}>CATEGORIA NÃO ENCONTRADA</h2>
        <button 
          onClick={() => navigate('/portfolio')}
          style={{ marginTop: '20px', cursor: 'pointer', background: 'none', border: '1px solid black', padding: '10px 20px' }}
        >
          VOLTAR AO PORTFOLIO
        </button>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      <header className={styles.header}>
        <button onClick={() => navigate('/portfolio')} className={styles.backBtn}>← VOLTAR</button>
        <h1>{currentCategory.title}</h1>
        <p>{currentCategory.description}</p>
      </header>
      <Gallery images={currentCategory.images} />
    </div>
  );
};

export default PortfolioDetail;