import React from "react";
import "./contact.css";
import ContactExt from "./components/ContactExt";
import ContactForm from "./components/ContactForm";
import HeaderParticles from "../header/components/HeaderParticles";

const Contact: React.FC = () => (
  <section id="contact" style={{ position: 'relative' }}>
    <HeaderParticles count={20} />
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <ContactExt />
      <ContactForm />
    </div>
  </section>
);

export default Contact;