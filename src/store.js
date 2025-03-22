import { configureStore } from "@reduxjs/toolkit";
import LoginFormReducer from "./Redux-toolkit/Reducers/LoginFormSlice";


export const store = configureStore({
  reducer: {
    login:LoginFormReducer
  }
})