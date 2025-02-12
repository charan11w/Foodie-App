import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Login from './components/pages/Login';
import Home from './components/pages/Home'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import './styles/main.css'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
      <BrowserRouter>
        {isAuthenticated && <Header />}
        <Routes>
          <Route path='/' element={isAuthenticated ? <Navigate to='/home' /> : <Login onLogin={handleLogin} />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        {isAuthenticated && <Footer />}
      </BrowserRouter>

  );
}

export default App;
