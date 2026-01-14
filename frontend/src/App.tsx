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
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  useEffect(() => {
    ReveilServer();
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          // OPTIMISATIONS MOBILES
          particleCount={isMobile ? 50 : 200} // descend à 50 max sur mobile
          particleBaseSize={isMobile ? 40 : 80} // Points plus petits
          speed={isMobile ? 0.05 : 0.1} // Moins de vitesse = moins de calculs par frame
          moveParticlesOnHover={!isMobile} // Désactiver le calcul du mouvement souris
          disableRotation={isMobile} // TRÈS IMPORTANT : coupe les calculs de rotation matrix
          particleSpread={isMobile ? 6 : 10}
          alphaParticles={true}
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
