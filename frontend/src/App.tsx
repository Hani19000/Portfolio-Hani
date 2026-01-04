import React, { lazy, Suspense } from 'react';
import './index.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

// Lazy loading
const About = lazy(() => import('./components/about/About'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Services = lazy(() => import('./components/services-section/Services'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

// Loader
const SectionLoader = () => (
  <div style={{ 
    minHeight: '50vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;