import { Link, useNavigate } from "react-router-dom";
import cartImage from '../../images/cart.jpg'
function Header({onLogOut}) {

  const navigate = useNavigate();

  function handleRedirect() {
    onLogOut();
    navigate('/');
  }
  return (
    <div className="header-top">
      <div className="app-name">
        <div className="app-name">Foodie</div>
      </div>
      <ul className="ul1">
        <Link to='/' className="links">
          <li className="li1">Home</li>
        </Link>
        <Link to='restaurantList' className="links">
          <li className="li1">RestaurantList</li>
        </Link>
        <Link to='restaurantItems' className="links">
          <li className="li1">RestauratItems</li>
        </Link>
      </ul>
      <input type="input" className="search-bar" placeholder="Search for Food..." />
      <div className="cart">
        <img src={cartImage} className="cart-image"></img>
      </div>
      <button className="logout" onClick={handleRedirect}>Log out</button>
    </div>
  );
}

export default Header;