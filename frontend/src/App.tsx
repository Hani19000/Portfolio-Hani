import { lazy, Suspense } from "react";
import Header from "./pages/Header"; // Garde Header car visible immédiatement
import Nav from "./pages/Nav";
import { ReveilServer } from "./api/api";
import { useEffect } from "react";

// Composants chargés à la demande
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));
/* const testimonials = lazy(() => import('./pages/testimonials')) */

// Composant de chargement
const SectionLoader = () => (
  <div className="section-loader">
    <div className="spinner"></div>
  </div>
);

function App() {
  useEffect(() => {
    ReveilServer(); // Appelle a l'api
  }, []);
  return (
    <>
      <Header />
      <Nav />

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
