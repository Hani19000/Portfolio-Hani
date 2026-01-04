import { useRef, useState, FormEvent } from "react";

interface UseEmailReturn {
  form: React.RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

function useEmail(): UseEmailReturn {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    
    // Typage précis des données du formulaire
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await fetch('https://portfolio-hani-derrouiche.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        e.currentTarget.reset();
        alert("✅ Message envoyé avec succès !");
      } else {
        const data = await response.json();
        alert(`❌ Erreur: ${data.error || 'Problème technique'}`);
      }
    } catch (error) {
      alert("❌ Serveur injoignable.");
    } finally {
      setIsLoading(false);
    }
  };

  return { form, sendEmail, isLoading };
}

export default useEmail;