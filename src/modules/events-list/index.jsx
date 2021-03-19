import React from 'react';
// Styles
import './styles.sass';

const events = [
  { id: 1, name: 'NAE' },
  { id: 2, name: 'NAW' },
  { id: 3, name: 'EU' },
  { id: 4, name: 'BR' },
  { id: 5, name: 'OCE' }
];

const EventsList = () => {
  return (
    <ul className="events-list">
      {events.map(({ id, name }) => (
        <li key={id} className={`events-list__item ${id === 1 ? 'is-active' : ''}`}>{name}</li>
      ))}
      <li className="events-list__item events-list__item--alt">• LIVE</li>
    </ul>
  );
};

export default EventsList;
