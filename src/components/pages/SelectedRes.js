import { useSelector } from "react-redux"
import noImage from '../../images/nimage.png'
import {selectedRestaurant } from "../../Redux-toolkit/Reducers/RestaurantSlice"
import { FiMapPin } from "react-icons/fi";
import mana from '../../images/mana.png'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


export const SelectedRes=() => {

  const restaurant =useSelector(selectedRestaurant)
  const{address, deliveryTime,name,ratings,numberOfReviews,minimumOrder} = restaurant;
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} color="gold" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} color="gold" />);
      } else {
        stars.push(<FaRegStar key={i} color="gold" />);
      }
    }
    return stars;
  };

  return (
    <div className="selected">
      <div className="container first-one">
        <div className="row mainRes">
          {/* Restaurant Details Section */}
          <div className="detailes col-6">
            <div className="selectedName row">
              <div className="col-3 csr">
                <img src={mana} className="smallImg" alt="Restaurant Logo" />
              </div>
              <div className="col-9 seal rcb">
                <div className="rs-name">{name}</div>
                <div className="rating">
                  {renderStars(ratings)} <span className="rating-span">{ratings} | {numberOfReviews} Reviews</span>
                </div>
                <div className="address">
                  <FiMapPin /> {address}
                </div>
              </div>
            </div>
            <div className="remember ">

            </div>
          </div>
          
          {/* Restaurant Image Section */}
          <div className="imagi col-6">
            <img src={noImage} className="resImage" alt="Restaurant" />
          </div>
        </div>
      </div>
    </div>
  );
};
