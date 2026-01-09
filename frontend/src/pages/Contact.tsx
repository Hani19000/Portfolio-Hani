import React from "react";
import "../styles/contact.css";
import ContactExt from "../components/contact/ContactExt";
import ContactForm from "../components/contact/ContactForm";
import HeaderParticles from "../components/header/HeaderParticles";

const Contact: React.FC = () => (
  <section id="contact" style={{ position: 'relative' }}>
    <HeaderParticles count={20} />
    <h5>Une Question ?</h5>
    <h2>Parlons de votre projet</h2>

    <div className="container contact__container">
      <ContactExt />
      <ContactForm />
    </div>
  </section>
);

export default Contact;