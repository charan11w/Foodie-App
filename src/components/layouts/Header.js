import { Link, useNavigate } from "react-router-dom";
import cartImage from '../../images/cart.jpg'
function Header({ onLogOut }) {

  const navigate = useNavigate();

  function handleRedirect() {
    onLogOut();
    navigate('/');
  }
  return (
    <div className="header-top">
      <div className="app-name">
        <Link to='/' className="links">
          <div className="app-name">Foodie</div>
        </Link>
      </div>
      <ul className="ul1">
        <Link to='/' className="links">
          <li className="li1">Home</li>
        </Link>
        <Link to='restaurants' className="links">
          <li className="li1">Restaurants</li>
        </Link>
        <Link to='restaurantItems' className="links">
          <li className="li1">Category</li>
        </Link>
        <Link to='orders' className="links">
          <li className="li1">Orders</li>
        </Link>
        <Link to='orders' className="links">
          <li className="li1">About us</li>
        </Link>
      </ul>
      <div className="cart">
        <Link to='cart' className="links">
          <img src={cartImage} className="cart-image"></img>
        </Link>
      </div>
      <button className="logout" onClick={handleRedirect}>Log out</button>
    </div>
  );
}

export default Header;