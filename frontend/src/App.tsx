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
  useEffect(() => {
    ReveilServer();
  }, []);

  return (
    <>
      {/* 1. Particules fixes en arrière-plan pour tout le site */}
      <Particles count={50} />

      {/* 2. Navigation fixe (généralement hors Loading pour rester visible) */}
      <Nav />

      <main>
        {/* Header - Visible immédiatement */}
        <Loading>
          <Header />
        </Loading>

        {/* Sections avec Lazy Loading et Animation au scroll */}
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
