import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import cartImage from '../../images/cart.jpg'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux-slices/AuthSlice";
import { Box, Button, Modal } from "@mui/material";
import LoginForm from "../Forms/LoginForm";
import LogoutForm from "../Forms/LogoutForm";

import '../../styles/Header.css'
import CheckoutModal from "../ReusableComponents/CheckoutModal";
function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { isAuthenticated } = useSelector(state => state.auth)
  const [models, setModels] = useState({ loginOpen: false, logoutOpen: false ,checkOut:false})
  const {cart} = useSelector(state => state.cart)

  const { loginOpen, logoutOpen,checkOut } = models


  const pathToIndex = {
    '/': 0,
    '/restaurants': 1,
    '/category': 2
  };

  const routes = [
    { to: '/', label: 'Home', match: ['/', '/home'] },
    { to: '/restaurants', label: 'Restaurants', match: ['/restaurants', '/selectedRestaurant'] },
    { to: '/category', label: 'Category', match: ['/category', '/restaurantItems'] }
  ];


  const handleLogin = () => {
    setModels(pre => ({
      ...pre,
      loginOpen: true
    }))
  }

  const handleClose = () => {
    setModels((pre) => ({
      ...pre,
      loginOpen: false,  
      logoutOpen: false,
      checkOut:false 
    }));
  };

  const handleLogOut = () => {
    setModels(pre => ({
      ...pre,
      logoutOpen:true
    }))
  }

  const handleCheckout=() => {
    setModels(pre => ({
      ...pre,
      checkOut:true
    }))
  }

  const handleLogOutClose= () => {
    setModels(pre => ({
      ...pre,
      logoutOpen:true
    }))
    dispatch(logout({ isAuthenticated: false }))
  }
  return (
    <div className="header-top">
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
        <div className="cart">
            <img src={cartImage} className="cart-image" onClick={handleCheckout}></img>
            <div className="cartLength" onClick={handleCheckout}>{cart.length}</div>
            <CheckoutModal open={checkOut} onClose={handleClose}/>
        </div>
        <div className="log-btn">
          {
            isAuthenticated
              ?
              <button className="log-button" onClick={handleLogOut}>Logout</button>
              :
              <button className="log-button" onClick={handleLogin}>Login</button>

          }
        </div>
      </div>
    </div>
  );
}

export default Header;