import React, { useState } from 'react';

function RechercherDemande({ demandes }) {
  const [recherche, setRecherche] = useState('');

  const handleChange = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par nom"
        value={recherche}
        onChange={handleChange}
      />


        <div>
        <h1>Liste des demandes</h1>
        <table>
            <thead>
            <tr>
                <th>Nom</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {
                demandes
                    .filter(demande => demande.nom.toLowerCase().includes(recherche.toLowerCase()))
                    .map(demande => (
                    <tr key={demande.id}>
                        <td>{demande.nom}</td>
                        <td>{demande.description}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default RechercherDemande;
