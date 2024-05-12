import React, { useState } from 'react';
import ListeDemandes from './ListeDemandes';
import AjouterDemande from './AjouterDemande';
import RechercherDemande from './RechercherDemande';
import './style.css'

function App() {
  const [demandes, setDemandes] = useState([
    { id: 1, nom: "Demande 1", description: "Description de la demande 1" }
  ]);

  const ajouterDemande = (nouvelleDemande) => {
    setDemandes([...demandes, { id: Date.now(), ...nouvelleDemande }]);
  };

  const rechercherDemande = (recherche) => {
    // Vous pouvez implémenter votre logique de recherche ici
    // Pour cet exemple, je vais simplement afficher dans la console le résultat de la recherche
    console.log("Recherche en cours pour:", recherche);
  };

  const [selectedAction, setSelectedAction] = useState('');

  const handleMenuClick = (action) => {
    setSelectedAction(action);
  };

  let content;
  switch (selectedAction) {
    case 'Liste des demandes':
      content = <ListeDemandes demandes={demandes} />;
      break;
    case 'Ajouter une demande':
      content = <AjouterDemande onAjouter={ajouterDemande} />;
      break;
    case 'Chercher une demande':
      content = <RechercherDemande demandes={demandes} />;
      break;
    default:
      content = <div>Bonjour!</div>;
  }

  return (
    <div>
        <div className='menuContainer'>
        <div className="menu">
            <h2>Actions</h2>
            <ul>
                <li onClick={() => handleMenuClick('Liste des demandes')}>Liste des demandes</li>
                <li onClick={() => handleMenuClick('Ajouter une demande')}>Ajouter une demande</li>
                <li onClick={() => handleMenuClick('Chercher une demande')}>Chercher une demande</li>
            </ul>
        </div>
        </div>

        <div className="content">{content}</div>
    </div>
  );
}

export default App;
