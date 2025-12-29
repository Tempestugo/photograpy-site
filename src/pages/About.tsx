import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <motion.div 
      className={styles.aboutPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        
        {/* Seção de Título Editorial */}
        <header className={styles.header}>
          <motion.span 
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A História por trás da lente
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Lorem Ipsum
          </motion.h1>
        </header>

        {/* Layout Desconstruído: Imagem e Texto */}
        <section className={styles.contentGrid}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" 
              alt="Lorem Ipsum" 
              className={styles.profileImg} 
            />
            <div className={styles.imageCaption}>São Paulo, 2024</div>
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.leadText}>
              "A fotografia não é sobre o que eu vejo, mas sobre como eu sinto o momento."
            </p>
            <div className={styles.bodyText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Minha busca é pela luz natural, pela sombra que revela e pelo detalhe que 
                muitas vezes passa despercebido no caos do dia a dia. Especializada em 
                retratos e fotografia autoral.
              </p>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default About;