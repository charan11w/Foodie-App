import { useSelector } from "react-redux"
import noImage from '../../images/nimage.png'
import {selectedRestaurant } from "../../Redux-toolkit/Reducers/RestaurantSlice"

export const SelectedRes=() => {

  const restaurant =useSelector(selectedRestaurant)
  console.log(restaurant)
  return(
    <div className="selected"> 
      <div className=" container first-one">
        <div className="row mainRes">
          <div className="detailes col-6">
            <div className="selectedName">{}</div>
          </div>
          <div className="imagi col-6">
            <img src={noImage} className="resImage"/>
          </div>
        </div>
      </div>
    </div>
  )
}

