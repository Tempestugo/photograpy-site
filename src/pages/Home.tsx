import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const yShapes = useTransform(scrollY, [0, 2000], [0, -150]);
  const yLines = useTransform(scrollY, [0, 3000], [0, -400]); 

  // URLs de fotos públicas (Unsplash) com filtro de P&B
  const imgMais = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop";
  const escada1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
  const escada2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop";
  const escada3 = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop";
  const escada4 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
  const escada5 = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop";
  const escada6 = "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop";

  return (
    <div className={styles.homeContainer}>
      {/* --- FORMAS E LINHAS DE FUNDO --- */}
      <motion.img src="/images/formas/circulos.png" className={styles.shapeCirculos} style={{ y: yShapes }} alt="" />
      <motion.img src="/images/formas/quadrados.png" className={styles.shapeQuadrados} style={{ y: yShapes }} alt="" />
      <motion.img src="/images/formas/linhas.png" className={styles.shapeLines} style={{ y: yLines }} alt="" />

      <Hero />

      {/* Seção Desconstruída */}
      <section className={styles.deconstructedSection}>
        <div className={styles.gridContainer}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.mainTitle}>Mais</h2>
            <div className={styles.buttonWrapper} onClick={() => navigate('/portfolio')}>
              <span className={styles.verText}>VER</span>
              <div className={styles.line}></div>
            </div>
          </motion.div>

          <div className={styles.imageWrapper}>
            <img src={imgMais} alt="Destaque" className={styles.sideImage} />
          </div>
        </div>
      </section>

      {/* Seção Dupla Escada */}
      <section className={styles.doubleStairSection}>
        <div className={styles.stairContainer}>
          <div className={styles.stairColumn}>
            <motion.div className={styles.stairItem} whileHover={{ y: -15, rotate: -2 }}>
              <img src={escada1} alt="1" />
            </motion.div>
            <motion.div className={styles.stairItem} whileHover={{ y: -15, rotate: 1 }} style={{ alignSelf: 'center' }}>
              <img src={escada2} alt="2" />
            </motion.div>
            <motion.div className={styles.stairItem} whileHover={{ y: -15, rotate: -1 }} style={{ alignSelf: 'flex-end' }}>
              <img src={escada3} alt="3" />
            </motion.div>
          </div>

          <div className={styles.centerText}>
            <span>FILOSOFIA</span>
            <h2>Curadoria Visual</h2>
            <p>O equilíbrio entre a técnica e a intuição em cada fragmento de luz.</p>
            <button className={styles.aboutLink} onClick={() => navigate('/about')}>Explore —</button>
          </div>

          <div className={styles.stairColumn}>
            <motion.div className={styles.stairItem} whileHover={{ y: -15, rotate: 2 }} style={{ alignSelf: 'flex-end' }}>
              <img src={escada4} alt="4" />
            </motion.div>
            <motion.div className={styles.stairItem} whileHover={{ y: -15, rotate: -1 }} style={{ alignSelf: 'center' }}>
              <img src={escada5} alt="5" />
            </motion.div>
            <motion.div className={styles.stairItem} whileHover={{ y: -15, rotate: 2 }} style={{ alignSelf: 'flex-start' }}>
              <img src={escada6} alt="6" />
            </motion.div>
          </div>
        </div>
      </section>

      <div style={{ height: '100px' }} />
    </div>
  );
};

export default Home;