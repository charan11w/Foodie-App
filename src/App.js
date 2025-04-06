import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from './components/pages/Login';
import Home from './components/pages/Home'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Restaurants from "./components/pages/Restaurants";
import Category from './components/pages/Category'
import Orders from "./components/pages/Orders";
import Cart from "./components/pages/Cart";
import {SelectedRes} from  './components/pages/SelectedRes'
import { useDispatch, useSelector } from "react-redux";
import { setNav } from "./Redux-toolkit/Reducers/AuthSlice";
function App() {
  
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(setNav(0))
  },[])

  
  
  return (
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='restaurants' element={<Restaurants />} />
          <Route path='category' element={<Category />} />
          <Route path='orders' element={<Orders />} />
          <Route path='selectedRestaurant' element={<SelectedRes />} />
          <Route path='restaurantItems' element={<Orders />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

  );
}

export default App;
