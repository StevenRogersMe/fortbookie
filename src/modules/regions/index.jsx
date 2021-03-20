import React from 'react';
import { useHistory, useLocation } from 'react-router';
// Styles
import './styles.sass';
// Utils
import { isCurrentPath } from 'utils';

const regions = [
  { id: 1, name: 'NAE', path: '/events' },
  { id: 2, name: 'NAW', path: '/events' },
  { id: 3, name: 'EU', path: '/events' },
  { id: 4, name: 'BR', path: '/events' },
  { id: 5, name: 'OCE', path: '/events' }
];

const Regions = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <ul className="regions">
      {regions.map(({ id, name, path }) => (
        <li
          key={id}
          className={`regions__item ${id === 1 ? 'is-active' : ''}`}
          onClick={() => history.push(path)}
        >{name}</li>
      ))}
      <li className={`regions__item regions__item--alt ${isCurrentPath(location, '/live-events')}`} onClick={() => history.push('/live-events')}>• LIVE</li>
    </ul>
  );
};

export default Regions;
