import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const restaurantList = [{
  name: 'Five Star Chicken',
  retaurantType:'non-veg',
  rating: 3.8,
  address: "New gudupalli link road, near Babu nagar, Kuppam, Andhra Pradesh 517425",
  delivaryTime: `${20}-${40} min`,
  reviews: 17,
  positiveReview: `${72}%`,
  image: '../../images/nimage.png',
  minimumOrder:100.0
},
{
  name: 'Paradise Pizza',
  retaurantType:'non-veg',
  rating: 3.4,
  address: "RR Road Nethaji road to By pass Link Road, Kuppam, Andhra Pradesh 517425",
  delivaryTime: `${20}-${40} min`,
  reviews: 20,
  positiveReview: 72,
  image: '../../images/nimage.png',
  minimumOrder:100.0
},
{
  name: 'New Vasavi hotel',
  retaurantType:'veg',
  rating: 2.33,
  address: "kuppam murugan takes road",
  delivaryTime: `${20}-${40} min`,
  reviews: 3,
  positiveReview: 66.6,
  image: '../../images/nimage.png',
  minimumOrder:50.0
},
{
  name: 'CAKE SHOP Sweets & Snacks',
  retaurantType:'veg',
  rating: 1,
  address: "RadhaKrishna road BCN complex kuppam",
  delivaryTime: `${20}-${40} min`,
  reviews: 0,
  positiveReview: 66.9,
  image: '../../images/nimage.png',
  minimumOrder:50.0
},
{
  name: 'Gamer Kafe',
  retaurantType:'veg',
  rating: 3,
  address: "P8WR+CWV, Kuppam, Andhra Pradesh 517425, India",
  delivaryTime: `${20}-${40} min`,
  reviews: 4,
  positiveReview: 40.6,
  image: '../../images/nimage.png',
  minimumOrder:50.0
},
{
  name: 'New Al Bake Restaurant',
  retaurantType:'non-veg',
  rating: 3.35,
  address: "P8WR+CWV, Kuppam, Andhra Pradesh 517425, India",
  delivaryTime: `${20}-${45} min`,
  reviews: 18,
  positiveReview: 58.3,
  image: '../../images/nimage.png',
  minimumOrder:50.0
}]

function Restaurants() {
  const buttons = ["All", "Veg", "Non-Veg"];
  const [activeButton, setActiveButton] = useState("All");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  const handleFilter = (category) => {
    setActiveButton(category);
    if (category === "All") {
      setFilteredRestaurants(restaurantList);
    } else {
      setFilteredRestaurants(restaurantList.filter(res => res.retaurantType === category.toLowerCase()));
    }
  };

  return (
    <div className="total-respage">
      <div className="restaurant-page container">
        <h3 className="popular">Popular Stores</h3>
        <div className="jersi">
        <div className="btn-container">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={activeButton === btn ? "active-button" : "inactive-button"}
              onClick={() => handleFilter(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="row mt-4">
          {filteredRestaurants.map((restaurant, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">{restaurant.address}</p>
                  <p className="card-text">Rating: {restaurant.rating} ⭐</p>
                  <p className="card-text">Delivery Time: {restaurant.delivaryTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <style jsx>{`
          .btn-container {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }
          .active-button {
            background-color: green;
            color: white;
          }
          .inactive-button {
            background-color: white;
            color: black;
          }
          .active-button:hover {
            background-color: darkgreen;
          }
          .inactive-button:hover {
            background-color: grey;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Restaurants;
