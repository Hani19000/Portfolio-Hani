import "./contact.css";
import ContactExt from "./components/ContactExt";
import ContactForm from "./components/ContactForm";

function Contact() {
  return (
<section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <ContactExt />
        <ContactForm />
      </div>
    </section>
  );
}
export default Contact;
