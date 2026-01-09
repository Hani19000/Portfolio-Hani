import { useRef, useState, FormEvent } from "react";
import * as Sentry from "@sentry/react";
import post from "../api/api";
import isValid from "../utils/validation";

/* ===== TYPES ===== */
type Status = "idle" | "success" | "error";

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

/* ===== UTILS ===== */
const extractData = (form: HTMLFormElement): ContactData => {
  const fd = new FormData(form);
  return {
    name: String(fd.get("name") ?? ""),
    email: String(fd.get("email") ?? ""),
    message: String(fd.get("message") ?? ""),
  };
};

/* ===== HOOK ===== */
export function useEmail() {
  const timeoutRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: Status; message: string }>({
    type: "idle",
    message: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    // stocke immédiatement la référence du formulaire
    const form = e.currentTarget;
    const data = extractData(form);

    if (!isValid(data)) {
      return setStatus({
        type: "error",
        message: "Veuillez remplir tous les champs obligatoires",
      });
    }

    setIsLoading(true);

    try {
      const res = await post<{ message: string }>("/contact", data);

      // Reset du formulaire seulement après succès
      if (form instanceof HTMLFormElement) form.reset();

      setStatus({ type: "success", message: res.message });
    } catch (err: any) {
      Sentry.captureException(err, { extra: { payload: data } });
      setStatus({
        type: "error",
        message: err.message || "Une erreur est survenue lors de l'envoi.",
      });
    } finally {
      setIsLoading(false);

      // Nettoyage automatique du statut
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      // ou bien mais peut envoyer error si elle est null : clearTimeout(timeoutRef.current!); 

      timeoutRef.current = window.setTimeout(
        () => setStatus({ type: "idle", message: "" }),
        5000
      );
    }
  };

  return { onSubmit, isLoading, status };
}

export default useEmail;
