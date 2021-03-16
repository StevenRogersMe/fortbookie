import React from 'react';
// Styles
import './styles.sass';

const regions = [
  { id: 1, name: 'NAE' },
  { id: 2, name: 'NAW' },
  { id: 3, name: 'EU' },
  { id: 4, name: 'BR' },
  { id: 5, name: 'OCE' }
];

const Regions = () => {
  return (
    <ul className="regions">
      {regions.map(({ id, name }) => (
        <li key={id} className={`regions__item ${id === 1 ? 'is-active' : ''}`}>{name}</li>
      ))}
    </ul>
  );
};

export default Regions;
