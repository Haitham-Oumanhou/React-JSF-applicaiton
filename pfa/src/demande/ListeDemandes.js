import React from 'react';

function ListeDemandes({ demandes }) {
  return (
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
          {demandes.map(demande => (
            <tr key={demande.id}>
              <td>{demande.about}</td>
              <td>{demande.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListeDemandes;
