import { lazy, Suspense, useEffect } from "react";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import { ReveilServer } from "./api/api";
import Loading from "./components/Loading";
import Particles from "./hooks/Particles";
import "./styles/particales.css";

// Composants chargés à la demande
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));

const SectionLoader = () => (
  <div className="section-loader">
    <div className="spinner"></div>
  </div>
);

function App() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  useEffect(() => {
    ReveilServer();
  }, []);

  return (
    <>
<div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: -1, 
        pointerEvents: 'none',
        background: 'transparent' 
      }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          // VERSION MOBILE : on réduit le compte et la taille
          particleCount={isMobile ? 80 : 250} 
          particleBaseSize={isMobile ? 40 : 100}
          particleSpread={isMobile ? 6 : 10}
          speed={isMobile ? 0.05 : 0.1} // Plus lent sur mobile pour le CPU
          moveParticlesOnHover={!isMobile} // On désactive le hover sur mobile (pas de souris)
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Loading>
          <Header />
        </Loading>

        <Suspense fallback={<SectionLoader />}>
          <Loading>
            <About />
          </Loading>

          <Loading>
            <Experience />
          </Loading>

          <Loading>
            <Services />
          </Loading>

          <Loading>
            <Portfolio />
          </Loading>

          <Loading>
            <Contact />
          </Loading>

          <Loading>
            <Footer />
          </Loading>
        </Suspense>
      </main>
    </>
  );
}

export default App;
