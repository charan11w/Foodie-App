import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import Loading from "../common/Loading";
import Restaurants from "../common/Restaurants";
import { fetchRestaurant, setActiveFood ,restaurantsStatus} from "../../Redux-toolkit/Reducers/RestaurantSlice";

function Restaurants1() {

  const {activeFood} = useSelector(globalState => globalState.restaurants)
  const {status,error,filteredRestaurants}=useSelector(globalState => globalState.restaurants)
  console.log(filteredRestaurants,'got')
  const dispatch=useDispatch();
  const status1=useSelector(restaurantsStatus)
  console.log(status1)

  const foodType = [
    { type: "all", name: "All", class: 'all-btn' },
    { type: "veg", name: "Veg", class: 'veg-btn' },
    { type: "non-veg", name: "Non-Veg", class: 'non-btn' },
  ];
  
  useEffect( () => {
    dispatch(fetchRestaurant())
    dispatch(setActiveFood('all'))
  } 
  ,[dispatch])


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
                  onClick={() => dispatch(setActiveFood(food.type))} 
                >
                  {food.name}
                </button>
              ))}
            </div>     
            {status === 'loading' ? <Loading /> : status === 'failed'?<h2>{error} to load data</h2>:<Restaurants restaurants={filteredRestaurants}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurants1;
