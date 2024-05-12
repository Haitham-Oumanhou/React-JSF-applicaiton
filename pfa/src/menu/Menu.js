import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className='container'>
    <div className="menu">
      <h2>Actions</h2>
      <ul>
        <li>Liste des demandes</li>
        <li>Ajouter une demande</li>
        <li>Chercher une demande</li>
      </ul>
    </div>
    </div>
  );
};

export default Menu;
