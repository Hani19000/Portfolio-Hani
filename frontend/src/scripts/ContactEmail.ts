import { useRef, useState, FormEvent } from "react";

interface UseEmailReturn {
  form: React.RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  status: { type: "success" | "error" | null; message: string };
}

function useEmail(): UseEmailReturn {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (isLoading) return;

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const formData = new FormData(formElement);
      const data = Object.fromEntries(formData);

      // Validation côté client
      if (!data.name || !data.email || !data.message) {
        setStatus({
          type: "error",
          message: "Veuillez remplir tous les champs obligatoires",
        });
        setIsLoading(false);
        return;
      }

      const baseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

      console.log("Envoi vers:", `${baseUrl}/contact`);
      console.log("Données:", data);

      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Réponse serveur:", responseData);

      if (response.ok) {
        formElement.reset();
        setStatus({
          type: "success",
          message: responseData.message || "Message envoyé avec succès !",
        });
      } else {
        // Afficher le message d'erreur spécifique du serveur
        setStatus({
          type: "error",
          message:
            responseData.error ||
            `Erreur ${response.status}: ${response.statusText}`,
        });
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({
        type: "error",
        message:
          "Impossible de contacter le serveur. Vérifiez votre connexion.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  return { form, sendEmail, isLoading, status };
}

export default useEmail;
