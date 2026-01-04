import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services-section/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonial from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import HeaderParticles from './components/header/components/HeaderParticles'

function App() {

  return (
    <>
    <HeaderParticles count={20} />
<Header />
<Nav />
<About />
<Experience />
<Services />
<Portfolio />
{/* <Testimonial /> */}
<Contact />
<Footer />
    </>
  )
}

export default App
