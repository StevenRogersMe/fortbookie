import React from 'react';
// Styles
import './styles.sass';

const UserDropdownItem = ({ title, icon: Icon }) => {
  return (
    <div className="user-dropdown-item">
      <Icon className="user-dropdown-item__icon" />
      <span className="user-dropdown-item__title">{title}</span>
    </div>
  );
};

export default UserDropdownItem;
