import { useRef, useState, FormEvent } from "react";

interface UseEmailReturn {
  form: React.RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  status: { type: 'success' | 'error' | null; message: string };
}

function useEmail(): UseEmailReturn {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ""
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });

      if (response.ok) {
        e.currentTarget.reset();
        setStatus({ type: 'success', message: "Message envoyé." });
      } else {
        setStatus({ type: 'error', message: "Erreur lors de l'envoi." });
      }
    } catch {
      setStatus({ type: 'error', message: "Serveur indisponible." });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 4000);
    }
  };

  return { form, sendEmail, isLoading, status };
}

export default useEmail;