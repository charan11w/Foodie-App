import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Login from './components/pages/Login';
import Home from './components/pages/Home'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import RestaurantList from "./components/pages/RestaurantList";
import './styles/main.css'
import RestaurantItems from "./components/pages/RestaurantItems";
import Orders from "./components/pages/Orders";
import Cart from "./components/pages/Cart";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  }
  return (
      <BrowserRouter>
        {isAuthenticated && <Header onLogOut={handleLogout} />}
        <Routes>
          <Route path='/' element={isAuthenticated ? <Navigate to='/home' /> : <Login onLogin={handleLogin} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/restaurants' element={<RestaurantList />} />
          <Route path='/restaurantItems' element={<RestaurantItems />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        {isAuthenticated && <Footer />}
      </BrowserRouter>

  );
}

export default App;
