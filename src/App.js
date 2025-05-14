import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Restaurants from "./components/pages/Restaurants";
import Orders from "./components/pages/Orders";
import {SelectedRes} from  './components/pages/SelectedRes'
import Items from "./components/ReusableComponents/Items";
import Category from "./components/pages/Category";
import  './App.css'


const App=() =>{  
  return (
      <BrowserRouter>
        <Header  />
        <div className="app-div">
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='items' element={<Items />} />
          <Route path='restaurants' element={<Restaurants />} />
          <Route path='category' element={<Category />} />
          <Route path='orders' element={<Orders />} />
          <Route path='selectedRestaurant' element={<SelectedRes />} />
          <Route path='restaurantItems' element={<Orders />} />
        </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>

  );
}

export default App;
