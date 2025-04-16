import { Link, NavLink, useNavigate } from "react-router-dom";
import cartImage from '../../images/cart.jpg'
import { useState } from "react";
import CustomModal from "../ReusableComponents/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { logout, setNav } from "../../redux-slices/AuthSlice";
import { Box, Button, Modal } from "@mui/material";
import LoginForm from "../Forms/LoginForm";
import LogoutForm from "../Forms/LogoutForm";

import '../../styles/Header.css'
function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeNav, isAuthenticated } = useSelector(state => state.auth)
  const [models, setModels] = useState({ loginOpen: false, logoutOpen: false })

  const { loginOpen, logoutOpen } = models

  const setNavIdx = (index) => {
    dispatch(setNav(index))
  }

  const handleLogin = () => {
    setModels(pre => ({
      ...pre,
      loginOpen: true
    }))
  }

  const handleClose = () => {
    setModels(pre => ({
      ...pre,
      loginOpen: false
    }))
  }

  const handleLogOut = () => {
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
        <ul className="ul1 ">
          {[{
            toRoute: '/',
            content: 'Home'
          },
          {
            toRoute: 'restaurants',
            content: 'Restaurants'
          },
          {
            toRoute: 'orders',
            content: 'Orders'
          }
          ].map((element, index) => {
            const { toRoute, content } = element;
            return (
              <li
                key={index}
                className={`li1 ${activeNav === index ? 'activeNav' : ''}`}
                onClick={() => { setNavIdx(index) }}
              >
                <Link to={toRoute} className="links">{content}</Link>
              </li>

            )
          })}
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
            <LogoutForm onClose={handleClose} />
          </Box>
        </Modal>
        <div className="cart">
          <Link to='cart' className="links" key={1}>
            <img src={cartImage} className="cart-image"></img>
          </Link>
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