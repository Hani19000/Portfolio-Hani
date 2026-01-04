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
    
    // Empêche les envois multiples si une requête est déjà en cours
    if (isLoading) return;

    setIsLoading(true);

    // Extraction des données du formulaire
    const target = e.currentTarget;
    const formData = Object.fromEntries(new FormData(target));

    try {
      // 1. On récupère l'URL et on retire le slash final s'il existe pour éviter le "//contact"
      const baseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      
      // 2. Envoi de la requête POST au backend Render
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      // 3. Traitement de la réponse
      if (response.ok) {
        target.reset();
        alert("✅ Message envoyé avec succès !");
      } else {
        // On essaie de lire le message d'erreur renvoyé par le backend
        const data = await response.json().catch(() => ({}));
        alert(`❌ Erreur: ${data.message || data.error || "Le serveur a refusé l'envoi"}`);
      }
    } catch (error) {
      // Si on arrive ici, c'est que le réseau a coupé ou que l'URL est fausse
      console.error("Erreur Fetch:", error);
      alert("❌ Serveur injoignable. Vérifiez votre connexion ou l'état du serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  return { form, sendEmail, isLoading };
}

export default useEmail;