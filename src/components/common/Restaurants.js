import { useState } from "react";
import RestaurantImage from "../../images/nimage.png";
import { useSelector } from "react-redux";
import { selectAllRestaurants } from "../../Redux-toolkit/Reducers/RestaurantSlice";


function Restaurants({restaurants}){
  return (
     <div className="types-R row">
    {restaurants.map((restaurant) => (
      <div className="eatPlace col-3" key={restaurant.id}>
        <div className="center-div" >
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
