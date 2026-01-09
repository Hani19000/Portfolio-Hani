import  useEmail  from "../../hooks/ContactEmail";

const ContactForm: React.FC = () => {
  const { onSubmit, isLoading, status } = useEmail(); 

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="subject" placeholder="Sujet" required />
      <input type="text" name="name" placeholder="Votre nom complet" required />
      <input type="email" name="email" placeholder="Votre email" required />
      <textarea name="message" rows={7} placeholder="Votre message" required />

      {/* Affichage du statut */}
      {status.type && (
        <div className={`form-status ${status.type}`}>{status.message}</div>
      )}

      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
};

export default ContactForm;
