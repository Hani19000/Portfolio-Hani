import { useRef } from "react";

function useEmail() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch('https://portfolio-hani-derrouiche.onrender.com/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message envoyé avec succès !");
        e.target.reset();
      } else {
        alert(`❌ Erreur: ${data.error || 'Erreur lors de l\'envoi'}`);
        console.error('Détails:', data);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("❌ Impossible de contacter le serveur. Vérifiez votre connexion.");
    }
  };

  return { form, sendEmail };
}

export default useEmail;
