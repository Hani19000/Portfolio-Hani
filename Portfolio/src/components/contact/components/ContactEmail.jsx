import { useRef, useState } from "react";

function useEmail() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Empêche les clics multiples

    setIsLoading(true);
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());

    try {
      const response = await fetch('https://portfolio-hani-derrouiche.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        e.target.reset();
      } else {
        const data = await response.json();
        alert(`❌ Erreur: ${data.error || 'Problème technique'}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("❌ Serveur injoignable.");
    } finally {
      setIsLoading(false); // Réactive le bouton quoi qu'il arrive
    }
  };

  return { form, sendEmail, isLoading };
}

export default useEmail;