import ApiError from "../utils/error";

const baseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

async function post<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });

  const json = await res.json();

  if (!res.ok) {
    throw new ApiError(json.error ?? "Erreur serveur", res.status);
  }

  return json;
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
