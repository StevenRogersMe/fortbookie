import React from 'react';
// UI
import ToggleSwitch from 'components/toggle-switch';
import Typography from 'components/typography';
// Styles
import './styles.sass';

const ToggleTheme = () => {
  const [isActive, setIsActive] = React.useState(false)
  const handleToggle = () => setIsActive(isActive => !isActive)
  return (
    <div className="toggle-theme">
      <ToggleSwitch onChange={handleToggle} checked={isActive} className="toggle-theme__switch" />
      <Typography component="span" variant="h5" className="user-dropdown-item__title">{isActive ? 'Dark theme' : 'Light theme'}</Typography>
    </div>
  );
};

export default ToggleTheme;
