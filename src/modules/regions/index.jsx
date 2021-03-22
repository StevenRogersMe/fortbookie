import React from 'react';
import { useHistory, useLocation } from 'react-router';
// UI
import NavLink from 'components/nav-link';
// Styles
import './styles.sass';
// Utils
import { isMathcingPath } from 'utils/router';

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
        <li key={id} className="regions__item">
          <NavLink isActive={id === 1} onClick={() => history.push(path)}>{name}</NavLink>
        </li>
      ))}
      <li className="regions__item" onClick={() => history.push('/live-events')}>
        <NavLink isActive={isMathcingPath(location, '/live-events')} onClick={() => history.push('/live-events')} accent>• LIVE</NavLink>
      </li>
    </ul>
  );
};

export default Regions;
