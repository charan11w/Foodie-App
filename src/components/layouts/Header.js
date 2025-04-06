import { Link, NavLink, useNavigate } from "react-router-dom";
import cartImage from '../../images/cart.jpg'
import { useState } from "react";
import CustomModal from "../ReusableComponents/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { logout, setNav } from "../../Redux-toolkit/Reducers/AuthSlice";
import { Box, Button, Modal } from "@mui/material";
import LoginForm from "../LoginForm/LoginForm";
function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeNav, isAuthenticated } = useSelector(state => state.auth)
  const [open, setOpen] = useState(false)

  const setNavIdx = (index) => {
    dispatch(setNav(index))
  }

  const handleLogin = () => {
    setOpen(pre => !pre)
  }

  const handleClose = () => {
    setOpen(pre => !pre)
  }

  const handleLogOut = () => {
    dispatch(logout({ isAuthenticated: false }))
  }

  return (
    <div className="header-top">
      <div className="app-name">
        <Link to='/' className="links " key={"n"}>
          <div className="app-name ">Foodie</div>
        </Link>
      </div>
      <ul className="ul1">
        {[{
          toRoute: '/',
          content: 'Home'
        },
        {
          toRoute: 'restaurants',
          content: 'Restaurants'
        },
        {
          toRoute: 'category',
          content: 'Category'
        },
        {
          toRoute: 'orders',
          content: 'Orders'
        },
        {
          toRoute: 'orders',
          content: 'About us'
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
      <div className="cart">
        <Link to='cart' className="links" key={1}>
          <img src={cartImage} className="cart-image"></img>
        </Link>
      </div>
      <div className="charan">
        {
          isAuthenticated
            ?
            <Button id="login-" onClick={handleLogOut}>Logout</Button>
            :
            <Button id="login-" onClick={handleLogin}>Login</Button>

        }
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(0, 0, 0, 0.5)', // Optional: dimmed background
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1300, // above everything
          }}
        >
          <LoginForm onClose={handleClose} />
        </Box>


      </Modal>
    </div>
  );
}

export default Header;