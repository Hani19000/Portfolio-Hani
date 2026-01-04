import { useRef, useState, FormEvent } from "react";

interface UseEmailReturn {
  form: React.RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  status: { type: 'success' | 'error' | null; text: string }; // Nouvel état pour le statut
}

function useEmail(): UseEmailReturn {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: ""
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setStatus({ type: null, text: "" }); // Réinitialise le message au début

    const target = e.currentTarget;
    const formData = Object.fromEntries(new FormData(target));

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        target.reset();
        setStatus({ type: 'success', text: "✅ Votre message a été envoyé avec succès !" });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus({ 
          type: 'error', 
          text: `❌ ${data.message || "Une erreur est survenue lors de l'envoi."}` 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        text: "❌ Impossible de contacter le serveur. Réessayez plus tard." 
      });
    } finally {
      setIsLoading(false);
      // Optionnel : faire disparaître le message après 5 secondes
      setTimeout(() => setStatus({ type: null, text: "" }), 5000);
    }
  };

  return { form, sendEmail, isLoading, status };
}

export default useEmail;