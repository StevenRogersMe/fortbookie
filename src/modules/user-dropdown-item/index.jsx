import React from 'react';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const UserDropdownItem = ({ title, icon: Icon, onClick }) => {
  return (
    <div className="user-dropdown-item" onClick={onClick}>
      <Icon className="user-dropdown-item__icon" />
      <Typography component="span" variant="h5" className="user-dropdown-item__title">{title}</Typography>
    </div>
  );
};

export default UserDropdownItem;
