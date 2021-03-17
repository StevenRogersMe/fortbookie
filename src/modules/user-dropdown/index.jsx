import React from 'react';
// UI
import Dropdown from 'components/dropdown';
import UserDropdownItem from 'modules/user-dropdown-item';
// Styles
import './styles.sass';
// Assets
import AvatarImage from 'assets/images/user/avatar.png';
import { ReactComponent as ArrowIcon } from 'assets/images/icons/arrow.svg';
import { ReactComponent as Transaction } from 'assets/images/user/transaction.svg';
import { ReactComponent as Transfer } from 'assets/images/user/transfer.svg';
import { ReactComponent as Rankings } from 'assets/images/user/rank.svg';
import { ReactComponent as Referal } from 'assets/images/user/referal.svg';
import { ReactComponent as Rewards } from 'assets/images/user/reward.svg';
import { ReactComponent as Settings } from 'assets/images/user/settings.svg';
import { ReactComponent as Support } from 'assets/images/user/support.svg';
import { ReactComponent as LogOut } from 'assets/images/user/logout.svg';

const items = [
  { title: 'Transactions', icon: Transaction },
  { title: 'Player Transfer', icon: Transfer },
  { title: 'Player Rankings', icon: Rankings },
  { title: 'Refer a friend', icon: Referal },
  { title: 'Rewards', icon: Rewards },
  { title: 'Profile Settings', icon: Settings },
  { title: 'Help', icon: Support },
];

const UserDropdown = () => {
  const [isActive, setIsActive] = React.useState(false);
  const handleDropdown = () => setIsActive(isActive => !isActive);

  return (
    <React.Fragment>
      <div className={`user-dropdown-overlay ${isActive ? 'is-active' : ''}`}></div>
      <Dropdown className="user-dropdown" isActive={isActive} onClickOutside={handleDropdown}>
        <Dropdown.Header className="user-dropdown__header" onClick={handleDropdown}>
          <div className="user-dropdown__avatar">
            <img src={AvatarImage} alt="avatar" />
          </div>
          <div className="user-dropdown__data">
            <div className="user-dropdown__data-top">
              <span className="user-dropdown__name">Joanne Brown</span>
            </div>
            <div className="user-dropdown__data-bottom">
              <span className="user-dropdown__balance">1 925,45$</span>
              <span className="user-dropdown__pending">95$ Pending</span>
            </div>
          </div>
          <ArrowIcon className={`user-dropdown__icon ${isActive ? 'is-active' : ''}`} />
        </Dropdown.Header>
        <Dropdown.Box className="user-dropdown__box" onClick={handleDropdown}>
          {items.map(({ title, icon }, idx) => (
            <div key={idx} className="user-dropdown__item">
              <UserDropdownItem title={title} icon={icon} />
            </div>
          ))}
          <div className="user-dropdown__item">
            <UserDropdownItem title="Log Out" icon={LogOut} />
          </div>
        </Dropdown.Box>
      </Dropdown>
    </React.Fragment>
  );
};

export default UserDropdown;
