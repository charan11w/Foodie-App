import { configureStore } from "@reduxjs/toolkit";
import LoginFormReducer from "./redux-slices/LoginFormSlice";
import RestaurantReducer,{fetchRestaurant} from './redux-slices/RestaurantSlice'
import AuthSlice  from "./redux-slices/AuthSlice";
import  ItemSlice  from "./redux-slices/ItemSlice";


export const store = configureStore({
  reducer: {
    login:LoginFormReducer,
    restaurants:RestaurantReducer,
    auth:AuthSlice,
    items:ItemSlice
  }
})