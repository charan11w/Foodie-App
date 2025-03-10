import { useEffect, useState } from "react";
import RestaurantImage from "../../images/nimage.png";

function Restaurants() {
  // Define state for active category
  const [activeFood, setActiveFood] = useState("all");
  const [filteredRes,setFilteredRes] = useState([]);


  const foodType = [
    { type: "all", name: "All", class: 'all-btn' },
    { type: "veg", name: "Veg", class: 'veg-btn' },
    { type: "non-veg", name: "Non-Veg", class: 'non-btn' },
  ];

  const restaurants = [
    { id: 1, name: "Green Leaf", type: "veg" },
    { id: 2, name: "BBQ Nation", type: "non-veg" },
    { id: 3, name: "Veg Delight", type: "veg" },
    { id: 4, name: "Meat Lovers", type: "non-veg" },
    { id: 5, name: "Pure Veg Heaven", type: "veg" },
    { id: 6, name: "Grill House", type: "non-veg" },
  ];

  // **Filter restaurants based on selected category**
  useEffect(() => {

    const filteredRestaurants = restaurants.filter((restaurant) =>
      activeFood === "all" ? true : restaurant.type === activeFood
    );
    setFilteredRes(filteredRestaurants);
    console.log('filtereds',filteredRes,restaurants)
  }, [activeFood])

  return (
    <div className="resPage">
      <div className="container mtl">
        <div className="resCont">
          <h3>Popular Restaurants</h3>
          <div className="res-type">
            <div className="store-type">
              {foodType.map((food, index) => (
                <button
                  key={index}
                  className={`${food.class} ${activeFood === food.type ? "activeFood" : ""}`}
                  onClick={() => setActiveFood(food.type)} 
                >
                  {food.name}
                </button>
              ))}
            </div>

            {/* Display Filtered Restaurants */}
            <div className="types-R row">
              {filteredRes.map((restaurant) => (
                <div className="eatPlace col-3" key={restaurant.id}>
                  <div className="center-div">
                    <div className="img-cont">
                      <img src={RestaurantImage} className="image-res" alt="Restaurant" />
                    </div>
                    <div className="detail-res">
                      <div className="res-name">{restaurant.name}</div>
                      <div className="star-btn">5.1</div>
                      <div className="res-details">
                        <p className="adrs-res">palace road rs pet kuppam</p>
                        <p className="delivery-time">20 - 30 min</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
