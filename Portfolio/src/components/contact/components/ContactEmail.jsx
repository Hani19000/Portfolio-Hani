import { useRef } from "react";

function useEmail() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // 1. récupèrer les données du formulaire
    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      // 2. On envoie les données au back-end (ex: hébergé sur Render ou en local)
      // Remplace l'URL par celle de ton serveur une fois déployé
const response = await fetch('https://portfolio-hani-derrouiche.onrender.com/contact', { 
  method: 'POST',
  // ... reste du code
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message envoyé avec succès via le serveur !");
        e.target.reset();
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Impossible de contacter le serveur.");
    }
  };

  return { form, sendEmail };
}

export default useEmail;