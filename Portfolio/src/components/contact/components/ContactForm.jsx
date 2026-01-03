import useEmail from "../components/ContactEmail";

function ContactForm() {
  const { form, sendEmail, isLoading } = useEmail();
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="subject" placeholder="Subject" required />
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
      />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="7" placeholder="Your Message" required />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? "Envoi en cours..." : "Send Message"}
      </button>
    </form>
  );
}
export default ContactForm;
