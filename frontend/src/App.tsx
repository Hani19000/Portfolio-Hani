import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import { ReveilServer } from "./api/api";
import Loading from "./components/Loading";
import Particles from "./hooks/Particles";
import "./styles/particales.css";
import Defilement from "./hooks/Defilement";
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
  // --- DETECTION MOBILE ---
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    ReveilServer();

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            background: "transparent",
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
      )}

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
