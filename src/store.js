import { configureStore } from "@reduxjs/toolkit";
import LoginFormReducer from "./Redux-toolkit/Reducers/LoginFormSlice";
import RestaurantReducer,{fetchRestaurant} from './Redux-toolkit/Reducers/RestaurantSlice'
import AuthSlice  from "./Redux-toolkit/Reducers/AuthSlice";


export const store = configureStore({
  reducer: {
    login:LoginFormReducer,
    restaurants:RestaurantReducer,
    auth:AuthSlice
  }
})