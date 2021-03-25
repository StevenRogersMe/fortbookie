import React, { Fragment } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { withBreakpoints } from 'react-breakpoints'
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUser } from 'redux/auth/selectors';
// Context
import { useTheme } from 'context/theme-context';
// UI
import Container from 'components/container';
import NavLink from 'components/nav-link';
import Button from 'components/button';
import Regions from 'modules/regions';
import UserDropdown from 'modules/user-dropdown';
import Burger from 'components/burger';
import Overlay from 'components/overlay';
// Assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoLight } from 'assets/images/logo-light.svg';
// Utils
import { isMathcingPath } from 'utils/router';
// Styles
import './styles.sass';

const Header = ({ user: { userData }, breakpoints, currentBreakpoint }) => {
  const history = useHistory();
  const location = useLocation();
  const { dark } = useTheme();
  const [isMobile, setIsMobile] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  const toggleMenu = () => setShowMenu(showMenu => !showMenu);

  return (
    <header className="header">
      <div className="header__wrap">
        <Container className="header__container">
          <Link className="header__logo" to={userData ? '/events' : '/'}>
            {dark ?
              <LogoLight className="header__logo-icon" />
              :
              <Logo className="header__logo-icon" />
            }
          </Link>

          {(userData && !isMobile) && <Regions />}

          <div className="header__right">
            <div className="header__widgets">
              {(!userData && !isMobile) && <UnsignedWidgets history={history} />}
              {(userData && !isMobile) && <SignedWidgets location={location} history={history} />}
              {userData &&
                <div className="header__widget">
                  <UserDropdown userData={userData} />
                </div>
              }
              {isMobile &&
                <div className="header__widget header__burger">
                  <Burger onClick={toggleMenu} />
                </div>
              }
            </div>
          </div>
        </Container>
      </div>

      {isMobile &&
        <Fragment>
          <Overlay isActive={showMenu} zIndex="999" onClick={toggleMenu} fixed />
          <div className={`header__mobile ${showMenu ? 'is-active' : ''}`}>
            {userData &&
              <div className="header__mobile-line">
                <Regions onItemClick={toggleMenu} />
              </div>
            }
            <div className="header__mobile-line">
              <div className="header__widgets">
                {!userData ?
                  <UnsignedWidgets history={history} toggleMenu={toggleMenu} />
                  :
                  <SignedWidgets toggleMenu={toggleMenu} location={location} history={history} />
                }
              </div>
            </div>
          </div>
        </Fragment>
      }
    </header>
  );
};

const UnsignedWidgets = ({ toggleMenu, history }) => (
  <Fragment>
    <div className="header__widget">
      <Button size="lg" variant="accent" onClick={() => { toggleMenu && toggleMenu(); history.push('/sign-up') }}>Sign Up</Button>
    </div>
    <div className="header__widget">
      <Button size="lg" variant="primary" onClick={() => { toggleMenu && toggleMenu(); history.push('/sign-in') }}>Sign In</Button>
    </div>
  </Fragment>
);

const SignedWidgets = ({ toggleMenu, location, history }) => (
  <Fragment>
    <div className="header__widget" onClick={toggleMenu}>
      <NavLink isActive={isMathcingPath(location, '/withdraw')} onClick={() => history.push('/withdraw')}>Withdraw</NavLink>
    </div>
    <div className="header__widget">
      <Button size="lg" variant="accent" onClick={() => { toggleMenu && toggleMenu(); history.push('/deposit') }}>Deposit</Button>
    </div>
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)(withBreakpoints(Header));
