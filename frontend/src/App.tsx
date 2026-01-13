import { lazy, Suspense } from "react";
import Header from "./pages/Header"; // Garde Header car visible immédiatement
import Nav from "./pages/Nav";
import { ReveilServer } from "./api/api";
import { useEffect } from "react";
import Loading from "./components/Loading";
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
    ReveilServer(); // Appelle a l'api réveille
  }, []);
  return (
    <>
      <Loading>
        <Suspense fallback={<SectionLoader />}>
          <Header />
          <Nav />
        </Suspense>
      </Loading>
      <Loading>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </Loading>
      <Loading>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
      </Loading>
      <Loading>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
      </Loading>
      <Loading>
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
      </Loading>
      <Loading>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </Loading>
      <Loading>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </Loading>
    </>
  );
}

export default App;
