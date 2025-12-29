import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail'; // Certifique-se que o nome do arquivo está correto
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'; // Importante para manter seus estilos globais

function App() {
  return (
    <Router>
      <Header />
      {/* Remover o padding-top fixo do <main> no App.css 
          é o que permite o Hero encostar no topo (Phil Penman style).
      */}
      <main>
        <Routes>
          {/* Página Inicial com Hero e Parallax */}
          <Route path="/" element={<Home />} />
          
          {/* Listagem de Categorias (Wedding, Retratos, etc) */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* Galeria Interna de cada categoria (Grid Quadrado) */}
          <Route path="/portfolio/:category" element={<PortfolioDetail />} />
          
          {/* Outras Páginas */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;