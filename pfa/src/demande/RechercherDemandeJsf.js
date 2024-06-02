import React, { useState, useEffect } from 'react';

function RechercherDemandeJsf() {


  const [demandes, setDemandes] = useState([]);
  let idCounter = Date.now();

  
  const fetchDemandes = async () => {
    const response = await fetch('http://localhost:8080/jsf-1.0-SNAPSHOT/api/demandes');
    if (response.ok) {
      const fetchedDemandes  = await response.json();
      const demandesWithNewIds = fetchedDemandes.map(demande => ({ id: idCounter++, ...demande }));
      setDemandes(demandesWithNewIds);
      console.log(demandesWithNewIds);
    }
  };

  useEffect(() => {
    fetchDemandes();
  }, []);

  const [recherche, setRecherche] = useState('');

  const handleChange = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par about"
        value={recherche}
        onChange={handleChange}
      />


        <div>
        <h1>Liste des demandes</h1>
        <table>
            <thead>
            <tr>
                <th>About</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {
                demandes
                    .filter(demande => demande.about.toLowerCase().includes(recherche.toLowerCase()))
                    .map(demande => (
                    <tr key={demande.id}>
                        <td>{demande.about}</td>
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

export default RechercherDemandeJsf;
