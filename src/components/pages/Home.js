import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
function Home(onLogin) {
  return (
    <div>
      <div className="home-page">
        <div className="container con1">
          <div className="offers">
            <div className="offer-names">
            Get 50% offer on all restaurant for first Order
            </div>
            <button className="offer-button">Visit Restaurants</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;