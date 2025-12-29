import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brandInfo}>
          <h2 className={styles.footerLogo}> Lorem Ipsum</h2>
          <p className={styles.tagline}>Visual Storyteller & Photographer</p>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.column}>
            <span>CONTATO</span>
            <a href="mailto:contato@LoremIpsum.com">contato@LoremIpsum.com</a>
            <p>São Paulo, Brasil</p>
          </div>

          <div className={styles.column}>
            <span>REDES</span>
            <div className={styles.socialLinks}>
              <a href="#" target="_blank">Instagram</a>
              <a href="#" target="_blank">Behance</a>
              <a href="#" target="_blank">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} — Todos os direitos reservados</p>
        <p className={styles.madeBy}>Designed for Photography</p>
      </div>
    </footer>
  );
};

export default Footer;