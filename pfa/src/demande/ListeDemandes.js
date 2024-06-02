import React, { useEffect, useState } from "react";

function ListeDemandes() {
  const [demandes, setDemandes] = useState([]);
  let idCounter = Date.now();

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
    }
  };

  useEffect(() => {
    fetchDemandes();
  }, []);

  return (
    <div className="container">
      <div className="tableContainer">
        <h1>Liste des demandes</h1>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande) => (
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

export default ListeDemandes;
