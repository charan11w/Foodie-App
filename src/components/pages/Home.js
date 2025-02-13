import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";
function Home(onLogin) {
  const navigate=useNavigate();
  function goToRestaurant(){
    navigate('/restaurants')
  }
  return (
    
    <div>
      <div className="home-page">
        <div className="container con1">
          <div className="offers">
            <div className="offer-names">
            Get 50% offer on all restaurant for first Order
            </div>
            <button className="offer-button" onClick={goToRestaurant}>Visit Restaurants</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;