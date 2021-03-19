import React from 'react';
import { withRouter } from 'react-router';
// Styles
import './styles.sass';

const events = [
  { id: 1, name: 'NAE', path: '/events' },
  { id: 2, name: 'NAW', path: '/events' },
  { id: 3, name: 'EU', path: '/events' },
  { id: 4, name: 'BR', path: '/events' },
  { id: 5, name: 'OCE', path: '/events' }
];

const EventsList = ({ history }) => {
  return (
    <ul className="events-list">
      {events.map(({ id, name, path }) => (
        <li
          key={id}
          className={`events-list__item ${id === 1 ? 'is-active' : ''}`}
          onClick={() => history.push(path)}
        >{name}</li>
      ))}
      <li className="events-list__item events-list__item--alt" onClick={() => history.push('/live-events')}>• LIVE</li>
    </ul>
  );
};

export default withRouter(EventsList);
