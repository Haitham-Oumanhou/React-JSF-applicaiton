import React, { useState } from "react";

function RechercherDemande({ demandes }) {
  const [recherche, setRecherche] = useState("");

  const handleChange = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        className="searchInput"
        placeholder="Rechercher par about"
        value={recherche}
        onChange={handleChange}
      />

      <div className="tableContainer">
        <h1>Liste des demandes</h1>
        <table>
          <thead>
            <tr>
              <th>About</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {demandes
              .filter((demande) =>
                demande.about.toLowerCase().includes(recherche.toLowerCase())
              )
              .map((demande) => (
                <tr key={demande.id}>
                  <td>{demande.about}</td>
                  <td>{demande.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RechercherDemande;
