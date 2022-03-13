import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GQ from '../../../images/footer-logo.png';
//import { Button } from './Button';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//newly added
import { Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/customerActions';

function NavBar() {
  /*newly added*/
  const dispatch = useDispatch();

  const customerLogin = useSelector((state) => state.customerLogin);
  const { customerInfo } = customerLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/');
  };

  /*newly added*/

  const [click, setClick] = useState(false);

  const handleclick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  const history = useHistory();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-log">
            <img
              src={GQ}
              height="90px"
              width="80px;"
              alt="GQ logo"
              className="gq-logo"
            />
          </Link>

          <h3 className="gq-title">
            GQ IN<span style={{ color: 'red' }}>TERNATIONAL</span>
          </h3>

          <div className="menu-icon" onClick={handleclick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onclick={closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/items" className="nav-links" onclick={closeMobileMenu}>
                ITEMS
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contactUs"
                className="nav-links"
                onclick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/aboutUs"
                className="nav-links"
                onclick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
          </ul>

          <Link
            class="btn-grad4"
            style={{
              marginBottom: '10px',
              borderRadius: '15px',
              width:'120px',
              height:'30px'
            }}
          >
            <Link to="/login"> {customerInfo ? 'Profile' : 'login'}</Link>
          </Link>

          <ul style={{ marginTop: '70px' }}>
            <li>
              <Nav>
                <NavDropdown title={customerInfo?.name} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
