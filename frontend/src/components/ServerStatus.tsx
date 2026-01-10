import { useEffect, useState } from "react";
import { ReveilServer } from "../api/api";
import "../styles/serverstatus.css";

const ServerStatus = () => {
  const [status, setStatus] = useState<"loading" | "online" | "offline">(
    "loading",
  );

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await ReveilServer();
        // Vérifie si la réponse est OK (status 200-299)
        if (response && response.ok) {
          setStatus("online");
        } else {
          setStatus("offline");
        }
      } catch {
        setStatus("offline");
      }
    };

    checkStatus();
  }, []);
  return (
    <div
      className="server-status-wrapper"
      data-tooltip={
        status === "loading"
          ? "Connexion au serveur..."
          : status === "online"
            ? "Serveur Actif"
            : "Maintenance en cours"
      }
    >
      <span className={`dot ${status}`}></span>
    </div>
  );
};

export default ServerStatus;
