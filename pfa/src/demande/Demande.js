import React, { useState, useEffect } from "react";
import ListeDemandes from "./ListeDemandes";
import AjouterDemande from "./AjouterDemande";
import RechercherDemande from "./RechercherDemande";
import "./style.css";

function App() {
  const [demandes, setDemandes] = useState([]);
  let idCounter = Date.now();

  const ajouterDemande = (nouvelleDemande) => {
    setDemandes([...demandes, { id: idCounter++, ...nouvelleDemande }]);
  };

  const fetchDemandes = async () => {
    const response = await fetch(
      "http://localhost:8080/jsf-1.0-SNAPSHOT/api/demandes"
    );
    if (response.ok) {
      const fetchedDemandes = await response.json();
      const demandesWithNewIds = fetchedDemandes.map((demande) => ({
        id: idCounter++,
        ...demande,
      }));
      setDemandes(demandesWithNewIds);
      console.log(demandesWithNewIds);
    }
  };

  //call fetchDemandes() function when component mounts
  useEffect(() => {
    fetchDemandes();
  }, []);

  const rechercherDemande = (recherche) => {
    // Vous pouvez implémenter votre logique de recherche ici
    // Pour cet exemple, je vais simplement afficher dans la console le résultat de la recherche
    console.log("Recherche en cours pour:", recherche);
  };

  const [selectedAction, setSelectedAction] = useState("");

  const handleMenuClick = (action) => {
    setSelectedAction(action);
  };

  let content;
  switch (selectedAction) {
    case "Liste des demandes":
      content = <ListeDemandes />;
      break;
    case "Ajouter une demande":
      content = <AjouterDemande onAjouter={ajouterDemande} />;
      break;
    case "Chercher une demande":
      content = <RechercherDemande demandes={demandes} />;
      break;
    default:
      content = <ListeDemandes />;
  }

  return (
    <div>
      <div className="menuContainer">
        <div className="menu">
          <h2>Actions</h2>
          <ul>
            <li onClick={() => handleMenuClick("Liste des demandes")}>
              Liste des demandes
            </li>
            <li onClick={() => handleMenuClick("Ajouter une demande")}>
              Ajouter une demande
            </li>
            <li onClick={() => handleMenuClick("Chercher une demande")}>
              Chercher une demande
            </li>
          </ul>
        </div>
      </div>

      <div className="content">{content}</div>
    </div>
  );
}

export default App;
