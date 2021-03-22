import React, { Fragment } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { withBreakpoints } from 'react-breakpoints'
// UI
import Container from 'components/container';
import NavLink from 'components/nav-link';
import Button from 'components/button';
import Regions from 'modules/regions';
import UserDropdown from 'modules/user-dropdown';
import Burger from 'components/burger';
// Assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';
// Utils
import { isMathcingPath } from 'utils/router';
// Styles
import './styles.sass';

const Header = ({ isSigned, breakpoints, currentBreakpoint }) => {
  const history = useHistory();
  const location = useLocation();

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

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
                {!isMobile &&
                  <Fragment>
                    <div className="header__widget">
                      <NavLink isActive={isMathcingPath(location, '/withdraw')}>Withdraw</NavLink>
                    </div>
                    <div className="header__widget">
                      <Button size="lg" variant="accent" onClick={() => history.push('/deposit')}>Deposit</Button>
                    </div>
                  </Fragment>
                }
                <div className="header__widget">
                  <UserDropdown />
                </div>
                {isMobile &&
                  <div className="header__widget header__burger">
                    <Burger />
                  </div>
                }
              </div>
              :
              <div className="header__widgets">
                {!isMobile &&
                  <Fragment>
                    <div className="header__widget">
                      <Button size="lg" variant="accent" onClick={() => history.push('/sign-up')}>Sign Up</Button>
                    </div>
                    <div className="header__widget">
                      <Button size="lg" variant="primary" onClick={() => history.push('/sign-in')}>Sign In</Button>
                    </div>
                  </Fragment>
                }
                {isMobile &&
                  <div className="header__widge header__burger">
                    <Burger />
                  </div>
                }
              </div>
            }
          </div>
          {/* <div className="header__burger">
          </div> */}
        </Container>
      </header>
    </Fragment>
  );
};

export default withBreakpoints(Header);
