import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const DropdownHeader = ({ children, className, isActive, onClick }) => {
  const classnames = classNames({
    'dropdown-header': true,
    'is-active': isActive,
    [className]: className,
  });

  return (
    <div className={classnames} onClick={onClick}>
      {children}
    </div>
  )
};

export default DropdownHeader;
