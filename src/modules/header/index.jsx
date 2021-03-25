import React, { Fragment } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { withBreakpoints } from 'react-breakpoints'
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUser } from 'redux/auth/selectors';
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
// Utils
import { isMathcingPath } from 'utils/router';
// Styles
import './styles.sass';

const Header = ({ user: { userData }, breakpoints, currentBreakpoint }) => {
  const history = useHistory();
  const location = useLocation();

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
    <Fragment>
      <div className="header-spacer"></div>
      <header className="header">
        <Container className="header__container">
          <div className="header__left">
            <Link to="/">
              <Logo className="header__logo" />
            </Link>
          </div>
          {(userData && !isMobile) &&
            <div className="header__center">
              <Regions />
            </div>
          }
          <div className="header__right">
            <div className="header__widgets">
              {(!userData && !isMobile) &&
                <Fragment>
                  <div className="header__widget">
                    <Button size="lg" variant="accent" onClick={() => history.push('/sign-up')}>Sign Up</Button>
                  </div>
                  <div className="header__widget">
                    <Button size="lg" variant="primary" onClick={() => history.push('/sign-in')}>Sign In</Button>
                  </div>
                </Fragment>
              }
              {(userData && !isMobile) &&
                <Fragment>
                  <div className="header__widget">
                    <NavLink isActive={isMathcingPath(location, '/withdraw')} onClick={() => history.push('/withdraw')}>Withdraw</NavLink>
                  </div>
                  <div className="header__widget">
                    <Button size="lg" variant="accent" onClick={() => history.push('/deposit')}>Deposit</Button>
                  </div>
                </Fragment>
              }
              {userData &&
                <div className="header__widget">
                  <UserDropdown userData={userData} />
                </div>
              }
              {isMobile &&
                <div className="header__widge header__burger">
                  <Burger onClick={toggleMenu} />
                </div>
              }
            </div>
          </div>
        </Container>

        {isMobile &&
          <Fragment>
            <Overlay isActive={showMenu} zIndex="999" onClick={toggleMenu} fixed />
            <div className={`header__mobile ${showMenu ? 'is-active' : ''}`}>
              {!userData &&
                <div className="header__mobile-line">
                  <div className="header__widgets">
                    <div className="header__widget" onClick={toggleMenu} >
                      <Button size="lg" variant="accent" onClick={() => history.push('/sign-up')}>Sign Up</Button>
                    </div>
                    <div className="header__widget" onClick={toggleMenu} >
                      <Button size="lg" variant="primary" onClick={() => history.push('/sign-in')}>Sign In</Button>
                    </div>
                  </div>
                </div>
              }
              {userData &&
                <Fragment>
                  <div className="header__mobile-line">
                    <Regions onItemClick={toggleMenu} />
                  </div>
                  <div className="header__mobile-line">
                    <div className="header__widgets">
                      <div className="header__widget" onClick={toggleMenu} >
                        <NavLink isActive={isMathcingPath(location, '/withdraw')} onClick={() => history.push('/withdraw')}>Withdraw</NavLink>
                      </div>
                      <div className="header__widget" onClick={toggleMenu} >
                        <Button size="lg" variant="accent" onClick={() => history.push('/deposit')}>Deposit</Button>
                      </div>
                    </div>
                  </div>
                </Fragment>
              }
            </div>
          </Fragment>
        }
      </header>
    </Fragment >
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)(withBreakpoints(Header));
