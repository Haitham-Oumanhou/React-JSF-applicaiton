import React, { useState } from 'react';

function AjouterDemande() {
  const [nouvelleDemande, setNouvelleDemande] = useState({ nom: '', description: '' });

  const handleChange = (e) => {
    setNouvelleDemande({ ...nouvelleDemande, [e.target.name]: e.target.value });
  };

  const ajouterDemande = () => {
    if (nouvelleDemande.nom.trim() !== '') {
      // Post message to parent with the data
      window.parent.postMessage(nouvelleDemande, 'http://localhost:8080/jsf-1.0-SNAPSHOT/');
      setNouvelleDemande({ nom: '', description: '' });
    }
    console.log(nouvelleDemande);
  };

  return (
    <div className='tabAjout'>
      <h1>Ajouter une demandes</h1>
      <input
        type="text"
        name="nom"
        placeholder="Nom de la demande"
        value={nouvelleDemande.nom}
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
  );
}

export default AjouterDemande;
