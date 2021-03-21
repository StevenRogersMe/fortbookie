import React, { Fragment } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
// UI
import Container from 'components/container';
import Button from 'components/button';
import Regions from 'modules/regions';
import UserDropdown from 'modules/user-dropdown';
// Assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';
// Utils
import { isMathcingPath } from 'utils/router';
// Styles
import './styles.sass';

const Header = ({ isSigned }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Fragment>
      <div className="header-spacer"></div>
      <header className="header">
        <Container className="header__container">
          <div className="header__left">
            <Link to="/">
              <Logo className="header__logo" />
            </Link>
          </div>
          <div className="header__center">
            <Regions />
          </div>
          <div className="header__right">
            {isSigned ?
              <div className="header__widgets">
                <div className="header__widget">
                  <span
                    className={`header__widget-text ${isMathcingPath(location, '/withdraw')}`}
                    onClick={() => history.push('/withdraw')}
                  >Withdraw</span>
                </div>
                <div className="header__widget">
                  <Button size="lg" variant="accent" onClick={() => history.push('/deposit')}>Deposit</Button>
                </div>
                <div className="header__widget">
                  <UserDropdown />
                </div>
              </div>
              :
              <div className="header__widgets">
                <div className="header__widget">
                  <Button size="lg" variant="accent" onClick={() => history.push('/sign-up')}>Sign Up</Button>
                </div>
                <div className="header__widget">
                  <Button size="lg" variant="primary" onClick={() => history.push('/sign-in')}>Sign In</Button>
                </div>
              </div>
            }
          </div>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
