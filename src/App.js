import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Login from './components/pages/Login';
import Home from './components/pages/Home'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import RestaurantList from "./components/pages/RestaurantList";
import './styles/main.css'
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
        </Routes>
        {isAuthenticated && <Footer />}
      </BrowserRouter>

  );
}

export default App;
