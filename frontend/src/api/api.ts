import ApiError from "../utils/error";

const baseUrl = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

async function post<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });

  // Vérification si la réponse a du contenu avant de tenter le JSON
  const contentType = res.headers.get("content-type");
  let json: Record<string, unknown> = {};

  if (contentType && contentType.includes("application/json")) {
    json = await res.json();
  }

  if (!res.ok) {
    const errorMessage =
      (typeof json.message === "string" ? json.message : null) ||
      (typeof json.error === "string" ? json.error : null) ||
      "Erreur serveur";
    throw new ApiError(errorMessage, res.status);
  }

  return json as T;
}

// fonction pour le réveil du server
export const ReveilServer = async () => {
  try {
    return await fetch(`${baseUrl}/api/ping`);
  } catch (error) {
    console.log("Le serveur est en cours de réveil...", error);
  }
};

export default post;
