import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { setSelectedEvent } from 'redux/selected-event/actions';
import { selectSelectedEvent } from 'redux/selected-event/selectors';
// UI
import NavLink from 'components/nav-link';
// Styles
import './styles.sass';

const regions = [
  { id: 1, name: 'nae', value: 'nae', path: '/events' },
  { id: 2, name: 'naw', value: 'naw', path: '/events' },
  { id: 3, name: 'eu', value: 'eu', path: '/events' },
  { id: 4, name: 'br', value: 'br', path: '/events' },
  { id: 5, name: 'oce', value: 'oce', path: '/events' },
  { id: 6, name: '• live', value: 'live', path: '/live-events', accent: true }
];

const Regions = ({ selectedEvent, setSelectedEvent }) => {
  const history = useHistory();
  const location = useLocation();

  const handleNavLinkClick = (path, value) => {
    if (location.pathname !== path) {
      history.push(path);
    }
    setSelectedEvent(value);
  };

  return (
    <ul className="regions">
      {regions.map(({ id, name, value, path, accent }) => (
        <li key={id} className="regions__item">
          <NavLink
            isActive={selectedEvent === value}
            onClick={() => handleNavLinkClick(path, value)}
            accent={accent}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedEvent: selectSelectedEvent
});

const mapDispatchToProps = {
  setSelectedEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(Regions);
