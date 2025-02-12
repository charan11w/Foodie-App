import { Link,useNavigate } from "react-router-dom";
function Header() {

  const navigate=useNavigate();

  function handleRedirect(){
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
        <li className="li1">RestauratItems</li>
      </ul>
      <input type="input" className="search-bar" placeholder="Search for Food..." />
      <button className="logout" onClick={handleRedirect}>Log out</button>
      <div className="cart">Cart</div>
    </div>
  );
}

export default Header;