import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './components/pages/Login';
import Home from './components/pages/Home'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Restaurants from "./components/pages/Restaurants";
import Category from './components/pages/Category'
import Orders from "./components/pages/Orders";
import Cart from "./components/pages/Cart";
import {SelectedRes} from  './components/pages/SelectedRes'
function App() {
  
  const [isAuthenticated,setIsAuthenticated] =useState(true)
  const [activeNav, setActiveNav] = useState(0)

  const handleLogin = () => {
    setIsAuthenticated(false)
    setActiveNav(0)

  };
  const handleLogout = () => {
    setActiveNav(null)
  }
  const handleNav = (index) => {
    setActiveNav(index)
  }
  return (
      <BrowserRouter>
        {isAuthenticated && <Header onLogOut={handleLogout} setNav={handleNav} active={activeNav}/>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login onLogin={handleLogin}/>} />
          <Route path='restaurants' element={<Restaurants />} />
          <Route path='category' element={<Category />} />
          <Route path='orders' element={<Orders />} />
          <Route path='selectedRestaurant' element={<SelectedRes />} />
          <Route path='restaurantItems' element={<Orders />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
        
        {isAuthenticated && <Footer />}
      </BrowserRouter>

  );
}

export default App;
