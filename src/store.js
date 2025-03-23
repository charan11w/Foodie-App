import { configureStore } from "@reduxjs/toolkit";
import LoginFormReducer from "./Redux-toolkit/Reducers/LoginFormSlice";
import RestaurantReducer,{fetchRestaurant} from './Redux-toolkit/Reducers/RestaurantSlice'


export const store = configureStore({
  reducer: {
    login:LoginFormReducer,
    restaurants:RestaurantReducer
  }
})