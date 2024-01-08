import React from 'react';

const MaisonList = ({ maisons }) => {
  return (
    <div>
      <h2>Liste des Maisons</h2>
      <ul>
        {maisons.map((maison) => (
          <li key={maison.id}>{maison.maison}</li>
        ))}
      </ul>
    </div>
  );
};

export default MaisonList;
