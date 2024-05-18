import React, { useState, useEffect } from 'react';

function AjouterDemande() {
  const [nouvelleDemande, setNouvelleDemande] = useState({ nom: '', description: '' });
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket('ws://localhost:80');
    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    setSocket(ws);

    // Clean up WebSocket on component unmount
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  const handleChange = (e) => {
    setNouvelleDemande({ ...nouvelleDemande, [e.target.name]: e.target.value });
  };

  const ajouterDemande = () => {
    if (nouvelleDemande.nom.trim() !== '') {
      if (socket && socket.readyState === WebSocket.OPEN) {
        // Send nouvelleDemande object as JSON string
        socket.send(JSON.stringify(nouvelleDemande));
        setNouvelleDemande({ nom: '', description: '' });
      } else {
        console.error('WebSocket connection is not open');
      }
    }
  };

  return (
    <div className='tabAjout'>
      <h1>Ajouter une demande</h1>
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
