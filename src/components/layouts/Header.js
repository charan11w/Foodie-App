import { Link, NavLink, useNavigate } from "react-router-dom";
import cartImage from '../../images/cart.jpg'
import { useState } from "react";
function Header({ setNav, active }) {

  const navigate = useNavigate();


  function handleRedirect() {
    navigate('/login');
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
              className={`li1 ${active === index ? 'activeNav' : ''}`}
              onClick={() => { setNav(index) }}
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
      <button className="logout" onClick={handleRedirect}>Log in</button>
    </div>
  );
}

export default Header;