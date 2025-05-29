import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import cartImage from '../../images/cart.jpg'
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux-slices/AuthSlice";
import { Box, Button, Modal } from "@mui/material";
import LoginForm from "../Forms/LoginForm";
import LogoutForm from "../Forms/LogoutForm";

import '../../styles/Header.css'
import CheckoutModal from "../ReusableComponents/CheckoutModal";
import { useHeaderContext } from "../../context/HeaderContext";
function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { isAuthenticated } = useSelector(state => state.auth)
  const { cart } = useSelector(state => state.cart)

  const {
    loginOpen,
    logoutOpen,
    checkOut,
    mobileMenuOpen,
    handleMobileMenuClose,
    handleMobileMenuOpen,
    handleLogin,
    handleLogOut,
    handleCheckout,
    handleClose,
    handleLogOutClose
  } = useHeaderContext();

  const pathToIndex = useMemo(() => ({
    '/': 0,
    '/restaurants': 1,
    '/category': 2
  }), [])

  const routes = useMemo(() => ([
    { to: '/', label: 'Home', match: ['/', '/home'] },
    { to: '/restaurants', label: 'Restaurants', match: ['/restaurants', '/selectedRestaurant'] },
    { to: '/category', label: 'Category', match: ['/category', '/restaurantItems'] },
    { to: '/ordersHistory', label: 'Orders', match: ['/ordersHistory'] }
  ]), [])

  return (
    <div className="header-top">
      <div className="mobile-menu-icon" onClick={handleMobileMenuOpen}>
        &#9776;
      </div>
      <Modal open={mobileMenuOpen} onClose={handleMobileMenuClose}>
        <Box
          sx={{
            height: '100vh',
            width: '70vw',
            maxWidth: '300px',
            bgcolor: 'white',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1400,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <button onClick={handleMobileMenuClose} style={{ alignSelf: 'flex-end' }}>
            ❌
          </button>

          <Link to="/" onClick={handleMobileMenuClose} className="links">Home</Link>
          <Link to="/restaurants" onClick={handleMobileMenuClose} className="links">Restaurants</Link>
          <Link to="/category" onClick={handleMobileMenuClose} className="links">Category</Link>
          <Link to='/ordersHistory' onClick={handleMobileMenuClose} className="links">My Orders</Link>

          {isAuthenticated ? (
            <button className="log-button extra-btn" onClick={() => { handleLogOut(); handleMobileMenuClose(); }}>
              Logout
            </button>
          ) : (
            <button className="log-button extra-btn" onClick={() => { handleLogin(); handleMobileMenuClose(); }}>
              Login
            </button>
          )}
        </Box>
      </Modal>

      <div className="header-left">
        <div className="ap-name">
          <Link to='/' className="links " key={"n"}>
            <div className="app-name ">Foodie</div>
          </Link>
        </div>
      </div>
      <div className="header-center">
        <ul className="ul1">
          {routes.map(({ to, label, match }, idx) => (
            <li
              key={idx}
              className={`li1 ${match.includes(location.pathname) ? 'activeNav' : ''}`}
            >
              <Link to={to} className="links">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-right">

        <Modal open={loginOpen} onClose={handleClose}>
          <Box
            sx={{
              height: '100vh',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1300,
            }}
          >
            <LoginForm onClose={handleClose} />
          </Box>
        </Modal>
        <Modal open={logoutOpen} onClose={handleClose}>
          <Box
            sx={{
              height: '100vh',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1300,
            }}
          >
            <LogoutForm onClose={handleLogOutClose} closeAll={handleClose} />
          </Box>
        </Modal>
        <div className="log-btn">
          {
            isAuthenticated
              ?
              <div className="cart">
                <img src={cartImage} className="cart-image" onClick={handleCheckout}></img>
                <div className="cartLength" onClick={handleCheckout}>{cart.length}</div>
                <CheckoutModal open={checkOut} onClose={handleClose} />
              </div>
              :
              <button className="log-button" onClick={handleLogin}>Login</button>

          }
        </div>
      </div>
    </div>
  );
}

export default Header;