import React from 'react';
import { useHistory } from 'react-router-dom';
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
// Context
import { signInContext } from '../../app';

const items = [
  { title: 'Transactions', icon: Transaction, path: '/transactions' },
  { title: 'Player Transfer', icon: Transfer, path: '/' },
  { title: 'Player Rankings', icon: Rankings, path: '/player-rankings' },
  { title: 'Refer a friend', icon: Referal, path: '/' },
  { title: 'Rewards', icon: Rewards, path: '/rewards' },
  { title: 'Profile Settings', icon: Settings, path: '/' },
  { title: 'Help', icon: Support, path: '/help' },
];

const UserDropdown = () => {
  const history = useHistory();
  const [isActive, setIsActive] = React.useState(false);
  const { handleSignOut } = React.useContext(signInContext);
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
          {items.map(({ title, icon, path }, idx) => (
            <div key={idx} className="user-dropdown__item">
              <UserDropdownItem title={title} icon={icon} onClick={() => { history.push(path) }} />
            </div>
          ))}
          <div className="user-dropdown__item">
            <UserDropdownItem title="Log Out" icon={LogOut} onClick={() => {
              handleSignOut();
              history.push('/');
            }} />
          </div>
        </Dropdown.Box>
      </Dropdown>
    </React.Fragment>
  );
};

export default UserDropdown;
