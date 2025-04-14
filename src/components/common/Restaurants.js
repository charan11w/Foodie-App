import RestaurantImage from "../../images/nimage.png";
import { useDispatch, useSelector } from "react-redux";
import { selectAllRestaurants, setRestaurant } from "../../redux-slices/RestaurantSlice";
import { useNavigate } from "react-router-dom";


function Restaurants({restaurants}){
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const openRestaurant=(restaurant) => {
    dispatch(setRestaurant(restaurant))
    navigate('/selectedRestaurant');
  }
  return (
     <div className="types-R row">
    {restaurants.map((restaurant) => (
      <div className="eatPlace col-3" key={restaurant.id}>
        <div className="center-div" onClick={() => openRestaurant(restaurant)}>
          <div className="img-cont">
            <img src={RestaurantImage} className="image-res" alt="Restaurant" />
          </div>
          <div className="detail-res">
            <div className="res-name">{restaurant.name}</div>
            <div className="star-btn">{restaurant.ratings}</div>
            <div className="res-details">
              <p className="adrs-res">{restaurant.address}</p>
              <p className="delivery-time">{restaurant.deliveryTime}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
 
  
}
export default Restaurants;
