import React, { useState } from "react";
import "./style.css";

function AjouterDemande({ onAjouter }) {
  const [nouvelleDemande, setNouvelleDemande] = useState({
    about: "",
    description: "",
  });

  const handleChange = (e) => {
    setNouvelleDemande({ ...nouvelleDemande, [e.target.name]: e.target.value });
  };

  const ajouterDemande = () => {
    if (nouvelleDemande.about.trim() !== "") {
      fetch("http://localhost:8080/jsf-1.0-SNAPSHOT/api/demandes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nouvelleDemande),
      })
        .then((response) => response.json())
        .then((data) => {
          onAjouter(data);
          setNouvelleDemande({ about: "", description: "" });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <div className="tabAjout">
        <h1>Ajouter une demandes</h1>
        <input
          type="text"
          name="about"
          placeholder="Nom de la demande"
          value={nouvelleDemande.about}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description de la demande"
          value={nouvelleDemande.description}
          onChange={handleChange}
        />
        <button onClick={ajouterDemande}>Ajouter</button>
      </div>
    </div>
  );
}

export default AjouterDemande;
